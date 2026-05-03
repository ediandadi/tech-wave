import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/insights";

const BASE = "https://techwave.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/sourcing",
    "/coordination",
    "/commodities",
    "/insights",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/cookies",
    "/disclaimer",
  ];

  const articleRoutes = ARTICLES.map((a) => `/insights/${a.slug}`);

  return [...staticRoutes, ...articleRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/insights/") ? 0.7 : 0.8,
  }));
}
