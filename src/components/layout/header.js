import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { dropShadow } from "../common/effects"
import { Menu as m} from '../common/images';
import commonStyle from './common.module.css'
import ContextConsumer from '../../context/Context'
const links = [
  <Link to="/" className={commonStyle.link} activeClassName={commonStyle.linkActive}> ME </Link>,
  <Link to="/blogs" className={commonStyle.link} activeClassName={commonStyle.linkActive}> BLOGS </Link>,
  <Link to="/projects" className={commonStyle.link} activeClassName={commonStyle.linkActive}> PROJECTS </Link>,
  <Link to="/contact" className={commonStyle.link} activeClassName={commonStyle.linkActive}>GET IN TOUCH</Link>,
]

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false)
  const toggleNav = () => {
    setNavVisible(!isNavVisible)
  }
  return (
    <ContextConsumer>
      {({data})=> {

        return <StyledHeader isNavVisible={isNavVisible}>
        
        <CSSTransition
          in={!(data.isMobile) || isNavVisible}
          timeout={200}
          classNames="NavAnimation"
          unmountOnExit
        >
          <StyledNav>{links}</StyledNav>
        </CSSTransition>
        <Menu onClick={toggleNav}>
          <img
            alt="menu"
            src={
              !isNavVisible
                ? m.menu
                : m.close
            }
          ></img>
        </Menu>
      </StyledHeader>
      }}
    </ContextConsumer>
    
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0; /* Stick it to the top */
  min-height: 10vh;
  width: 100vw;
  display: grid;
  background-color: inherit;
  grid-template-areas: "nav";
  font-family: var(--font), sans-serif;
  font-weight: 600;
  font-size: 16px;
  z-index: 10;
  ${dropShadow} 
  @media screen and (max-width: 768px) {
    transform : translateY(-100vh);
    animation : drop 2.5s linear forwards ;
    @keyframes drop {
    from{
      transform : translateY(-100vh);
    }
    to{
      transform : translateY(0)
    }
  }
    grid-template-areas: "logo burger" "nav nav";
    .NavAnimation-enter {
      opacity: 0;
    }
    .NavAnimation-enter-active {
      opacity: 1;

      transition: opacity 500ms;
    }
    .NavAnimation-exit {
      opacity: 1;
    }
    .NavAnimation-exit-active {
      opacity: 0;

      transition: opacity 500ms;
    }
  }
`

const StyledNav = styled.nav`
  grid-area: nav;
  display: grid;
  padding : 0  30%;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
  transition: height 1s ease-in;

  a {
    color: inherit;
    opacity: 0.4;
    padding : 5px 15px;
    text-decoration-line: none;
    transition: 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(${links.length}, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;
    padding-bottom: 10%;
  }
`

const Menu = styled.button`
  display: none;
  grid-area: burger;
  margin: auto 0;
  margin-left: auto;
  margin-right: 10px;
  background-color: transparent;
  border : none;
  padding: 10px;
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.5s ease-in-out;
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  outline: none;
  img {
    height: 100%;
    margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export default Header
