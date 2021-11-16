import React from "react"
import styled from "styled-components"
import ProjectListing from "./projectlisting"

const StyledListingSection = styled.section`
   width: 90%;
   margin: 0 auto;
   @media (min-width: 768px) {
      width: 100%;
   }
`

const ProjectListingSection = ({ projects }) => (
   <StyledListingSection>
      <ProjectListing projects={projects} />
   </StyledListingSection>
)

export default ProjectListingSection
