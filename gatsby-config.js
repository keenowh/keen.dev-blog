require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      title: "keen.dev",
      description: "Blog",
      author: "Strapi team",
      siteUrl: "http://",
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
            url: "https://keen-strapi-backend.herokuapp.com/graphql",
         },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            theme_color: "#663399",
            display: "minimal-ui",
         },
      },
      "gatsby-plugin-offline",
   ],
}
