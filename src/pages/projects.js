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
               link
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
         <StaticQuery
            query={query}
            render={(data) => <ProjectListingSection projects={data} />}
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
