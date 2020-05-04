import React from "react"
import styled from "styled-components"
import Button from '../../common/button/CustomButton';
import ConsumerContext from "../../../context/Context"
import {neumorphism} from '../../common/effects';
import {navigate} from 'gatsby'
export default function service({ content }) {
  return (
    <ConsumerContext>
      {({ data }) => {
        return <Card theme={data.theme}>
            <img src={require(`../../../images/icons/${content.image}`)} alt={content.alt}/>
            <h2>{content.serviceTitle}</h2>
            <p>{content.serviceContent}</p>
            <Button onClick={e=> {
                e.preventDefault();
                navigate(content.route)
            }} >See more</Button>
        </Card>
      }}
    </ConsumerContext>
  )
}
const Card = styled.div`
    flex : 1;
  margin: 2%;
  padding : 64px;
  min-width :25%;
  max-width : 33%;
  transition : 0.5s ease;
  border-radius: 20px;
  position :relative;
  text-align : center;
  img {
    position : absolute ; 
    margin : 0;
    width:10%;
    top : 13%;
    left : 5%;
  }
  p{
      min-height : 50%;
  }
  ${neumorphism}
    h2 {
        font-weight : 400;
        color : var(--grey)
    }
    button {
        color : var(--grey) !important;
    }
  @media screen and (max-width: 768px) {
    width : 90vw;
    margin :2% auto;
    max-width : 90%;
  }
`
