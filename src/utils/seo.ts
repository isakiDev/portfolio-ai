import { site } from "@/config/site";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

export function buildPageTitle(title?: string): string {
  if (!title) return site.title;
  return `${title} | ${site.shortName} - Desarrollador de Software`;
}
