import { describe, expect, it } from "vitest";
import { getJsonFeedString, validateJsonFeedOptions } from "../core";

describe("getJsonFeedString", async () => {
  it("successfully renders the minimal", async () => {
    const options = {
      title: "Arrietty's Blog",
      items: [
        {
          id: "/kitchen",
        },
      ],
    };
    const result = await getJsonFeedString(options);
    expect(result).toBe(
      `{"version":"https://jsonfeed.org/version/1.1","title":"Arrietty's Blog","items":[{"id":"/kitchen"}]}`,
    );
  });
});

describe("validateJsonFeedOptions", async () => {
  it("successfully validates the minimal", async () => {
    const options = {
      title: "Arrietty's Blog",
      items: [
        {
          id: "/kitchen",
        },
      ],
    };
    const result = await validateJsonFeedOptions(options);
    expect(result).toStrictEqual({
      version: "https://jsonfeed.org/version/1.1",
      title: "Arrietty's Blog",
      items: [
        {
          id: "/kitchen",
        },
      ],
    });
  });
});
