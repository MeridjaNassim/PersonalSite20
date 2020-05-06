import styled from "styled-components"
import { neumorphism } from "./effects"
import React from "react"

const Card = ({
  theme,
  title,
  icon,
  alt,
  text,
  style,
  children,
  iconStyle,
  headerStyle,
  textStyle,
  className,
}) => {
  return (
    <StyledCard className={className} style={style} theme={theme}>
      <img src={icon} alt={alt} className="icon-card" style={iconStyle} />
      <h2 style={headerStyle}>{title}</h2>
      <p style={textStyle}>{text}</p>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  flex: 1;
  margin: 2%;
  padding: 64px;
  min-width: 25%;
  max-width: 33%;
  transition: 0.5s ease;
  border-radius: 20px;
  position: relative;
  text-align: center;
  .icon-card {
    position: absolute;
    margin: 0;
    width: 10%;
    top: 13%;
    left: 5%;
  }
  p {
    min-height: 30%;
  }
  ${neumorphism}
  h2 {
    font-weight: 400;
    width: 70%;
    min-height: 20%;
    margin: 1rem auto;
    color: var(--grey);
  }
  button {
    color: var(--grey) !important;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 2% auto;
    max-width: 90%;
    padding: 32px;
  }
`
export default Card
