import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

SCREENSHOTS = Path("/tmp/browser/responsiveness")
SCREENSHOTS.mkdir(parents=True, exist_ok=True)

async def capture(page, url, name):
    # Desktop
    await page.set_viewport_size({"width": 1280, "height": 800})
    await page.goto(url, wait_until="networkidle")
    await page.screenshot(path=str(SCREENSHOTS / f"{name}_desktop.png"))
    
    # Tablet
    await page.set_viewport_size({"width": 768, "height": 1024})
    await page.screenshot(path=str(SCREENSHOTS / f"{name}_tablet.png"))
    
    # Mobile
    await page.set_viewport_size({"width": 375, "height": 667})
    await page.screenshot(path=str(SCREENSHOTS / f"{name}_mobile.png"))

async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        urls = [
            ("http://localhost:8080/", "home"),
            ("http://localhost:8080/matches", "matches"),
            ("http://localhost:8080/schedule", "schedule"),
            ("http://localhost:8080/blog/how-to-place-a-live-bet", "blog_post")
        ]
        
        for url, name in urls:
            try:
                await capture(page, url, name)
                print(f"Captured {name}")
            except Exception as e:
                print(f"Failed to capture {name}: {e}")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
