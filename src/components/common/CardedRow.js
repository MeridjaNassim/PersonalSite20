import React from "react"
import styled from "styled-components"
import ConsumerContext from "../../context/Context"
import Card from "./Card"
export default function CardedRow({ id,header, text, items }) {
  return (
    <Wrapper >
      <h1>{header}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <ConsumerContext>
        {({ data }) => (
          <Items>
            {items.map((item,index) => (
              <Card
                theme={data.theme}
                icon={require(`../../images/icons/${item.image}`)}
                alt={item.alt}
                title={item.title}
                text={item.text}
                key={`${id}-${index}`}
              >
                {item.children}
              </Card>
            ))}
          </Items>
        )}
      </ConsumerContext>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--green);
    }
  }

  padding: 32px 64px;
  @media screen and (max-width: 768px) {
    padding: 0;
    p {
      padding: 0 64px;
      text-align: center;
    }
  }
`
const Items = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
