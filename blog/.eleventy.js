// blog/.eleventy.js
import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // 🔹 Passthrough copy biar CSS & images bisa muncul
  eleventyConfig.addPassthroughCopy("blog/css");
  eleventyConfig.addPassthroughCopy("blog/images");

  // 🔹 Tambahkan filter tanggal agar readableDate bisa digunakan
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // 🔹 Konfigurasi dasar Eleventy
  return {
    dir: {
      input: "blog",
      includes: "_includes",
      data: "_data",
      output: "blog/_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
