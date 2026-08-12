import os
import re

def fix_breadcrumbs():
    routes_dir = "src/routes"
    files_fixed = 0
    
    # 1. First, find buildBreadcrumbJsonLd usage to ensure we know how to use it
    # We already know it's in @/components/long-form-page
    
    for root, dirs, files in os.walk(routes_dir):
        for file in files:
            if not file.endswith(".tsx") or file == "__root.tsx":
                continue
                
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Skip if already has BreadcrumbList
            if "BreadcrumbList" in content:
                continue
                
            # Check if it has a head() and scripts: []
            if "head:" in content and "scripts:" in content:
                # We need to inject buildBreadcrumbJsonLd call
                
                # Check if buildBreadcrumbJsonLd is imported
                if "buildBreadcrumbJsonLd" not in content:
                    # Add import
                    content = re.sub(
                        r'import {([^}]*)} from "@/components/long-form-page"',
                        r'import {\1, buildBreadcrumbJsonLd} from "@/components/long-form-page"',
                        content
                    )
                    # If not from long-form-page, check if we need to add the import line
                    if "buildBreadcrumbJsonLd" not in content:
                        # Find first import and insert after
                        content = re.sub(r'(import .* from .*)', r'\1\nimport { buildBreadcrumbJsonLd } from "@/components/long-form-page"', content, count=1)

                # Determine route path for breadcrumb
                # e.g. src/routes/about.tsx -> /about
                route_path = "/" + os.path.splitext(file)[0].replace(".", "/")
                if route_path == "/index": route_path = "/"
                
                # Try to extract title from meta
                title_match = re.search(r'title: ["\'](.*?)["\']', content)
                title = title_match.group(1) if title_match else "Cricbet99"
                # Clean up title for breadcrumb (remove | Cricbet99 etc)
                title = title.split(" | ")[0].split(" — ")[0]

                # Inject into scripts array
                breadcrumb_script = f"""{{
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("{route_path}", "{title}")),
      }},"""
                
                # Look for scripts: [
                new_content = content.replace("scripts: [", f"scripts: [\n      {breadcrumb_script}")
                
                if new_content != content:
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    files_fixed += 1
                    print(f"Fixed breadcrumbs in {path}")

if __name__ == "__main__":
    fix_breadcrumbs()
