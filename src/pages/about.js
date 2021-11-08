import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"

const AboutSection = styled.div`
   font-size: 1.8rem;
   color: white;
   padding: 0 2em;
`

const AboutTitle = styled.div`
   width: 80%;
   font-size: 3rem;
   background: white;
   color: black;
   padding: 1rem;
   font-weight: 900;
`

const AboutBody = styled.div`
   width: 85%;
   margin: 0 auto;
   color: white;
   padding: 1rem;
`

const About = () => (
   <Layout>
      <AboutSection>
         <AboutTitle>Overview</AboutTitle>
         <AboutBody>
            <p>
               Hello! My name is Keen Renzo Ballon and I am based in Malabon,
               Metro Manila. A software developer with main focus is on Back-end
               Development and Systems Administration. I love the idea of
               intermediating between development and operations side of the
               tech industry, automating my way through it as much as possible.
            </p>
         </AboutBody>
         <AboutTitle>Contacts</AboutTitle>
      </AboutSection>
   </Layout>
)

export default About
