import React from "react"
import SEO from "../components/layout/seo"
import Landing from "../components/index/landing/landing"
import PageTransition from 'gatsby-plugin-page-transitions'
import About from "../components/index/about/About"
import index from '../content/index.json'
// example of using styled components ( writing CSS-in-JS )

const IndexPage = () => (
    <PageTransition>
    <SEO title="Home" />
    <Landing content={index.landing}></Landing>
    <About content={index.about}></About>
    <p style={{textAlign : 'center'}}>site building progress : <span style={{color :'var(--red)'}}>22%</span> </p>
    
 </PageTransition>
)

export default IndexPage
