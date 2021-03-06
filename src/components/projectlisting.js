import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import styled from "@emotion/styled/macro";
// const DateSpan = styled.span`
//   color: #999;
//   margin-left: 0.5em;
// `;

const StyledProjectListing = styled.ul`
   list-style: none;
   margin-top: 0.5em;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
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
   border: 2px solid white;
   margin-top: 1em;
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

const imageStyle = {
   display: "flex",
   justifycontent: "center",
   alignitems: "center",
   overflow: "hidden",
   borderTopLeftRadius: "7px",
   borderTopRightRadius: "7px",
}

const ProjectListing = ({ projects }) => {
   const projectLinks = projects.map(project => {
      // const tags = project.tags.tags.map((tag, index) => {
      //   <StyledTags key={index}>#{tag}</StyledTags>
      // })
      const tagss = project.tags.tags.map((tag, index) => {
         return <StyledTags key={index}>#{tag}</StyledTags>
      })

      const divStyle = {
         padding: "1rem",
      }

      return (
         <StyledProjectItem key={project.id}>
            <div style={imageStyle}>
               <img src={project.snapshot.url}></img>
            </div>
            <StyledLinkWrap>
               <StyledProjectLink to={project.link}>
                  {project.projectName}
               </StyledProjectLink>
            </StyledLinkWrap>
            <StyledLinkWrapGit>
               <StyledProjectLink to={project.githubLink}>
                  Github
               </StyledProjectLink>
            </StyledLinkWrapGit>
            <StyledContent>
               <StyledDesc>{project.description}</StyledDesc>
            </StyledContent>
            <div style={divStyle}>{tagss}</div>
         </StyledProjectItem>
      )
   })
   console.log(projectLinks)
   return <StyledProjectListing>{projectLinks}</StyledProjectListing>
}

export default ProjectListing
