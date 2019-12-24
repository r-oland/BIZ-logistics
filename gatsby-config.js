require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Biz Logistics`,
    description: `Van het opslaan van goederen tot een spoedige levering bij uw klanten. Besteed uw logistieke taken uit zodat u zich kan focussen op de kernactiviteiten binnen uw bedrijf.`,
    author: `Roland Branten`,
    siteUrl: `https://www.bizlogistics.nl/`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Biz Logistics`,
        short_name: `BIZ`,
        start_url: `https://www.bizlogistics.nl/`,
        background_color: `hsla(208, 24%, 30%, 1)`,
        theme_color: `hsla(208, 24%, 30%, 1)`,
        display: `standalone`,
        icon: `icon/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154982271-1"
      }
    }
  ]
};
