export function getOrigin(request: Request): string {
  const url = new URL(request.url);
  const xfProto = request.headers.get("x-forwarded-proto");
  const xfHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = xfProto?.split(",")[0].trim() || (url.hostname === "localhost" ? "http" : "https");
  const host = xfHost?.split(",")[0].trim() || url.host;
  return `${proto}://${host}`;
}
