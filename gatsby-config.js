module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: ``,
    author: `@author`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets.*.svg/
        }
      }
    },
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
    `gatsby-plugin-typescript`
  ]
};
