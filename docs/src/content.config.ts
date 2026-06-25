import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";
import { z } from "zod";

export const collections = {
  changelog: defineCollection({
    loader: glob({ base: "./src/content/changelog", pattern: "*.md" }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
