import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/blog", "/experience", "/contact"];
  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date()
  }));
}
