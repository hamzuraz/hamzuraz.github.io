import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,json}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		techStack: z.array(z.string()),
		featured: z.boolean().default(false),
		order: z.number().default(0),
		coverImage: z.string().optional(),
		sourceCodeUrl: z.string().optional(),
		sourceCodeButtonText: z.string().default("Source code"),
		liveDemoUrl: z.string().optional(),
		liveDemoButtonText: z.string().default("Live demo"),
	}),
});

export const collections = { projects };
