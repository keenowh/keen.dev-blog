import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Moment from "react-moment"

const DateSpan = styled.span`
   color: #999;
   margin-left: 0.5em;

   @media (max-width: 768px) {
      display: block;
      margin-left: 0;
   }
`

const StyledBlogListing = styled.ul`
   list-style: none;
`

const StyledBlogItem = styled.li`
   font-size: 1.8rem;
   width: 60%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 auto;
   margin-bottom: 0.5em;
   background-color: white;
   padding: 9px;

   @media (max-width: 768px) {
      width: 90%;
      display: block;
   }
`
const StyledBlogLink = styled.a`
   color: black;
   max-width: 60%;

   &:hover {
      color: blue;
      text-decoration: none;
   }
`

const BlogListing = ({ article }) => {
   const articleLinks = article.map((article) => {
      return (
         <StyledBlogItem key={article.id}>
            <Link
               style={{ textDecoration: "none" }}
               to={`/article/${article.id}`}
            >
               <StyledBlogLink>{article.title}</StyledBlogLink>
            </Link>
            <DateSpan>
               (<Moment format="MMM Do YYYY">{article.publish_date}</Moment>)
            </DateSpan>
         </StyledBlogItem>
      )
   })

   return <StyledBlogListing>{articleLinks}</StyledBlogListing>
}

export default BlogListing
