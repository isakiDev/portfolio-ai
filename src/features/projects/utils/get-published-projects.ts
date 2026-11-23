import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getPublishedProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);

  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
