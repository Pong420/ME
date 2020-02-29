module.exports = {
  siteMetadata: {
    title: `Pong | Web Developer`,
    description: `I am Pong, a web developer`,
    author: `@Pong`,
    domain: 'https://pong420.netlify.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets.*.svg/
        }
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import './src/scss/index.scss';`,
        implementation: require('sass')
      }
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typescript`,
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
