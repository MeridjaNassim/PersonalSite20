/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useLayoutEffect  } from "react"
import Header from "./header"
import Footer from "./footer"
import "../../styles/layout.css"
import "../../styles/main.css"
import styled from "styled-components"
import PageLoader from "../common/loader"
import ConsumerContext from "../../context/Context"

import PropTypes from "prop-types"
import SocialMedia from "./SocialMedia"



const Layout = ({ children }) => {
  // const [theme, setTheme] = useState("light")
  // const [animate, setAnimate] = useState(false)
  // const [globalThemeLoaded ,setGlobalThemeLoaded] = useState(false)
  // useLayoutEffect(() => {
  //   let storedTheme = localStorage.getItem("theme") || "dark"
  //   setTheme(storedTheme);
  // }, [])
   return (
    <ConsumerContext>
      {({ data,set }) => {
        // if(!globalThemeLoaded) {
        //   set({theme : theme})
        //   setGlobalThemeLoaded(true)
        // } 
        return (
        <div className={`light-theme`}>
          <Header />
          <div style={{ backgroundColor: "inherit" }}>
            <SocialMedia></SocialMedia>
            {/* <ThemeSwitch
              style={data.isMobile ? { top : "1vh" } : null}
              onClick={e => {
                let newdata = theme === "light" ? "dark" : "light"
                setTheme(newdata)
                localStorage.setItem("theme", newdata)
                set({theme : newdata})
                setAnimate(true)
                setTimeout(() => setAnimate(false), 500)
              }}
            >
              {theme === "dark" ? (
                <img
                  className={animate ? "shrink-grow" : null}
                  src={require("../../images/icons/sun.svg")}
                  alt="sun"
                />
              ) : (
                <img
                  className={animate ? "shrink-grow" : null}
                  src={require("../../images/icons/moon.svg")}
                  alt="moon"
                />
              )}
            </ThemeSwitch> */}
            <Main style={{ backgroundColor: "inherit", minHeight: "100vh" , paddingTop: data.isMobile ? 0 : "10vh" }}>
              {children}
            </Main>
            <Footer style={{ paddingBottom : data.isMobile ? "10vh"  : 0}}></Footer>
          </div>
        </div>
      )}} 
    </ConsumerContext>
  )
}
Layout.propTypes = {
  children : PropTypes.arrayOf(PropTypes.any)
}
const Main = styled.main`
`

const ThemeSwitch = styled.button`
  position: fixed;
  top: 94vh;
  height: 50px;
  width: 50px;
  border: none;
  z-index: 101;
  cursor: pointer;
  transform: scale(0);
  outline: none;
  background-color: transparent;
  right: 10px;
  animation: grow 1s ease forwards 1;
  opacity: 0.5;
  transition: opacity 1s ease;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  img.shrink-grow {
    animation: shrinkgrow 0.5s ease-out forwards 1 !important;

    @keyframes shrinkgrow {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }
  &:hover {
    opacity: 1;
    img {
      animation: rotate1 2s linear forwards infinite;

      @keyframes rotate1 {
        0% {
          transform: rotateZ(0deg);
        }
        25% {
          transform: rotateZ(30deg);
        }
        75% {
          transform: rotateZ(-30deg);
        }
        100% {
          transform: rotateZ(0deg);
        }
      }
    }
  }
`

export default Layout
