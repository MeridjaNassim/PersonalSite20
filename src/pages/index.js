import React from "react"
import SEO from "../components/layout/seo"
import Landing from "../components/index/landing/landing"
import PageTransition from "gatsby-plugin-page-transitions"
import About from "../components/index/about/About"
import Services from "../components/index/services/services"
import Academics from "../components/index/Academics/Academics"
import Clubs from "../components/index/Affliations/clubs"
import index from "../content/index.json"

// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
  <PageTransition>
    <SEO title="Home" />
    <Landing content={index.landing}></Landing>
    <About content={index.about}></About>
    <Services content={index.services}></Services>
    <Academics content={index.academics}></Academics>
    <Clubs content={index.clubs}></Clubs>
  </PageTransition>
)

export default IndexPage
