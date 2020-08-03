import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// const DateSpan = styled.span`
//   color: #999;
//   margin-left: 0.5em;
// `;

const StyledProjectListing = styled.ul`
  list-style: none;
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
`

const StyledProjectItem = styled.li`
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 0.5em;
  line-height: 1.5em;
  // display: inline-block;
  // width: 33.3%;
  // padding-right: 1em;
  // display: flex;
  // flex-wrap: nowrap;
  // justify-content: space-between;
  padding: 1em;
  border: solid 2px white;
  max-width: 25em;
`

const StyledLinkWrap = styled.span`
  display: block;

  @media (min-width: 550px) {
    display: inline;
  }
`

const StyledProjectLink = styled(Link)`
  // display: inline-block;
  // flex-grow: 0;
`

const StyledDesc = styled.p`
  // display: inline-block;
  // flex-grow: 1;
  // display: block;
`

const StyledTags = styled.span`
  background-color: blue;
  color: white;
  margin-right: 3px;
`

const ProjectListing = ({ projects }) => {
  const projectLinks = projects.map(project => {
    // const tags = project.tags.tags.map((tag, index) => {
    //   <StyledTags key={index}>#{tag}</StyledTags>
    // })
    const tagss = project.node.tags.tags.map(tag => {
      return <StyledTags>#{tag}</StyledTags>
    })

    return (
      <StyledProjectItem key={project.node.strapiId}>
        <StyledLinkWrap>
          <StyledProjectLink to={project.node.link}>
            {project.node.projectName}
          </StyledProjectLink>
          <StyledProjectLink to={project.node.githubLink}>
            Github
          </StyledProjectLink>
        </StyledLinkWrap>
        <div>{tagss}</div>
        <StyledDesc>{project.node.description}</StyledDesc>
      </StyledProjectItem>
    )
  })
  console.log(projectLinks)
  return <StyledProjectListing>{projectLinks}</StyledProjectListing>
}

export default ProjectListing
