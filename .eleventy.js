import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // 1. Copy semua file statis DARI DALAM 'src'
  // Path ini relatif terhadap direktori root proyek Anda.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/blog/images"); // Contoh jika ada gambar khusus blog
  // Tambahkan folder lain dari 'src' yang perlu disalin jika ada.

  // 2. Tambahkan filter tanggal (ini sudah benar)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // 3. Koleksi untuk semua artikel blog (ini sudah benar)
  eleventyConfig.addCollection("blog", (collection) =>
    collection.getFilteredByTag("blog").sort((a, b) => b.date - a.date)
  );

  // 4. Konfigurasi direktori utama untuk SELURUH SITUS
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",          // Folder untuk semua partials & layouts
      layouts: "_includes/layouts"    // Subfolder khusus untuk file layout utama
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}