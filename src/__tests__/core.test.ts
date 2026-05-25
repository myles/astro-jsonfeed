import { describe, expect, it } from "vitest";
import { getJsonFeedString, validateJsonFeedOptions } from "../core";
import { minimalOptions, minimalOutput } from "./fixtures/minimal";
import { fullOptions, fullOutput } from "./fixtures/full";

describe("getJsonFeedString", () => {
  it("successfully renders the minimal", () => {
    const result = getJsonFeedString(minimalOptions);
    expect(result).toBe(
      `{"version":"https://jsonfeed.org/version/1.1","title":"Arrietty's Blog","items":[{"id":"/kitchen"}]}`,
    );
  });
  it("successfully renders the full", () => {
    const result = getJsonFeedString(fullOptions);
    // Because the full fixture is a bit large, we are only going to do some
    // small tests.
    expect(result).toContain('"date_published":"2024-06-01T08:00:00.000Z"');
    expect(result).toContain('"date_modified":"2024-06-15T12:30:00.000Z"');
  });
});

describe("validateJsonFeedOptions", () => {
  it("successfully validates the minimal", () => {
    const result = validateJsonFeedOptions(minimalOptions);
    expect(result).toStrictEqual(minimalOutput);
  });
  it("successfully validates the full", () => {
    const result = validateJsonFeedOptions(fullOptions);
    expect(result).toStrictEqual(fullOutput);
  });
});
