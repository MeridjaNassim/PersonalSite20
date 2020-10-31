import React,{useState} from "react"
import Button from "../../common/button/CustomButton"
import ConsumerContext from "../../../context/Context"
import Card from "../../common/Card"
import { navigate } from "gatsby"
import { lightShadow } from "../../common/effects"
import styled from "styled-components"
import Tooltip from "../../common/Tooltip"
export default function Service({ content, direction }) {
  const [hoveredImage,setHoveredImage] = useState(null)
  console.log(hoveredImage)
  return (
    <ConsumerContext>
      {({ data }) => {
        return (
          <Wrapper
            style={{
              marginLeft: direction === "right" && "auto",
              flexDirection: direction === "right" ? "row-reverse" : "row",
            }}
          >
            <Content direction={direction}>
              <Title>{content.title}</Title>
              <Items>
                {content.techs.map(tech => (
                  <Item key={tech.alt}>
                    
                      <img
                        onMouseLeave={e => setHoveredImage(null)}
                        onMouseEnter={e => setHoveredImage(e.currentTarget.alt)}
                        src={require(`../../../images/icons/technologies/${tech.path}`)}
                        alt={tech.alt}
                      />
                      <Tooltip show={hoveredImage === tech.alt}>{tech.alt}</Tooltip>
                  </Item>
                ))}
              </Items>
              <Button
                onClick={e => {
                  e.preventDefault()
                  navigate(content.route)
                }}
              >
                See more
              </Button>
            </Content>
            <Logo
              src={require(`../../../images/illustrations/${content.logo}`)}
              alt={content.alt}
              srcset=""
            />
          </Wrapper>
        )
      }}
    </ConsumerContext>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  ${lightShadow}
  padding:4rem;
  text-align: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const Logo = styled.img`
  max-height: 300px;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    max-height: 200px;
    display: none;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  button {
    width: fit-content;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    button {
      align-self: center;
    }
  }
`

const Items = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
`

const Item = styled.li`
  max-width: 60px;
  margin: 10px;
  position: relative;
  img {
    position : relative;
    max-width: 100%;
  }
  .tooltip {
    position: absolute;
    left: 50%;
    top : -10px;
  }
`
const Title = styled.h2`
  font-size: 2rem;
  color: var(--green);
`
