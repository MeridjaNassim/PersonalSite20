import React from "react"
import CardedRow from "../../common/CardedRow"
import { LinkButton } from "../../common/button/CustomButton"
import styled from "styled-components"
import {Section} from '../../common/utils'
export default function clubs({ content }) {
  let items = content.items.map(item => {
    return {
      ...item,
      children: <LinkButton href={item.url}>Visit site</LinkButton>,
    }
  })
  const id = "clubs";
  return (
    <Section id={id}>
         <Image src={require(`../../../images/illustrations/${content.image}`)} alt={content.alt} />
      <CardedRow id={id} header={content.header} text={content.text} items={items} />
    </Section>
  )
}

const Image = styled.img`
position: absolute;
    left: 62%;
    top: -30%;
    width: 400px;
@media screen and (max-width: 768px) {
    position : relative;
  top : 20px;
  left: 50%;
  width : 200px
}
`