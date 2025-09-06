const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function(eleventyConfig) {
  // Add RSS plugin
  eleventyConfig.addPlugin(rssPlugin);
  
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy images to output
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy robots.txt to output
  eleventyConfig.addPassthroughCopy("robots.txt");
  
  // Copy form success page
  eleventyConfig.addPassthroughCopy("form-success.html");
  
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
  
  // Random quote filter
  eleventyConfig.addFilter("randomQuote", function(quotes) {
    if (!quotes || quotes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
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