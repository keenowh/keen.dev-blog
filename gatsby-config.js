require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      title: "keen.dev",
      description: "Blogsite",
      author: "Keen Ballon",
      siteUrl: "http://keendev.netlify.app",
      image: "/gatsby-icon.png",
   },
   flags: {
      FAST_DEV: true,
   },
   plugins: [
      {
         resolve: "gatsby-plugin-styled-components",
      },
      "gatsby-plugin-react-helmet",
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: "gatsby-source-graphql",
         options: {
            // Arbitrary name for the remote schema Query type
            typeName: "STRAPI",
            // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
            fieldName: "strapi",
            // Url to query from
            url: "https://keendev-strapi-backend.herokuapp.com/graphql",
         },
      },
      {
         resolve: "gatsby-source-strapi",
         options: {
            apiURL: "https://keendev-strapi-backend.herokuapp.com",
            collectionTypes: ["articles", "projects"],
            singleTypes: [`homepage`, `global`], // Defaults to 100
            queryLimit: 1000,
         },
      },
      {
         resolve: "gatsby-transformer-sharp",
         options: {
            // The option defaults to true
            checkSupportedExtensions: false,
         },
      },
      "gatsby-plugin-sharp",
      "gatsby-plugin-fontawesome-css",
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            theme_color: "#663399",
            display: "minimal-ui",
            icon: `src/images/gatsby-icon.png`,
         },
      },
      // "gatsby-plugin-offline",
   ],
}
