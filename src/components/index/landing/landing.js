import React from "react"
import styled from "styled-components"
import { navigate , useStaticQuery,graphql } from "gatsby"
import Button from "../../common/button/CustomButton"
import PropTypes from "prop-types"
import {FluidImage, FixedImage} from "../../common/image"

export default function Landing({ content }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sq_me2.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper id="ME">
      <Content>
        <Hello>
          <h3>{content.header}</h3>
        </Hello>

        <h1 className="landing-title">
          {content.landingText} <br></br>{" "}
          <span className="fade">{content.profession}</span>
        </h1>
        <Buttons>
          <Button
            onClick={e => {
              e.preventDefault()
              navigate(content.buttonLeft.link)
            }}
          >
            {content.buttonLeft.text}
          </Button>
          <div className="gap"></div>
          <Button
            onClick={e => {
              e.preventDefault()
              navigate(content.buttonRight.link)
            }}
          >
            {content.buttonRight.text}
          </Button>
        </Buttons>
      </Content>
      <Canvas>
        <Border>
        <FixedImage data={data} style={{
        minWidth : 250,
        minHeight : 250,
        width : "28vw",
        height :"28vw",
        maxWidth : 300,
        maxHeight : 300,
        borderRadius : "50%",
        border: "20px solid rgba(0, 0, 0, 0.2)",
        margin :0
      }}></FixedImage>
        </Border>
      
      </Canvas>
    </Wrapper>
  )
}

Landing.propTypes = {
  content: PropTypes.object.isRequired,
}
const Wrapper = styled.section`
  width: 70%;
  height: 90vh;
  padding-top: 10vh;
  margin: auto;
  display: flex;
  background-color: inherit;
  .landing-title {
    font-size: 4rem;
    .matter {
      opacity: 0;
      animation: fadeIn 1s 2.5s ease forwards;
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    padding-top: 0%;
    width: 100%;
    justify-content: flex-end;
    flex-direction: column-reverse;
    align-items: center;
    .landing-title {
      width: 100%;
      margin: 20px auto;
      text-align: center;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 370px) {
    padding-left: 0;
    padding-top: 4vh;
  }
`
const Buttons = styled.div`
  display: flex;
  position: relative;
  .gap {
    width: 40px;
    visibility: hidden;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: auto;
    justify-content: center;
    .gap {
      width: 5%;
    }
  }
`

const Content = styled.div`
  position: relative;
  width: 80%;
  animation: enter 0.5s ease forwards;
  opacity: 0;
  @keyframes enter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`
const Canvas = styled.div`
  width: 30%;
  background: transparent;
  opacity: 1;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    width: 60%;
    min-height: 60%;
  }
  opacity: 1;
`
const Hello = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    color: var(--grey-dark);
    font-family: var(--font-header);
    font-weight: 300;
  }
  padding: 10px;
  border-radius: 10px;
  border-top-left-radius: 0px;

  background: var(--green-light);
  @media screen and (max-width: 1024px) {
    margin: auto;
  }
`
const Avatar = styled.picture`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  border: 20px solid rgba(0, 0, 0, 0.2);
  source,
  img {
    border-radius: 50%;
    margin: 0;
  }
`
const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  width:fit-content;
  height:fit-content;
  border-radius: 50%;
  border: 15px solid rgba(0, 0, 0, 0.1);
  animation: bordercolor 1s 1.5s ease-in-out alternate infinite;
  @keyframes bordercolor {
    from {
      border-color: rgba(0, 0, 0, 0.1);
    }
    to {
      border-color: rgba(0, 0, 0, 0);
    }
  }
`
