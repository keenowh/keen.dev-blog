import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogListing from "../components/bloglisting"
const BlogPage = props => {
   return (
      <Layout>
         <BlogPageInner {...props} />
      </Layout>
   )
}

const BlogPageInner = props => {
   // console.log(props.data.allStrapiArticle.edges)
   return <BlogListing article={props.data.strapi.articles} />
}

export default BlogPage

export const query = graphql`
   query {
      strapi {
         articles {
            id
            title
            published_at
         }
      }
   }
`
