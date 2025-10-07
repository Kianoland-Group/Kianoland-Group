import { DateTime } from "luxon";

export default function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addPassthroughCopy("../css");
  eleventyConfig.addPassthroughCopy("../images");
  eleventyConfig.addPassthroughCopy("../admin");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
