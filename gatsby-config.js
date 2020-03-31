require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Rachel Lim`,
    description: `Rachel Lim's portfolio`,
    author: `Rachel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rachel-site`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/rachel.jpg`, 
      },
    },
    {
      resolve: `gatsby-source-contentful`, 
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      }
    },
    {
      resolve: `@contentful/rich-text-react-renderer`
    }
  ],
  pathPrefix: "/racalim.github.io",
}
