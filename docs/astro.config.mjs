import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://astro-jsonfeed.myles.garden",
  integrations: [
    starlight({
      title: "astro-jsonfeed",
      components: {
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/myles/astro-jsonfeed",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ label: "Getting Started", slug: "" }],
        },
        {
          label: "Reference",
          items: [{ label: "API", slug: "reference/api" }],
        },
        { label: "Changelog", link: "/changelog" },
      ],
    }),
  ],
});
