import React from "react"
import styled from "styled-components"
import Service from "./service"
import { Section } from "../../common/utils"
export default function services({ content }) {
  return (
    <Wrapper id="services">
      <Title>Experienced in </Title>
      <div className="services">
        {content.items.map((item ,index)=> {
          return <Service content={item} direction={["left","right"][index % 2]}></Service>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Section)`
  margin-top: 10%;
  width: 100%;
  padding: 0 2rem;

  .services {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    .services {
      flex-direction: column;
    }
  }
`
const Title = styled.h1`
  font-size: 4rem;
`

