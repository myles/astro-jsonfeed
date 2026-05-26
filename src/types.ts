import * as z from "zod/v4";
import {
  jsonFeedAttachmentSchema,
  jsonFeedAuthorSchema,
  jsonFeedItemSchema,
  jsonFeedSchema,
} from "./schema.js";

export type JsonFeedOutputOptions = {
  space?: number;
};

export type JsonFeedOptions = {
  title: z.infer<typeof jsonFeedSchema>["title"];
  home_page_url?: z.infer<typeof jsonFeedSchema>["home_page_url"];
  feed_url?: z.infer<typeof jsonFeedSchema>["feed_url"];
  description?: z.infer<typeof jsonFeedSchema>["description"];
  user_comment?: z.infer<typeof jsonFeedSchema>["user_comment"];
  next_url?: z.infer<typeof jsonFeedSchema>["next_url"];
  icon?: z.infer<typeof jsonFeedSchema>["icon"];
  favicon?: z.infer<typeof jsonFeedSchema>["favicon"];
  authors?: z.infer<typeof jsonFeedAuthorSchema>[];
  language?: z.infer<typeof jsonFeedSchema>["language"];
  expired?: z.infer<typeof jsonFeedSchema>["expired"];
  items: z.input<typeof jsonFeedItemSchema>[];
};

export type JsonFeedItem = {
  id: z.infer<typeof jsonFeedItemSchema>["id"];
  url?: z.infer<typeof jsonFeedItemSchema>["url"];
  external_url?: z.infer<typeof jsonFeedItemSchema>["external_url"];
  title?: z.infer<typeof jsonFeedItemSchema>["title"];
  content_html?: z.infer<typeof jsonFeedItemSchema>["content_html"];
  content_text?: z.infer<typeof jsonFeedItemSchema>["content_text"];
  summary?: z.infer<typeof jsonFeedItemSchema>["summary"];
  image?: z.infer<typeof jsonFeedItemSchema>["image"];
  banner_image?: z.infer<typeof jsonFeedItemSchema>["banner_image"];
  date_published?: z.input<typeof jsonFeedItemSchema>["date_published"];
  date_modified?: z.input<typeof jsonFeedItemSchema>["date_modified"];
  authors?: z.infer<typeof jsonFeedAuthorSchema>[];
  tags?: z.infer<typeof jsonFeedItemSchema>["tags"];
  language?: z.infer<typeof jsonFeedItemSchema>["language"];
  attachments?: z.infer<typeof jsonFeedAttachmentSchema>[];
};
