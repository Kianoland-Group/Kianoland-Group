import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // Copy semua file statis yang dibutuhkan blog
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPassthroughCopy("blog/assets");
  eleventyConfig.addPassthroughCopy("blog/css");
  eleventyConfig.addPassthroughCopy("blog/js");

  // Tambahkan filter tanggal
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // Koleksi untuk semua artikel blog
  eleventyConfig.addCollection("blog", (collection) =>
    collection.getFilteredByTag("blog").sort((a, b) => b.date - a.date)
  );

  // Konfigurasi direktori build khusus blog
  return {
    dir: {
      input: "blog",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site/blog"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
