module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css/'); // on build, it copies the files and adds them to output directory
  eleventyConfig.addWatchTarget('./src/css/'); // changes trigger a build

  eleventyConfig.addPassthroughCopy('./src/projects/images');

  eleventyConfig.addFilter("sortByDate", (projects) => projects.sort((a, b) => a.data.date < b.data.date ? 1 : -1));

  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
  };
};