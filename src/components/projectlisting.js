import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import styled from "@emotion/styled/macro";
// const DateSpan = styled.span`
//   color: #999;
//   margin-left: 0.5em;
// `;

const StyledProjectListing = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-auto-rows: minmax(min-content, max-content);

   @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
   }
   grid-gap: 15px;
`

const StyledProjectItem = styled.div`
   font-size: 1.8rem;
   // text-decoration: none;
   margin-bottom: 0.5em;
   line-height: 1.5em;
   max-width: 350px;
   border-radius: 10px;
   background-color: white;
   border: 2px solid white;
   margin-top: 1em;
   align-self: start;
`

const StyledLinkWrap = styled.span`
   display: inline-block;
   background-color: black;
   width: 100%;
   text-align: center;
   @media (min-width: 550px) {
      display: inline-block;
   }
`

const StyledLinkWrapGit = styled.span`
   display: inline-block;
   background-color: black;
   width: 100%;
   text-align: center;
   @media (min-width: 550px) {
      display: inline-block;
   }
`

const StyledProjectLink = styled.a`
   // display: inline-block;
   // flex-grow: 0;

   color: white;
`

const StyledDesc = styled.p`
   font-size: 1.2rem;
   margin: 0;
`

const StyledContent = styled.div`
   padding: 0 10px;
   word-wrap: break-word;
   margin-bottom: 10px;
`

const StyledTags = styled.span`
   background-color: blue;
   color: white;
   margin-right: 1rem;
   padding: 4px;
   font-size: 1.2rem;
   white-space: nowrap;
`

const imageStyle = {
   display: "flex",
   maxHeight: "100px",
   justifycontent: "center",
   alignitems: "center",
   overflow: "hidden",
   borderTopLeftRadius: "7px",
   borderTopRightRadius: "7px",
}

const TagsContainer = styled.div`
   padding: 5px 15px;
   text-align: center;
`

const ProjectListing = ({ projects }) => {
   // console.log()
   const projectLinks = projects.allStrapiProjects.edges.map((project) => {
      console.log(project.node)

      const tags = project.node.tags.tags.map((tag) => (
         <StyledTags>{tag}</StyledTags>
      ))

      return (
         <StyledProjectItem key={project.node.id}>
            <div style={imageStyle}>
               <img src={project.node.snapshot.publicURL}></img>
            </div>

            <StyledLinkWrap>
               <StyledProjectLink target="_blank" href={project.node.link}>
                  {project.node.projectName}
               </StyledProjectLink>
            </StyledLinkWrap>
            <StyledLinkWrapGit>
               <StyledProjectLink
                  target="_blank"
                  href={project.node.githubLink}
               >
                  Github
               </StyledProjectLink>
            </StyledLinkWrapGit>
            <TagsContainer>{tags}</TagsContainer>
            <StyledContent>
               <StyledDesc>{project.node.description}</StyledDesc>
            </StyledContent>
         </StyledProjectItem>
      )
   })
   return <StyledProjectListing>{projectLinks}</StyledProjectListing>
}

export default ProjectListing
