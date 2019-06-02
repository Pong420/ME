module.exports = {
  siteMetadata: {
    title: `Pong | Web Developer`,
    description: `I am Pong, a web developer`,
    author: `@Pong`,
    domain: 'https://pong420.netlify.com',
    imageSrcPath: `socialmediashare.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        data: `@import '~scss/index.scss';`
      }
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Pong420',
        short_name: 'Pong420',
        icon: 'src/assets/github_512x512.png',
        start_url: './index.html',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000'
      }
    },
    'gatsby-plugin-offline'
  ]
};
