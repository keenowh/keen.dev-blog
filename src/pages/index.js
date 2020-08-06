import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Link } from "gatsby"

const StyledContainer = styled.div`
   height: 350px;

   @media (min-width: 520px) {
      height: 400px;
   }

   @media (min-width: 1400px) {
      height: 500px;
   }
`

const StyledHeading = styled.h1`
   text-align: center;
   font-size: 8em;
`

const StyledStatementBlock = styled.div`
   max-width: 35em;
   margin: auto;
`

const StyledSocialLinks = styled.a`
   transition: background-color 0.25s;
   color: white;
   padding: 1em;
   margin-top: 2em;
   ${StyledSocialLinks}:hover {
      background-color: blue;
   }
`

const StyledLinkBlock = styled.div`
   text-align: center;
   width: 100%;
   display: block;
`
const IndexPage = () => (
   <Layout>
      <StyledContainer>
         <StyledHeading>Hello</StyledHeading>
         <StyledStatementBlock>
            <h4>
               I'm Keen, a web-developer curious in the backend and cloud
               engineering
            </h4>
         </StyledStatementBlock>
         <StyledLinkBlock>
            <StyledSocialLinks href="http://github.com/keenowh">
               Github
            </StyledSocialLinks>
            <StyledSocialLinks href="http://github.com/keenowh">
               LinkedIn
            </StyledSocialLinks>
         </StyledLinkBlock>
         <div style={{ padding: "3em", margin: "auto" }}>
            Email: keenballon@gmail.com
         </div>
      </StyledContainer>
   </Layout>
)

export default IndexPage
