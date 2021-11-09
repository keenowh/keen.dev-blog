import React from "react"
import styled from "styled-components"
import ProjectListing from "./projectlisting"

const StyledListingSection = styled.section`
   width: 90%;
   margin: 0 auto;
   @media (min-width: 768px) {
      width: 80%;
   }
`
const StyledSectionHeading = styled.h2`
   margin-bottom: 0;
`

const ProjectListingSection = ({ projects, sectionTitle }) => (
   <StyledListingSection>
      <StyledSectionHeading>{sectionTitle}</StyledSectionHeading>
      <ProjectListing projects={projects} />
   </StyledListingSection>
)

export default ProjectListingSection
