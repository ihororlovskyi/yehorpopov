import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Projects = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts />
    </Page>
  )
}

export default Projects
