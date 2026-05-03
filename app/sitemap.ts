import type { MetadataRoute } from "next";

const BASE = "https://techwave.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/sourcing",
    "/coordination",
    "/commodities",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/cookies",
    "/disclaimer",
  ];

  return staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
