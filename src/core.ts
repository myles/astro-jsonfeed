import * as z from "zod/v4";
import { jsonFeedSchema } from "./schema.js";
import { JsonFeedOptions, JsonFeedOutputOptions } from "./types.js";

export const getJsonFeedResponse = (
  jsonFeedOptions: JsonFeedOptions,
  outputOptions?: JsonFeedOutputOptions,
): Response => {
  const jsonFeedString = getJsonFeedString(jsonFeedOptions, outputOptions);
  return new Response(jsonFeedString, {
    headers: { "Content-Type": "application/feed+json" },
  });
};

export const getJsonFeedString = (
  jsonFeedOptions: JsonFeedOptions,
  outputOptions?: JsonFeedOutputOptions,
): string => {
  const validatedJsonFeedOptions = validateJsonFeedOptions(jsonFeedOptions);
  return JSON.stringify(validatedJsonFeedOptions, null, outputOptions?.space);
};

export const validateJsonFeedOptions = (jsonFeedOptions: JsonFeedOptions) => {
  const parsedResult = jsonFeedSchema.safeParse({
    version: "https://jsonfeed.org/version/1.1",
    ...jsonFeedOptions,
  });
  if (parsedResult.success) {
    return parsedResult.data;
  }
  throw new Error(
    [
      "[JSONFeed] Invalid or missing options:",
      ...parsedResult.error.issues.map((zodError: z.core.$ZodIssue) => {
        const path = zodError.path.join(".");
        return `${zodError.message} (${path})`;
      }),
    ].join("\n"),
  );
};
