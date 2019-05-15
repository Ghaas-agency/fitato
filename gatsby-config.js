module.exports = {
  siteMetadata: {
    title: 'Fitato&reg;: Fitness for the Intelligent Indian',
    siteUrl: `https://www.fitato.fit`,
  },
  pathPrefix: `/fitato-fit`,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
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
  ],
};
