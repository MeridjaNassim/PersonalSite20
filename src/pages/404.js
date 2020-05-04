import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components";
import Button from '../components/common/button/CustomButton'
import {navigate} from 'gatsby'
import {emojis}from '../components/common/images'
const NotFoundPage = () => (
  <>
    <SEO title="Not found" />
    <NotFoundWrapper>
    <img src={require('../images/illustrations/404.svg')} alt="Not found" ></img>
<h2>We could'nt find the page you are looking for </h2>
      <Button onClick={()=> navigate("/")}>TAKE ME BACK</Button>
    </NotFoundWrapper>
  </>
)

const NotFoundWrapper = styled.div`
display : flex;
position : relative;
top : -10vh;
flex-direction : column;
justify-content : center ;
align-items : center;
height : 100vh;
img {
  max-height : 600px;
  max-width : 90%;
}
animation : enterandbounce 1s  ease forwards;
    @keyframes enterandbounce {
      0% {
        transform : translateY(-100vh)
      }
      40%{
        transform : translateY(0%)
      }
      80%{
        transform : translateY(-3vh)
      }
      100%{
        transform : translateY(0%)
      }
    }
 h1 {
  font-size :  6rem
 }   
h2 {
  font-size : 2rem;
  font-family: var(--font-header);
  color : var(--green)
}
@media screen and (max-width: 768px) {
  width : 100%;
  top : 0;
  h2 {
    font-size : 1rem;
  }
}
`
export default NotFoundPage
