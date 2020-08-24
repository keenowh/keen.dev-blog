exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const result = await graphql(
      `
         {
            strapi {
               articles {
                  id
               }
            }
         }
      `
   )

   if (result.errors) {
      throw result.errors
   }

   // Create blog articles pages.
   const articles = result.data.strapi.articles

   articles.forEach((article, index) => {
      createPage({
         path: `/article/${article.id}`,
         component: require.resolve("./src/templates/article.js"),
         context: {
            id: article.id,
         },
      })
   })
}
