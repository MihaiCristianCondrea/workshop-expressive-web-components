const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('docs-src/docs.css');
  eleventyConfig.addPassthroughCopy('docs-src/favicon.svg');
  eleventyConfig.addPassthroughCopy('docs-src/.nojekyll');
  eleventyConfig.addCollection('example', (collectionApi) =>
    collectionApi
      .getFilteredByTag('example')
      .sort(
        (a, b) =>
          (a.data.order ?? 999) - (b.data.order ?? 999) ||
          String(a.data.name).localeCompare(String(b.data.name))
      )
  );
  return {
    dir: {
      input: 'docs-src',
      output: 'docs',
    },
    templateExtensionAliases: {
      '11ty.cjs': '11ty.js',
      '11tydata.cjs': '11tydata.js',
    },
  };
};
