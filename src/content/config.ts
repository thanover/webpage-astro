import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string().default("Tom Hanover"),
      tags: z.array(z.string()).optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
