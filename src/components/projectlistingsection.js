import React from "react"
import styled from "styled-components"
import ProjectListing from "./projectlisting"

const StyledListingSection = styled.section`
   margin-bottom: 2rem;
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
