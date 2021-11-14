import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogListing from "../components/bloglisting"
const BlogPage = (props) => {
   return (
      <Layout>
         <BlogPageInner {...props} />
      </Layout>
   )
}

const BlogPageInner = (props) => {
   const assortedArticle = props.data.strapi.articles.sort((a, b) => {
      return new Date(b.publish_date) - new Date(a.publish_date)
   })

   return <BlogListing article={assortedArticle} />
}

export default BlogPage

export const query = graphql`
   query {
      strapi {
         articles {
            id
            title
            publish_date
         }
      }
   }
`
