module.exports = {
  siteMetadata: {
    title: `Meridja Nassim`,
    description: `The official website Meridja Abdellah Nassim`,
    author: `@AbdMeri`,
    favicon :'./src/images/favicon.png'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abdellah Nassim Meridja`,
        short_name: `nassim`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fafafa`,
        display: `fullscreen`,
        icon: './src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/","/portfolio/*"],
      },
    },
  ],
}
