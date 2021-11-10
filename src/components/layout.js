import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import { Link } from "gatsby"
import GlobalStyle from "./GlobalStyle.js"
import "prismjs/themes/prism.css"
import SEO from "./seo"

const Main = styled.main`
   // max-width: 83rem;
   // padding: 1em 1em 2em;
   margin: 0 auto;

   @media (min-width: 350px) {
      padding: 1rem 1.5rem 4rem;
   }

   @media (min-width: 520px) {
      padding: 4rem 8rem 0;
   }
`
const StyledHeader = styled.header``

const TitleLink = styled(Link)`
   text-transform: lowercase;
   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  //  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
   color: white;
   text-decoration: none;
   border: none;
   font-weight: 800;

   &:hover {
      color: #0000ff;
   }
`

const StyledTitle = styled.h1`
   // margin-bottom: 2rem;
   margin: 0.3em 0;

   @media (min-width: 350px) {
      margin: 0.5em 0 0.2em;
   }

   @media (min-width: 520px) {
      margin: 0.667em 0;
   }
`

const Layout = ({ children }) => {
   return (
      <Main>
         <GlobalStyle />

         <StyledHeader>
            <StyledTitle>
               <TitleLink to="/">keen.dev</TitleLink>
            </StyledTitle>
            <Nav />
         </StyledHeader>
         <SEO />
         {children}
      </Main>
   )
}

export default Layout
