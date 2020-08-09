import React from "react"
import PageLoader from "../../components/common/loader"
import SEO from "../../components/layout/seo"
import styled from "styled-components"
import PageTransition from "gatsby-plugin-page-transitions"
/// remove the loader when you implement this page
export default function Projects() {
  return (
    <PageTransition>
      <SEO title="Projects" />
      <Wrapper>
        <StyledHeroTitle>
          I build well designed performant modern Apps...
        </StyledHeroTitle>
        <StyledImage
          src={require("../../images/illustrations/apps.svg")}
          alt="apps"
        />
      </Wrapper>
      <center>
        <p>Currently building this page</p>
      </center>
    </PageTransition>
  )
}

const Wrapper = styled.section`
  width: 70%;
  min-height: 90vh;
  padding-top: 10vh;
  margin: auto;
  display: flex;
  background-color: inherit;
  @media screen and (max-width: 960px) {
    padding-top: 20px;
    flex-direction: column;
  }
`

const StyledHeroTitle = styled.h1`
  font-size: 4rem;
  flex: 2;
  color: var(--green);
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
`

const StyledImage = styled.img`
  flex: 1;
  max-width: 600px;
  max-height: 400px;
`
