const { DateTime } = require("luxon"); // ← tambahkan baris ini

module.exports = function(eleventyConfig) {
  // 🔹 Tambah filter untuk format tanggal
  eleventyConfig.addFilter("date", (dateObj, format = "dd MMMM yyyy") => {
    // Format tanggal jadi bahasa Indonesia, contoh: 6 Oktober 2025
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("id").toFormat(format);
  });

  // 🔹 Koleksi semua file .md di folder posts
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md");
  });

  // 🔹 Salin folder gambar (opsional)
  eleventyConfig.addPassthroughCopy("images");

  // 🔹 Pengaturan struktur build
  return {
    dir: {
      input: ".",
      output: "../blog-build",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
