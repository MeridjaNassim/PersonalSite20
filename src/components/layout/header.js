import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { dropShadow } from "../common/effects"
import commonStyle from './common.module.css'
import ContextConsumer from '../../context/Context'
import {navIcons} from '../common/images'
const links = [
  {
    icon : navIcons.meroute ,
    route : <Link to="/" className={commonStyle.link} activeClassName={commonStyle.linkActive}> ME </Link>
  } ,  {
    icon : navIcons.blogroute ,
    route : <Link to="/blogs" className={commonStyle.link} activeClassName={commonStyle.linkActive}> BLOGS </Link>,
  } ,  {
    icon : navIcons.projectroute ,
    route : <Link to="/projects" className={commonStyle.link} activeClassName={commonStyle.linkActive}> PROJECTS </Link>,
  } , {
    icon : navIcons.contactroute ,
    route : <Link to="/contact" className={commonStyle.link} activeClassName={commonStyle.linkActive}>CONTACT</Link>,
  }
  
]

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false)
  const toggleNav = () => {
    setNavVisible(!isNavVisible)
  }
  const buildRouteMobile =link=> {
    return <TabButton className="link">
        <img src={link.icon} alt="link" width ="30px" height="30px" ></img>
        {link.route}
    </TabButton>
  }
  return (
    <ContextConsumer>
      {({data,set})=> {

        return <StyledHeader isNavVisible={isNavVisible}>
        
         
          <StyledNav>{links.map(link => {
            return data.isMobile ? buildRouteMobile(link): link.route
          })}</StyledNav>
          {!data.isMobile ?<div className="hoverer">
              <img src={require('../../images/icons/compass.svg')} alt="compass" width ="30px" height="30px"  />
            </div> : null }
          
      </StyledHeader>
      }}
    </ContextConsumer>
    
  )
}

const TabButton = styled.div`

display :flex; 
flex-direction : column;
justify-content : center;
align-items :center;
img {
  z-index : 123;
  margin : 0;
  margin-top: 10%;


}
`
const StyledHeader = styled.header`
  position: fixed;
  min-height: 10vh;
  width: 100vw;
  display: grid;
  background-color: inherit;
  grid-template-areas: "nav";
  font-family: var(--font), sans-serif;
  font-weight: 600;
  font-size: 16px;
  z-index: 10;
  opacity : 1;
  transition : 0.5s ease; 
  &:hover {
    transform : translateY(0px);
    opacity : 1;
    .hoverer img {
      opacity : 0!important;
    }
  }
  .hoverer {
    
    cursor : pointer;
    
    top : 0;
    display : contents;
    img {
      transform : translateY(50px);
      position : relative ;
    z-index : 11;
      opacity : 0.5 !important ;
    transition : opacity 0.5s ease; 
      margin : 5px;
    }
  }
  transform : translateY(-10vh);
  ${dropShadow} 
  @media screen and (max-width: 768px) {
    bottom: 0px;
    transform : translateY(0vh);
  }
`

const StyledNav = styled.nav`
  grid-area: nav;
  display: grid;
  top : 50%;
  position : relative ;
    z-index : 9;
  padding : 0 30%;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
  transition: height 1s ease-in;

  a  {
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
  padding : 0;
  top : 0;
  a {
    font-size : 10px;
  }
 }
`



export default Header
