import React from "react"
import PageLoader from "../../../components/common/loader"
import SEO from "../../../components/layout/seo"
import PageTransition from 'gatsby-plugin-page-transitions'
/// remove the loader when you implement this page
export default function Projects() {
  return (
    <PageTransition>
      <SEO title="Datascience" />
      <PageLoader loading={false}></PageLoader>
    </PageTransition>
  )
}
