// blog/.eleventy.js
import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // 🔹 Tambahkan filter agar `readableDate` dikenali di build
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // 🔹 Copy folder CSS & images ke output (_site)
  eleventyConfig.addPassthroughCopy("blog/css");
  eleventyConfig.addPassthroughCopy("blog/images");

  // 🔹 Pengaturan direktori utama
  return {
    dir: {
      input: "blog",
      includes: "_includes",
      data: "_data",
      output: "blog/_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
