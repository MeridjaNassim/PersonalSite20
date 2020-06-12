import React from "react"
import CardedRow from "../../common/CardedRow"
import { LinkButton } from "../../common/button/CustomButton"
import styled from "styled-components"
import { Section } from "../../common/utils"
export default function clubs({ content }) {
  let items = content.items.map(item => {
    return {
      ...item,
      button: <LinkButton href={item.url}>Visit site <img style={{
        width : 20,
        height : 20,
        margin:"0px",
        marginLeft : "10px",
        padding : 0
      }}src={require('../../../images/icons/external-link-symbol.svg')}></img></LinkButton>,
    }
  })
  const id = "clubs"
  return (
    <Section id={id}>
      <Image
        src={require(`../../../images/illustrations/${content.image}`)}
        alt={content.alt}
      />
      <Title>{content.header}</Title>
      <Clubs>
        {items.map((item ,index )=> {
          return (
            <>
            <Club className={(index % 2 === 0) ? "left" : "right" }>
              <img
                src={require(`../../../images/icons/${item.image}`)}
                alt={item.alt}
              ></img>
              <div className="club-content">
                <h2 className="title"> {item.title}</h2>
                <p className="description"> {item.text}</p>

                {item.button}
              </div>
              
            </Club>
            {(index !== items.length-1) ? <Divider></Divider> : null}
            </>
          )
        })}
      </Clubs>
    </Section>
  )
}
const Title = styled.h1`
  text-align : center;
  
`
const Divider = styled.hr`
  background-color : var(--grey);
  height : 3px;
  opacity : 0.1;
  margin :10px 50px;
`
const Clubs = styled.div`
  margin : 10% 0px;
`
const Club = styled.div`
  display : flex;
  justify-content : flex-start;
  width : 90%;
  margin: 0 auto;
  margin-bottom : 10%;
  align-items : center;
  a {
    width : fit-content;
  }
  &.right {
    text-align : right;
    flex-direction : row-reverse;
    a {
    margin-left : auto;
  }
  }
  &.left {
    text-align : left;
    flex-direction : row;
  }
  
  img {
    padding : 50px;
    max-width : 200px;
    max-height : 200px;
  }
  .club-content {
      display :flex ;
      flex-direction : column;
      h2 {
        font-family : var(--font);
  font-weight : 500;
      }
      .description{
        font-size : 1rem;
        font-family : var(--font);
      }
  }
  @media screen and (max-width: 1000px) {
    justify-content : center;
   
  width : 100;
  align-items : center;
  text-align :center;
  &.right {
    flex-direction :column;
    text-align :center;
  }
  
  &.left {
    flex-direction :column;
    text-align :center;
  }
  a{
    margin : auto;
  }
}
  
`
const Image = styled.img`
  position: absolute;
  left: 62%;
  top: -20%;
  width: 400px;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 20px;
    left: 50%;
    width: 200px;
  }
`
