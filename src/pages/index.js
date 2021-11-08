import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

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
   font-size: 6rem;

   @media (min-width: 768px) {
      font-size: 9rem;
   }
`

const StyledStatementBlock = styled.div`
   max-width: 35em;
   margin: auto;
   text-align: center;
`

const StyledSocialLinks = styled.a`
   transition: background-color 0.25s;
   color: white;
   padding: 1em;
   margin-top: 2em;
`

const StyledLinkBlock = styled.div`
   text-align: center;
   width: 100%;
   display: block;
`

const IndexPage = () => (
   <Layout>
      <StyledContainer style={{ textAlign: "center", color: "white" }}>
         <StyledHeading>Hello</StyledHeading>
         <StyledStatementBlock>
            <h4 style={{ margin: "0" }}>
               I'm Keen, a web-developer curious in the backend and cloud
               engineering
            </h4>
         </StyledStatementBlock>
         <StyledLinkBlock>
            <p style={{ color: "white" }}>Find me in one of these links: </p>
            <StyledSocialLinks href="http://github.com/keenowh">
               Github
            </StyledSocialLinks>
            <StyledSocialLinks href="http://github.com/keenowh">
               LinkedIn
            </StyledSocialLinks>
         </StyledLinkBlock>
         <p style={{ color: "white" }}>Or contact me here:</p>
         <div style={{ padding: "2rem", margin: "auto" }}>
            Email: keenballon@gmail.com
         </div>
      </StyledContainer>
   </Layout>
)

export default IndexPage
