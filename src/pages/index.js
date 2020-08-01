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
const IndexPage = () => (
  <Layout>
    <StyledContainer></StyledContainer>
  </Layout>
)

export default IndexPage
