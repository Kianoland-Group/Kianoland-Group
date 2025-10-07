import { DateTime } from "luxon";

/** @type {import("@11ty/eleventy").UserConfig} */
export default function (eleventyConfig) {
  // ✅ Tambahkan filter readableDate
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // ✅ Salin file statis
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPassthroughCopy("blog/css");

  // ✅ Konfigurasi folder input/output
  return {
    dir: {
      input: "blog",
      includes: "_includes",
      layouts: "_includes",
      output: "blog/_site",
    },
  };
}
