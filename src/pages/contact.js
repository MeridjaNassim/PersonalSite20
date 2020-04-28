import React from "react"
import SEO from "../components/layout/seo"
import PageTransition from 'gatsby-plugin-page-transitions'
import ContactUs from '../components/index/contact/ContactUs'
import content from '../content/contact.json'
/// remove the loader when you implement this page
export default function fastAndHack20() {
  return (
    <PageTransition>
      <SEO title="Contact" />
      <ContactUs content={content}></ContactUs>
    </PageTransition>
  )
}
