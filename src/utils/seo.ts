import { site } from "@/config/site";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

export function buildPageTitle(title?: string, section?: string): string {
  if (!title) return site.title;
  if (section) return `${title} | ${section} | ${site.shortName}`;
  return `${title} | ${site.shortName}`;
}
