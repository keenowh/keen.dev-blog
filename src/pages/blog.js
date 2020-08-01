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
  console.log(props.data.allStrapiArticle.edges)
  return <BlogListing article={props.data.allStrapiArticle.edges} />
}

export default BlogPage

export const query = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
          published_at
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
  }
`
