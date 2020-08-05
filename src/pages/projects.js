import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import ProjectListingSection from "./../components/projectlistingsection"

const ProjectsPageInner = props => {
   try {
      const personalProjects = props.data.allStrapiProject.edges
      // console.log(props.data.allStrapiProject)
      return (
         <div>
            <h1>Projects</h1>
            {personalProjects.length > 0 && (
               <ProjectListingSection
                  projects={personalProjects}
                  sectionTitle="Personal"
               />
            )}
         </div>
      )
   } catch (e) {
      console.log(e)
      return <h2>Unable to find any projects.</h2>
   }
}

const ProjectsPage = props => {
   return (
      <Layout>
         <ProjectsPageInner {...props} />
      </Layout>
   )
}

export default ProjectsPage

export const query = graphql`
   query {
      allStrapiProject {
         edges {
            node {
               projectName
               strapiId
               description
               tags {
                  tags
               }
               githubLink
               link
               snapshot {
                  publicURL
               }
            }
         }
      }
   }
`
