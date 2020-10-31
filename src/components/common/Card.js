import styled from "styled-components"
import { lightShadow } from "./effects"
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
  key
}) => {
  return (
    <StyledCard className={className} style={style} theme={theme} key={key}>
      <img className="icon-card" src={icon} alt={alt}  style={iconStyle} />
      <h2 className="title" style={headerStyle}>{title}</h2>
      <p className="desc" style={textStyle}>{text}</p>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 2%;
  padding: 64px;
  min-width : 25%;
  transition: 0.5s ease;
  display : flex;
  justify-content : center;
  align-items : center;
  position: relative;
  text-align: center;
  .icon-card {
    position: absolute;
    margin: 0;
    width: 10%;
    top: 13%;
    left: 5%;
  }
  ${lightShadow}
  border-radius: 2px;
  
  h2 {
    font-weight: 400;
    width: 70%;
    min-height: 20%;
    margin: 1rem auto;
    color: var(--grey);
  }
  
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 2% auto;
    max-width: 90%;
    padding: 32px;
    .desc {
      padding : 0px;
    }
  }
`
export default Card
