import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsEn = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/data/projects/en"}),
    schema: z.object({
        title: z.string(),
        images: z.array(z.string()),
        techStack: z.array(z.string()),
        note: z.string(),
        github: z.string().url(),
        slug: z.string(),
        id: z.string()
    }),
});

const projectsEs = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/data/projects/es"}),
    schema: z.object({
        title: z.string(),
        images: z.array(z.string()),
        techStack: z.array(z.string()),
        note: z.string(),
        github: z.string().url(),
        slug: z.string(),
        id: z.string()
    }),
});

const latestProjectsEn = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/data/latestProjects/en"}),
    schema: z.object({
        title: z.string(),
        images: z.array(z.string()),
        techStack: z.array(z.string()),
        note: z.string(),
        github: z.string().url(),
        slug: z.string(),
        id: z.string()
    }),
});

const latestProjectsEs = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/data/latestProjects/es"}),
    schema: z.object({
        title: z.string(),
        images: z.array(z.string()),
        techStack: z.array(z.string()),
        note: z.string(),
        github: z.string().url(),
        slug: z.string(),
        id: z.string()
    }),
});


export const collections = {
    projectsEn, projectsEs, latestProjectsEn, latestProjectsEs
};