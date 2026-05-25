# astro-jsonfeed

Add a [JSON Feed](https://www.jsonfeed.org) to blogs, changelogs, or any chronological content on [Astro](https://astro.build/) sites.

## Installation and use

1. Install `astro-jsonfeed` using your preferred package manager:
   - **npm**: `npm install astro-jsonfeed`
   - **pnpm**: `pnpm add astro-jsonfeed`
   - **Yarn**: `yarn add astro-jsonfeed`

2. Create a file in the `src/pages` directory with a name of your choice and the extension `.json.js` (or `.json.ts` if you are using Typescript) to be used as the output URL for the feed. A somewhat common convention is to use `feed.json`.

3. Import the `jsonFeed()` helper from `astro-jsonfeed` package into your page file and export a function that returns it using the following parameters:
```ts
import jsonFeed from "astro-jsonfeed";

export function GET(context) {
  return jsonFeed({
    title: "Arrietty's Blog",
    description: "Notes from under the floorboards.",
    items: [
      {
        id: "/kitchen",
        url: new URL("/kitchen", context.site).href,
        title: "First Expedition to the Kitchen",
        content_text: "Father finally said I could come up. Up! Through the wall, past the clock, all the way to the kitchen.",
        content_html: "<p>Father finally said I could come up. Up! Through the wall, past the clock, all the way to the kitchen.</p>",
        date_published: "2026-05-25T23:30:15-04:00",
        tags: ["borrows"],
      },
    ],
  });
}
```
