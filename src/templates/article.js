import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import Layout from "./../components/Layout"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`
const StyledHeadline = styled.h1`
  color: white;
  background-color: black;
  padding: 10px;
  text-align: center;
`

const StyledP = styled.p`
  color: white;
`

const Article = ({ data }) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <StyledHeadline>{article.title}</StyledHeadline>
      <StyledP>
        <hr></hr>
        <ReactMarkdown source={article.content} />
      </StyledP>
      <StyledPostDate>
        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
      </StyledPostDate>
    </Layout>
  )
}

export default Article
