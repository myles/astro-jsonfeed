import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getJsonFeedResponse } from "astro-jsonfeed";

export async function GET(context: APIContext) {
  const entries = await getCollection("changelog");
  const sorted = entries.sort((a, b) => (a.id > b.id ? -1 : 1));

  const changelogUrl = context.site
    ? new URL("/changelog", context.site).href
    : undefined;

  return getJsonFeedResponse({
    title: "astro-jsonfeed Changelog",
    description: "Changelog for the astro-jsonfeed package.",
    home_page_url: changelogUrl,
    feed_url: context.site
      ? new URL("/feed.json", context.site).href
      : undefined,
    items: sorted.map((entry) => ({
      id: entry.id,
      url: changelogUrl,
      title: entry.data.title,
      content_html: entry.rendered?.html,
      summary: entry.data.description,
      date_published: /^\d{4}-\d{2}-\d{2}/.test(entry.id)
        ? new Date(entry.id)
        : undefined,
    })),
  });
}
