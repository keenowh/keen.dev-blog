import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Moment from "react-moment"

const DateSpan = styled.span`
   display: none;
   color: #999;
   margin-left: 0.5em;

   @media (min-width: 520px) {
      display: inline;
   }
`

const StyledBlogListing = styled.ul`
   list-style: none;
`

const StyledBlogItem = styled.li`
   font-size: 1.8rem;
   // text-decoration: none;
   margin-bottom: 0.5em;
   background-color: white;
   padding: 9px;
   text-align: center;
`
const StyledBlogLink = styled(Link)`
   color: black;

   &:hover {
      color: blue;
   }
`

const BlogListing = ({ article }) => {
   const articleLinks = article.map(article => {
      return (
         <StyledBlogItem key={article.id}>
            <StyledBlogLink to={`/article/${article.id}`}>
               {article.title}
            </StyledBlogLink>
            <DateSpan>
               (<Moment format="MMM Do YYYY">{article.published_at}</Moment>)
            </DateSpan>
         </StyledBlogItem>
      )
   })

   return <StyledBlogListing>{articleLinks}</StyledBlogListing>
}

export default BlogListing
