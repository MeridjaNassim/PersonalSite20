import React from "react"
import CardedRow from "../../common/CardedRow"
import styled from 'styled-components';
import {Section} from '../../common/utils'
export default function Academics({ content }) {
  const id = "academics";
  return (
    <Section id={id}>
      <Image src={require(`../../../images/illustrations/${content.image}`)} alt={content.alt} />
      <CardedRow
        id={id}
        header={content.header}
        text={content.description}
        items={content.items}
      />
    </Section>
  )
}

const Image = styled.img`
position :relative;
left: 50%;
top : 70px;
width : 200px;
@media screen and (max-width: 768px) {
  top : 50px;
}
`