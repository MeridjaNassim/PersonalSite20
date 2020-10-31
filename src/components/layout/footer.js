///Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react"
import styled from "styled-components"
import {SocialMediaLinks } from './SocialMedia'
import { navigate } from "gatsby"
import Button from '../common/button/CustomButton'
import { emojis } from "../common/images"

const Footer = ({style}) => (
  <StyledFooter style={style}>
    <div className="row1">

      <div className="social-media">
        <p>Follow Me</p>
        <div className="sm">
         {SocialMediaLinks}
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
      <h2>Interested in hiring me ?</h2>
      <Button
        style={{
          color : "#fafafa"
        }}
        onClick={e => {
          e.preventDefault()
          navigate("/contact")
        }}
      >
        GET IN TOUCH
      </Button>
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
  -webkit-box-shadow: -1px -3px 23px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px -3px 23px 5px rgba(0, 0, 0, 0.1);
  box-shadow: -1px -3px 23px 5px rgba(0, 0, 0, 0.1);
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
    padding-top : 2vh;
    margin-bottom : 2vh;
    justify-content: center;
    .social-media {
      display: flex;
      justify-content :center;
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

export default Footer
