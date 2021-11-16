import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import { Link } from "gatsby"
import GlobalStyle from "./GlobalStyle.js"
import "prismjs/themes/prism.css"
import SEO from "./seo"

const Main = styled.main`
   width: 90%;
   margin: 0 auto;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
`
const StyledHeader = styled.header`
   @media (min-width: 1080px) {
      height: 120px;
   }
`

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
   padding: 0.3em 0;
   margin: 0;
   text-align: center;
   @media (min-width: 350px) {
      padding: 0.5em 0 0.2em;
   }

   @media (min-width: 520px) {
      padding: 0.667em 0;
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
