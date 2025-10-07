import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // Salin folder statis ke root hasil build
  eleventyConfig.addPassthroughCopy({ "blog/images": "images" });
  eleventyConfig.addPassthroughCopy({ "blog/css": "css" });

  return {
    dir: {
      input: "blog",
      includes: "_includes",
      layouts: "_includes",
      output: ".", // hasil build langsung ke root project
    },
  };
}
