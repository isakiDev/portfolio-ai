import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    repoURL: z.url().optional(),
    websiteURL: z.url().optional(),
    technologies: z.array(z.string().min(1)).optional(),
    cover: z.string().min(1).optional(),
    coverAlt: z.string().optional(),
    caseStudyURL: z.boolean().default(true),
  }),
});

export const collections = { blog, projects };
