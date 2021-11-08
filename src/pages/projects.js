import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "./../components/layout"
import ProjectListingSection from "./../components/projectlistingsection"

const query = graphql`
   query {
      allStrapiProjects {
         edges {
            node {
               snapshot {
                  publicURL
               }
               githubLink
               description
               projectName
               id
               tags {
                  tags
               }
            }
         }
      }
   }
`

const ProjectsPageInner = () => {
   return (
      <div>
         <h1>Projects</h1>
         <StaticQuery
            query={query}
            render={(data) => (
               <ProjectListingSection projects={data} sectionTitle="Personal" />
            )}
         />
      </div>
   )
}

const ProjectsPage = (props) => {
   return (
      <Layout>
         <ProjectsPageInner {...props} />
      </Layout>
   )
}

export default ProjectsPage
