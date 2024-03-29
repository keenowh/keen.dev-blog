require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      title: "Keen Ballon",
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
      {
         resolve: "gatsby-plugin-netlify",
         options: {
            headers: {
               "/*.(woff|woff2)": ["Cache-Control: public, max-age=31536000"],
            },
         },
      },
      // {
      //    resolve: "gatsby-plugin-web-font-loader",
      //    options: {
      //       google: {
      //          families: ["VT323", "Libre Barcode 128 Text", "Roboto Mono"],
      //       },
      //    },
      // },
      {
         resolve: `gatsby-plugin-webfonts`,
         options: {
            fonts: {
               google: [
                  {
                     family: `VT323`,
                     variants: [`400`],
                  },
                  {
                     family: `Libre Barcode 128 Text`,
                     variants: [`400`],
                  },
                  {
                     family: `Roboto Mono`,
                  },
               ],
            },
         },
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
            contentTypes: ["articles", "projects"], // Defaults to 100
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
