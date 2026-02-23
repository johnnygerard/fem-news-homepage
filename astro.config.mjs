import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  experimental: {
    fonts: [
      // Inter: sans-serif typeface
      // @see https://fonts.google.com/specimen/Inter/about
      {
        cssVariable: "--font-inter",
        name: "Inter",
        provider: fontProviders.google(),
        styles: ["normal"],
        subsets: ["latin"],
        weights: ["400 800"],
      },
    ],
  },
  integrations: [sitemap()],
  site: "https://fem-news-homepage.mail-25a.workers.dev",
  trailingSlash: "never",
  vite: {
    plugins: [
      // @ts-expect-error https://github.com/withastro/astro/issues/14030
      tailwindcss(),
    ],
  },
});
