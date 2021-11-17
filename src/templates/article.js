import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import Layout from "./../components/layout"

export const query = graphql`
   query ($id: ID!) {
      strapi {
         article(id: $id) {
            title
            content
            publish_date
         }
      }
   }
`

const StyledPostDate = styled.time`
   font-weight: 400;
   display: block;
   text-align: center;
`
const StyledHeadline = styled.h1`
   padding: 10px;
   color: black;
   margin: 0;
   text-align: center;
`

const StyledP = styled.p`
   > * {
      margin-top: 1rem;
      margin-bottom: 0;
   }
`

const ReceiptContainer = styled.div`
   font-family: "VT323", monospace;
   width: 90%;
   padding: 20px;
   background: #fffff0;
   margin: 1rem auto;
   box-shadow: 5px 5px 19px black;
   color: black;

   @media (min-width: 768px) {
      width: 60%;
   }
`
const AsteriskBorder = styled.div`
   height: 14px;
   border-width: 7px 0 0;
   border-style: solid;
   border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEX///+KioowMDBAQEAMDAxiYmLm5ubMzMxQUFC2trYiIiIAAAA2IPbUAAAAAXRSTlMAQObYZgAAACVJREFUCB1jYAADLiDJNaOKgYEtpIGBgcO4mYGBk4kTKMjIwAAAMvcC1AqHZy8AAAAASUVORK5CYII=")
      7 0 0 repeat;
`
const Article = ({ data }) => {
   const article = data.strapi.article

   return (
      <Layout>
         <ReceiptContainer>
            <StyledHeadline>{article.title}</StyledHeadline>
            <StyledPostDate>
               <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </StyledPostDate>
            <AsteriskBorder />
            <StyledP>
               <ReactMarkdown source={article.content} />
            </StyledP>
         </ReceiptContainer>
      </Layout>
   )
}

export default Article
