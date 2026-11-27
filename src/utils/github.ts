export function getShortCommitHash(url: string, length = 7): string {
  const parts = url.split("/");
  return parts[parts.length - 1]?.slice(0, length) ?? "";
}
