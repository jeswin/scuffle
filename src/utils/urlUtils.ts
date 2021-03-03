export function getHostname(urlString: string): string {
  const url = new URL(urlString);
  return url.hostname;
}
