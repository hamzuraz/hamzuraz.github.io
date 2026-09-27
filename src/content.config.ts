import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		techStack: z.array(z.string()),
		description: z.string(),

		coverImageUrl: z.string().optional(),
		liveDemoUrl: z.string().optional(),
		liveDemoText: z.string().optional(),
		sourceCodeUrl: z.string().optional(),
		sourceCodeText: z.string().optional(),

		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { projects };
