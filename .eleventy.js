const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function(eleventyConfig) {
  // Add RSS plugin
  eleventyConfig.addPlugin(rssPlugin);
  
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy any static assets
  eleventyConfig.addPassthroughCopy("assets");
  
  // Create a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });
  
  // Format dates
  eleventyConfig.addFilter("dateFormat", function(date) {
    return date.toDateString();
  });
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};