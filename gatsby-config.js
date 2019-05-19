const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Fitato&reg;: Fitness for the Intelligent Indian',
    siteUrl: `https://www.fitato.fit`,
  },
  pathPrefix: `/fitato-fit`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#EB1F2E`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/thank-you', '/contact', '/faq', '/community'],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        css: path.join(__dirname, 'src/css'),
        pages: path.join(__dirname, 'src/pages'),
        partials: path.join(__dirname, 'src/partials'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
  ],
};
