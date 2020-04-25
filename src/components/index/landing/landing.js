import React from "react"
import styled from "styled-components"
import Button from "../../common/button/GDGButton"
import { navigate } from "gatsby"
const Wrapper = styled.section`
  width: 70%;
  height: 90vh;
  padding-top : 10vh;
  margin : auto;
  display: flex;
  background-color: inherit;
  .landing-title {
    font-size: 5rem;
    .matter {
      
      opacity :0;
      animation : fadeIn 1s 2.5s ease forwards;
    @keyframes fadeIn {
      from {
        
        opacity : 0;
      }
      to{
        
        opacity : 1;
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
    align-items : center;
    .landing-title {
      width: 90%;
      margin: 20px auto;
      text-align: center;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 370px) {
    padding-left: 0;
    padding-top: 4vh;
    justify-content: flex-end;
    flex-direction: column-reverse;

    .landing-title {
      width: 90%;
      margin: 20px auto;
      text-align: center;
      font-size: 2rem;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  position : relative;
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
  animation : enter 0.5s ease forwards;
    opacity : 0;
    @keyframes enter {
      from {
        opacity : 0;
       
      }
      to{
        opacity : 1;
        
      }
    }
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`
const Canvas = styled.div`
 width : 30%;
  background: transparent;
  opacity: 1;
  @media screen and (max-width: 1024px) {
    display : flex ;
    justify-content : center; 
    align-items : center;
    padding-top: 0;
    width: 60%;
    min-height: 60%;
  }
  opacity :1;
 
`
const Hello = styled.div`
display : inline-block ; 
justify-content : center;
align-items : center;
h3 {
  margin : 0;
  color : #fafafa;
  font-family : var(--font-header);
  font-weight : 300
}
padding : 10px ;
border-radius : 10px;
border-top-left-radius : 0px;
background : var(--green);
@media screen and (max-width: 1024px) {
    margin : auto;
  }
`
export default function Landing({ id }) {
  return (
    <Wrapper id="ME">
      <Content>
        <Hello>
        <h3>Hello am</h3>
        </Hello>
        
        <h1 className="landing-title">
          Meridja Nassim <br></br> <span className="fade">FullStack developer</span>
        </h1>
        <Buttons>
          <Button
            title="ABOUT ME"
            outlined={true}
            onClick={e => {
              e.preventDefault();
              navigate("#about")}}
          ></Button>
          <div className="gap"></div>
          <Button
            title="SEE PROJECTS"
            outlined={false}
            onClick={e =>{ 
              e.preventDefault();
              navigate("/projects")
            }}
          ></Button>
        </Buttons>
      </Content>
      <Canvas>
        <Border>
        <Avatar src={require('../../../images/nassim_square.jpg')}></Avatar>
        </Border>
        
      </Canvas>
    </Wrapper>
  )
}

const Avatar = styled.img`
margin : 0;
border-radius : 50%;
border : 20px solid rgba(0,0,0,0.2);

`
const Border = styled.div`
display : flex; 
justify-content : center;
align-items :center;
opacity : 0;
border-radius : 50%;
  border : 15px solid rgba(0,0,0,0.1);
  animation :fadeIn 0.5s 1.5s ease-out forwards,  bordercolor 1s 2s ease-in-out alternate infinite; 
  @keyframes bordercolor {
    from {
      border-color : rgba(0,0,0,0.1);
    }
    to {
      border-color : rgba(0,0,0,0);
    }
  }
  @keyframes fadeIn {
    from {
      opacity :0 ;
    }
    to {
      opacity : 1;
    }
  }
`