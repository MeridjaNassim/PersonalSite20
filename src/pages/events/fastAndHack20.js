import React from "react"
import PageLoader from "../../components/common/loader"
import SEO from "../../components/layout/seo"
import PageTransition from 'gatsby-plugin-page-transitions'
/// remove the loader when you implement this page
export default function fastAndHack20() {
  return (
    <PageTransition>
      <SEO title="FAST&HACK20" />
      <PageLoader loadingText="We are planning the event , see you soon"></PageLoader>
    </PageTransition>
  )
}
