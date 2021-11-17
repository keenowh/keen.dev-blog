import React from "react"
import styled from "styled-components"
import ProjectListing from "./projectlisting"

const StyledListingSection = styled.section`
   width: 100%;
   margin: 0 auto;
   @media (min-width: 768px) {
      width: 60%;
   }
`

const ProjectListingSection = ({ projects }) => (
   <StyledListingSection>
      <h1>Projects</h1>
      <ProjectListing projects={projects} />
   </StyledListingSection>
)

export default ProjectListingSection
