import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import { Link } from "gatsby"
import GlobalStyle from "./GlobalStyle.js"
import "prismjs/themes/prism.css"

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`
const StyledHeader = styled.header``

const TitleLink = styled(Link)`
  text-transform: lowercase;
  color: #000;
  text-decoration: none;
  border: none;

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
      {/* <Seo /> */}
      {children}
    </Main>
  )
}

export default Layout
