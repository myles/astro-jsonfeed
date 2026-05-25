import * as z from "zod/v4";

const dateSchema = z
  .union([z.string(), z.number(), z.date()])
  .transform((value) => new Date(value))
  .refine((value) => !isNaN(value.getTime()));

export const jsonFeedAuthorSchema = z.object({
  name: z.string().optional(),
  url: z.url().optional(),
  avatar: z.url().optional(),
});

export const jsonFeedAttachmentSchema = z.object({
  url: z.url(),
  mime_type: z.string(),
  title: z.string().optional(),
  size_in_bytes: z.number().optional(),
  duration_in_seconds: z.number().optional(),
});

export const jsonFeedItemSchema = z.object({
  id: z.string(),
  url: z.url().optional(),
  external_url: z.url().optional(),
  title: z.string().optional(),
  content_html: z.string().optional(),
  content_text: z.string().optional(),
  summary: z.string().optional(),
  image: z.url().optional(),
  banner_image: z.url().optional(),
  date_published: dateSchema.optional(),
  date_modified: dateSchema.optional(),
  authors: z.array(jsonFeedAuthorSchema).optional(),
  tags: z.array(z.string()).optional(),
  language: z.string().optional(),
  attachments: z.array(jsonFeedAttachmentSchema).optional(),
});

export const jsonFeedSchema = z.object({
  version: z.literal("https://jsonfeed.org/version/1.1"),
  title: z.string(),
  home_page_url: z.url().optional(),
  feed_url: z.url().optional(),
  description: z.string().optional(),
  user_comment: z.string().optional(),
  next_url: z.url().optional(),
  icon: z.url().optional(),
  favicon: z.url().optional(),
  authors: z.array(jsonFeedAuthorSchema).optional(),
  language: z.string().optional(),
  expired: z.boolean().optional(),
  items: z.array(jsonFeedItemSchema),
});
