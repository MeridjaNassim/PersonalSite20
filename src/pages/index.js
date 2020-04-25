import React from "react"
import SEO from "../components/layout/seo"
import Landing from "../components/index/landing/landing"
import PageTransition from 'gatsby-plugin-page-transitions'
import PageLoader from "../components/common/loader"
// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
    <PageTransition>
    <SEO title="Home" />
    <Landing></Landing>
    <PageLoader loading={true} relative={true}></PageLoader>
 </PageTransition>
)

export default IndexPage
