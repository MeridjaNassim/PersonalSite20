///Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react"
import styled from "styled-components"
import { ExternalLink } from "../common/utils"
import { navigate } from "gatsby"
import { emojis } from "../common/images"
const Footer = ({style}) => (
  <StyledFooter style={style}>
    <div className="row1">
      <div className="content">
        <p>About</p>
        <div>
          <ExternalLink
            url="https://www.wtm-algiers.tech/"
            text="WTM Algiers"
          ></ExternalLink>
          <ExternalLink
            url="https://distracted-davinci-c6a17d.netlify.app/"
            text="GDG Algiers"
          ></ExternalLink >
          <ExternalLink url='https://cse.club/' text="Club Scientifique de L'ESI">

          </ExternalLink>
        </div>
      </div>
      <div className="content">
        <p>Information</p>
        <div>
          <p className="contact">ha_meridja@esi.dz</p>
          <p className="contact">+213 672 439 370</p>
          <p className="contact"> Algiers, Algeria</p>
          <ExternalLink url="https://esi.dz" text="Ecole Nationale Supérieure d'informatique"></ExternalLink>
          
        </div>
      </div>
      <div className="social-media">
        <p>Follow Me</p>
        <div className="sm">
          <ExternalLink
            url="https://www.instagram.com/shia_lab/"
            icon={require("../../images/icons/instagram.svg")}
            text="instagram"
          ></ExternalLink>
          <ExternalLink
            url="https://twitter.com/AbdMeri"
            icon={require("../../images/icons/twitter.svg")}
            text="twitter"
          ></ExternalLink>
          <ExternalLink
            url="https://www.facebook.com/nassim.top2"
            icon={require("../../images/icons/facebook.svg")}
            text="facebook"
          ></ExternalLink>
            <ExternalLink
            url="https://github.com/MeridjaNassim"
            icon={require("../../images/icons/github.svg")}
            text="github"
          ></ExternalLink>
        </div>
      </div>
    </div>
    <div className="row2">
      <h2>
        Made with {emojis.BrainEmoji} and {emojis.CoffeeEmoji}
      </h2>
      <p>
        <span role="img" aria-label="copyright">
          ©️
        </span>{" "}
        MERIDJA ABDELLAH NASSIM 2020
      </p>
    </div>
    <div className="row3">
      <h2>Intrested in hiring me ?</h2>
      <StyledButton
        onClick={e => {
          e.preventDefault()
          navigate("/contact")
        }}
      >
        GET IN TOUCH
      </StyledButton>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 10vh;
  padding-top: 24px;
  position: relative;
  z-index: 9;
  background: inherit;
  font-family: var(--font), sans-serif;
  border-top: 10px solid inherit ;
  justify-content: start;
  display: flex;
  flex-direction: column;

  align-items: center;

  .row3 {
    overflow-x: hidden;
    padding: 50px;
    justify-content: space-evenly;
    display: flex;
    width: 100%;
    background-color: var(--grey-dark);
    h2 {
      margin: 0;
      color: white;
      font-family: inherit;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      h2 {
        text-align: center;
        margin-bottom: 20px;
      }
      align-items: center;
      button {
        margin-top: 20px;
      }
    }
  }
  .row2 {
    margin-top: 20px;
    text-align: center;
    font-family: inherit;
    font-size: 100%;
    font-weight: 550;
  }
  .row1 {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-evenly;
    .content {
      align-items: flex-start;
      width: 33%;
      display: flex;
      justify-content: space-evenly;
      p.contact {
        margin-bottom : 10px;
        color : inherit;
      }
      p {
        margin: 0;
        font-size: 100%;
        color: var(--green);
        font-family: inherit;
        font-size: 100%;
        font-weight: 550;
      }
      div {
        a {
          display: block;
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 10px;
          color: inherit;
          font-family: inherit;
          font-size: 100%;
          font-weight: 550;
       
        }
      }
    }
    .social-media {
      display: flex;
      width: 33%;
      p {
        margin: 0;
        font-size: 100%;
        color: var(--green);
        font-family: inherit;
        font-size: 100%;
        font-weight: 550;
      }
      .sm {
        margin-left: 10%;
        a {
          opacity: 0.6;
          margin-right: 20px;
          cursor: pointer;
          width: 20%;
          transition: 1s ease;
          &:hover {
            opacity: 1;
          }
          img {
            margin: 0;
            width: 20px;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 1024px) {
    .row1 {
      width: 100%;
      .content {
        margin-bottom: 10%;
        align-items: center;
        justify-content: start;
        width: 50%;
        flex-direction: column;
        p {
          text-align: left;
          margin-bottom: 5%;
          font-size: 100%;
        }
        div {
          a ,p{
            text-align: center;
          }
        }
      }
      .social-media {
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        .sm {
          margin: 0;
          margin-left: 20px;
        }
      }
    }
  }
`
const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 50px;
  font-family: inherit;
  font-weight: bold;

  background: #0d9d58;
 
  border-radius: 50px;
  border-radius: 50px;
background: #212121;
box-shadow:  20px 20px 60px #111111, 
             -20px -20px 60px #313131;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    animation: scaler 1s ease alternate 2;
    @keyframes scaler {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.2);
      }
    }
  }
`

export default Footer
