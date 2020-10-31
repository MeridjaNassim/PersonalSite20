import React from "react"
import styled from "styled-components"
import Button from '../../common/button/CustomButton';
const About = ({content}) => {
  return (
    <Wrapper id="about">
      <img
        src={require(`../../../images/${content.illustration.path}`)}
        alt={content.illustration.alt}
      ></img>
      <Content>
        <Title>About Nassim</Title>
        <p dangerouslySetInnerHTML={{__html: content.text}}>

        </p>
        <Button >
        <DownloadCV href={content.downloadCVpath} download>{content.downloadText}</DownloadCV>
        </Button>
        
      </Content>
    </Wrapper>
  )
}
const Title = styled.h1`
  font-size: 4rem;

`
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 64px;
  img {
      max-width : 40%;
    max-height: 50vh;
  }
  @media screen and (max-width: 1024px) {
    flex-direction : column-reverse;
    justify-content :center;
    align-items : center;
    padding: 32px;
    img {
        margin-top : 5vw;
        margin-bottom : 0;
        max-width : 90%;
    }
  }
`
const Content = styled.div`
  width: 50%;
  p {
    .field{
        color : var(--green);
    }
      
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding : 0 1rem;
  }
`
const DownloadCV = styled.a`
  text-decoration: none;
  color: inherit;
  padding : 20px;
  font-family : inherit;
`
export default About
