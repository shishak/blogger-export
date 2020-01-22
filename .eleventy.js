const CleanCSS = require("clean-css");
const postcss = require('postcss')
const precss = require('precss')

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", require("./filters/dates.js") );

  return {
    dir: {
      input: "site",
      output: "dist",
      data: "_data"
    },
    feed: process.env.MEDIUM_FEED ||'https://news-ukraine-api.blogspot.com/feeds/posts/default'
  };

};
