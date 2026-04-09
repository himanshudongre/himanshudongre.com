import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/updates", "/resume"].map((path) => ({
    url: `https://himanshudongre.com${path}`,
    lastModified: "2026-04-10",
  }));

  const projectRoutes = projects.map((project) => ({
    url: `https://himanshudongre.com/work/${project.slug}`,
    lastModified: project.updatedAt,
  }));

  return [...staticRoutes, ...projectRoutes];
}
