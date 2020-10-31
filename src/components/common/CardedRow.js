import React from "react"
import styled from "styled-components"
import ConsumerContext from "../../context/Context"
import Card from "./Card"
export default function CardedRow({ id,header, text, items }) {
  return (
    <div >
     
      <ConsumerContext>
        {({ data }) => (
          <Items>
            {items.map((item,index) => (
              <Card
                theme={data.theme}
                icon={require(`../../images/icons/${item.image}`)}
                alt={item.alt}
                title={item.title}
                key={`${id}-${index}`}
              >
                {item.children}
              </Card>
            ))}
          </Items>
        )}
      </ConsumerContext>
    </div>
  )
}
const Items = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 33%;
  @media screen and (max-width : 1200px) {
    flex-basis : 50%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  
`
