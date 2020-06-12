import styled from "styled-components"
import ConsumerContext from "../../../context/Context"
import React from "react"
import {lightShadow} from '../effects'
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
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: var(--grey-dark);
  background-color: var(--green-light);
  border: none;
  border-radius: 45px;
  ${lightShadow}
  transition: all 0.3s ease 0s;
  &:focus , &:hover {
    background-color: rgba(60, 260, 170, 1);
  box-shadow: 0px 4px 13px rgba(46, 229, 157, 0.4);
  transform: translateY(-7px);
  }
`
const Link = styled.a`
  text-decoration : none;
`
export {LinkButton}