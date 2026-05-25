import { jsonFeedSchema } from "./schema";
import { JsonFeedOptions } from "./types";

export const getJsonFeedResponse = async (
  jsonFeedOptions: JsonFeedOptions,
): Promise<Response> => {
  const jsonFeedString = await getJsonFeedString(jsonFeedOptions);
  return new Response(jsonFeedString, {
    headers: { "Content-Type": "application/feed+json" },
  });
};

export const getJsonFeedString = async (
  jsonFeedOptions: JsonFeedOptions,
): Promise<string> => {
  const validatedJsonFeedOptions =
    await validateJsonFeedOptions(jsonFeedOptions);
  return JSON.stringify(validatedJsonFeedOptions);
};

export const validateJsonFeedOptions = async (
  jsonFeedOptions: JsonFeedOptions,
) => {
  const parsedResult = await jsonFeedSchema.safeParseAsync({
    version: "https://jsonfeed.org/version/1.1",
    ...jsonFeedOptions,
  });
  if (parsedResult.success) {
    return parsedResult.data;
  }
  const formattedError = new Error(
    [
      "[JSONFeed] Invalid of missing options:",
      ...parsedResult.error.issues.map((zodError) => {
        const path = zodError.path.join(".");
        return `${zodError.message} (${path})`;
      }),
    ].join("\n"),
  );
  return formattedError;
};
