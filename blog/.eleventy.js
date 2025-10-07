import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // Filter tanggal
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // ✅ Salin file dari luar folder blog ke hasil build
  eleventyConfig.addPassthroughCopy("../admin");
  eleventyConfig.addPassthroughCopy({ "../css": "css" });
  eleventyConfig.addPassthroughCopy({ "../images": "images" });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
}
