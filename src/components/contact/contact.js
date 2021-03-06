import React from "react"
import styled from "styled-components"

const Contact = ({content}) => (
  <StyledDiv>
    <div className="row">
      <div className="img-container">
        <img
          className="img2 animated-wigle"
          src={require("../../images/icons/email.svg")}
          alt="email"
        ></img>
      </div>
      <div className="info-container">
<p className="title">{content.email.text}</p>
        <p className="info">{content.email.adress}</p>
      </div>
    </div>
    <div className="row2">
      <div className="img-container">
        <img alt="location" className="img2 animated-wigle" src={require("../../images/icons/pin.svg")}></img>
      </div>
      <div className="info-container">
        <p className="title">{content.adress.text}</p>
        <p className="info" dangerouslySetInnerHTML={{__html : content.adress.adr}}>
         
        </p>
      </div>
    </div>
    <div className="row">
      <div className="img-container-cl">
        <img
          alt="phone"
          className="img1 animated-wigle"
          src={require("../../images/icons/call.svg")}
        ></img>
      </div>
      <div className="info-container">
<p className="title">{content.phone.text}</p>
<p className="info">{content.phone.number}</p>
      </div>
    </div>
  </StyledDiv>
)
const StyledDiv = styled.div`
  font-family: var(--font);
  max-width: 90vw;
  height: auto;

  background-color: inherit;
  border-radius: 0.5vw;
  margin-bottom: 14vw;
  padding-top: 2.2vw;

  color: inherit;

  .row {
    height: 6vw;
  }
  .row,
  .row2 {
    margin-left: 4vw;
  }
  .row2 {
    height: 8vw;
  }
  .row,
  .row2:after {
    content: "";
    display: table;
    clear: both;
  }
  .title {
    font-size: 1.6rem;
    margin-bottom: 0.6vw;
  }
  .info {
    font-size: 0.8rem;
    margin-bottom: 0.2vw;
  }
  .br {
    display: block;
    margin-bottom: -0.4em;
  }
  .img-container {
    float: left;
  }
  .info-container {
    padding-top: 0.5vw;
    margin-left: 1vw;
    float: left;
  }

  .animated-wigle {
    &:hover {
      animation : wigle 1s alternate infinite linear ; 
    @keyframes wigle {
      0%{
        transform : rotateZ(0deg);
      }
      25%{
        transform : rotateZ(-10deg);
      }
      75%{
        transform : rotateZ(10deg);
      }
      100% {
        transform : rotateZ(0deg);
      }
    }
    }
    
  }
  .img-container-cl {
    margin-left: 1vw;
    float: left;
  }
  .img1 {
    width: 2vw;
  }
  .img2 {
    width: 3vw;
   
  }
  @media (max-width: 768px) {
    max-width: 90vw;
    height: auto;
    background-color: inherit;
    margin-bottom: 14vw;
    padding-top: 7vw;
    padding-left: 4vw;
    margin-left: 20vw;
    font-family: var(--font);
    .row {
      height: 10vw;
    }
    .row,
    .row2 {
      margin-left: 4vw;
    }
    .row2 {
      height: 22vw;
    }
    .title {
      font-size: 1.6rem;
      margin-bottom: 2vw;
    }
    .info {
      font-size: 0.8rem;
    }
    .br {
      display: block;
      margin-bottom: -0.3em;
    }
    .img-container {
      float: left;
    }
    .info-container {
      padding-top: 1vw;
      margin-left: 4vw;
      margin-bottom : 20px;
      float: left;
    }

    .img-container-cl {
      margin-left: 1vw;
      float: left;
    }
    .img1 {
      width: 7vw;
    }
    .img2 {
      width: 9vw;
    }
  }
`
export default Contact
