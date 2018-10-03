module.exports = {
  siteMetadata: {
    title: 'Fitato&reg;: Best Gyms in Pune | One Pass to Fitness',
    siteUrl: `https://www.fitato.fit`,
  },
  pathPrefix: `/fitato-fit`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#EB1F2E`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/thank-you"]
      }
    }
  ],
}
