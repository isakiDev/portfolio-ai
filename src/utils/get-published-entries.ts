import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

type CollectionName = "projects" | "blog";

export async function getPublishedEntries<T extends CollectionName>(
  collectionName: T,
): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(
    collectionName,
    ({ data }) => !data.draft,
  );

  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
