import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { dropShadow } from "../common/effects"
import commonStyle from './common.module.css'
import ContextConsumer from '../../context/Context'
import {navIcons} from '../common/images'
const links = [
  {
    icon : navIcons.meroute ,
    route : '/',
    routeName : 'ME',
  } ,   {
    icon : navIcons.blogroute ,
    route : '/blog',
    routeName : 'BLOG',
  } ,   {
    icon : navIcons.projectroute ,
    route : '/portfolio',
    routeName : 'PORTFOLIO',
  } ,  {
    icon : navIcons.contactroute ,
    route : '/contact',
    routeName : 'CONTACT',
  }
  
]


const Header = () => {
  const buildRouteDesktop = link=> {
    return  <Link to={link.route} className={commonStyle.link} activeClassName={commonStyle.linkActive}>{link.routeName}</Link>
  }
  const buildRouteMobile =link=> {
    return <Link to={link.route} className={commonStyle.link} activeClassName={commonStyle.linkActive}>
         <TabButton className="link">
      
        <img src={link.icon} alt="link" width ="30px" height="30px" ></img>
        {link.routeName}
      </TabButton>
    </Link> 
  }
  return (
    <ContextConsumer>
      {({data})=> {

        return <StyledHeader >
        
         
          <StyledNav>{links.map(link => {
            return data.isMobile ? buildRouteMobile(link): buildRouteDesktop(link)
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
justify-content : flex-end;
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
  background-color: var(--white);
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
     
      transform : translateY(50px) rotateZ(0deg);
      animation : spin 2s linear alternate infinite  ;
      @keyframes spin {
        from {
          transform : translateY(50px) rotateZ(0deg)
        }
        to {
          transform : translateY(50px) rotateZ(180deg)
        }
      }
      position : relative ;
    z-index : 11;
      opacity : 0.5 !important ;
    transition : opacity 0.5s ease; 
      margin : 5px;
    }
  }
  transform : translateY(-10vh);
  @media screen and (max-width: 768px) {
    box-shadow : 1px 1px 1px rgba(0,0,0,0.5);
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
