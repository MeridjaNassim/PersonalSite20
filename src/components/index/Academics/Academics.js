import React from "react"
import CardedRow from "../../common/CardedRow"
import styled from "styled-components"
import { Section } from "../../common/utils"
export default function Academics({ content }) {
  const id = "academics"
  return (
    <Section id={id}>
      <Image
        src={require(`../../../images/illustrations/${content.image}`)}
        alt={content.alt}
      />
      <Wrapper>
        <Title>{content.header}</Title>
        <Description>
          Iam currently a 3rd year student at{" "}
          <a
            href="https://www.esi.dz\"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole nationale supérieure d'informatique Algiers , ESI{" "}
          </a>{" "}
          , here are some of our curriculum subjects
        </Description>

        <CardedRow id={id} items={content.items} />
      </Wrapper>
    </Section>
  )
}

const Image = styled.img`
  position: relative;
  left: 50%;
  top: 70px;
  width: 200px;
  @media screen and (max-width: 768px) {
    top: 50px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 64px;
  @media screen and (max-width: 768px) {
    padding: 0;
    p {
      padding: 0 64px;
      text-align: center;
    }
  }
`
const Description = styled.p`
  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--green);
  }
  @media screen and (max-width: 768px) {
    padding: 0 64px;
    text-align: center;
  }
`
const Title = styled.h1``
