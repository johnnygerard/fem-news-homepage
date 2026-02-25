import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  env: {
    schema: {
      IMAGEKIT_URL_ENDPOINT: envField.string({
        context: "client",
        access: "public",
        default: "https://ik.imagekit.io/jgerard/fem-news-homepage/",
      }),
    },
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
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/jgerard/fem-news-homepage/**",
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
