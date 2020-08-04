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
  // border: solid 2px white;
  max-width: 300px;
  min-width: 300px;
  border-radius: 10px;
  background-color: white;
`

const StyledLinkWrap = styled.span`
  display: inline-block;
  background-color: black;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  @media (min-width: 550px) {
    display: inline-block;
  }
`

const StyledProjectLink = styled(Link)`
  // display: inline-block;
  // flex-grow: 0;

  color: white;
`

const StyledDesc = styled.p`
  // display: inline-block;
  // flex-grow: 1;
  // display: block;
  padding: 10px;
`

const StyledContent = styled.div`
  padding: 10px;
  word-wrap: break-word;
`

const StyledTags = styled.span`
  background-color: blue;
  color: white;
  margin-right: 1rem;
  padding: 4px;
  font-size: 1.5rem;
`

const ProjectListing = ({ projects }) => {
  const projectLinks = projects.map(project => {
    // const tags = project.tags.tags.map((tag, index) => {
    //   <StyledTags key={index}>#{tag}</StyledTags>
    // })
    const tagss = project.node.tags.tags.map((tag, index) => {
      return <StyledTags key={index}>#{tag}</StyledTags>
    })

    const divStyle = {
      padding: "1rem",
    }

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
        <StyledContent>
          <StyledDesc>{project.node.description}</StyledDesc>
        </StyledContent>
        <div style={divStyle}>{tagss}</div>
      </StyledProjectItem>
    )
  })
  console.log(projectLinks)
  return <StyledProjectListing>{projectLinks}</StyledProjectListing>
}

export default ProjectListing
