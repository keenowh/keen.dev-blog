import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const StyledContainer = styled.div`
   padding: 20px;
   font-family: "VT323", monospace !important;
   background: #fff;
   margin: 2rem auto 0;
   box-shadow: 5px 5px 19px black;
   color: black;
   @media (min-width: 1080px) {
      margin: auto auto;
   }

   @media (min-width: 376px) {
      width: 350px;
   }
`

const StyledHeading = styled.h1`
   text-align: center;
   font-size: 6rem;
   color: black;
   margin: 1rem 0;

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
   display: flex;
   padding: 5px 10px;
   align-items: center;
   justify-content: space-around;
   border: 1px dashed black;
`

const StyledLinkHeading = styled.div`
   color: black;
   margin-top: 12px;
`

const StyledLinkBlock = styled.div`
   margin: 1rem auto;
   display: flex;
   width: 200px;
   justify-content: space-between;
`
const ReceiptBreak = styled.div`
   font-size: 18px;
   font-weight: bold;
   color: black;
`

const EmailBlock = styled.div`
   border-bottom: 1px dashed #1f1f1f;
   padding: 2rem;
   margin: auto;
   color: black;
`

const BarcodeBlock = styled.div`
   font-family: "Libre Barcode 128 Text", cursive;
   color: black;
   font-size: 35px;
`

const ReceiptWrapper = styled.div`
   // display: flex;
   // align-content: center;
   // justify-content: center;
   
`

const IndexPage = () => (
   <Layout>
      <ReceiptWrapper>
         <StyledContainer style={{ textAlign: "center", color: "white" }}>
            <StyledHeading>Hello!</StyledHeading>
            <StyledStatementBlock>
               <p
                  style={{
                     margin: "0",
                     color: "black",
                     lineHeight: "1",
                  }}
               >
                  I'm Keen, a web-developer curious in the backend and cloud
                  engineering
               </p>
            </StyledStatementBlock>
            <StyledLinkHeading>
               Find me in one of these links:
            </StyledLinkHeading>
            <StyledLinkBlock>
               <StyledSocialLinks href="http://github.com/keenowh">
                  <FaGithub style={{ marginRight: "10px" }} />
                  Github
               </StyledSocialLinks>
               <StyledSocialLinks href="https://www.linkedin.com/in/keen-ballon/">
                  <FaLinkedin />
                  LinkedIn
               </StyledSocialLinks>
            </StyledLinkBlock>
            <ReceiptBreak>************************************</ReceiptBreak>
            <p style={{ color: "black", margin: "0" }}>Or contact me here:</p>
            <BarcodeBlock>keenballon@gmail.com</BarcodeBlock>
            <ReceiptBreak>************************************</ReceiptBreak>
            <p style={{ color: "black", margin: "0", fontSize: "1.6rem" }}>
               © {new Date().getFullYear()} Keen Renzo Ballon. All rights
               reserved.
            </p>
         </StyledContainer>
      </ReceiptWrapper>
   </Layout>
)

export default IndexPage
