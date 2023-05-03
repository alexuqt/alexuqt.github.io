module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('./src/css/'); // on build, it copies the files and adds them to output directory
  eleventyConfig.addWatchTarget('./src/css/'); // changes trigger a build

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};