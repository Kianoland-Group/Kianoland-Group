module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("../images");
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("posts/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "../_site/blog", // hasil build disimpan di folder blog di _site
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
