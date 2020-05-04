import React from "react"
import styled from "styled-components"
import Card from "../../common/Card"
import ConsumerContext from "../../../context/Context"
export default function Academics({content}) {
  return (
    <Wrapper>
      <h1>{content.header}</h1>
        <p dangerouslySetInnerHTML={{__html : content.description}}></p>
      <ConsumerContext>
        {({ data }) => (
          <Items>
              {content.items.map(item => <Card
              theme={data.theme}
              icon={require(`../../../images/icons/${item.image}`)}
              alt={item.alt}
              title={item.title}
              text={item.text}
            ></Card> )}
           
          </Items>
        )}
      </ConsumerContext>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top : 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    a{
      font-weight :bold;
      text-decoration : none;
      color : var(--green);
  }
  }
  
  padding: 32px 64px;
  @media screen and (max-width: 768px) {
        padding: 0;
        p {
            padding : 0 64px;
            text-align : center;
        }
    }
`
const Items = styled.div`
width : 100%;
position : relative;
display :flex ;
        justify-content :center;
        flex-wrap : wrap;
        @media screen and (max-width: 768px) {
          flex-direction : column
        }
`
