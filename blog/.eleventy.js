module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md");
  });

  // kalau kamu ingin copy gambar lokal blog (bukan root)
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "../_site/blog",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
