import styled from "styled-components"
import ConsumerContext from "../../../context/Context"
import React from "react"
import {neumorphism,neumorphismPressed } from '../effects'
// button
export default ({ children, onClick }) => {
  return (
    <ConsumerContext>
      {({ data }) => {
        return (
          <CustomButton theme={data.theme} onClick={onClick}>
            {children}
          </CustomButton>
        )
      }}
    </ConsumerContext>
  )
}
const LinkButton = ({href ,children}) => {
  return  <ConsumerContext>
  {({ data }) => {
    return (
      <CustomButton theme={data.theme}  as={Link} href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </CustomButton>
    )
  }}
</ConsumerContext>
}
const CustomButton = styled.button`
  padding: 15px;
  color: inherit;
  outline: none;
  cursor: pointer;
  font-family: var(--font-header);
  transition: 0.5s ease;
  border: none;
  ${neumorphism}
  &:focus {
    ${neumorphismPressed}
  }
`
const Link = styled.a`
  text-decoration : none;
`
export {LinkButton}