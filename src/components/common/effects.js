import {css} from 'styled-components' ;


const dropShadow = css`
-webkit-box-shadow: -1px -3px 23px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px -3px 23px 10px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -3px 23px 10px rgba(0, 0, 0, 0.2);
`
const neumorphism = css`
${props => {
    if (props.theme === "dark") {
      return css`
        border-radius: 20px;
        background: inherit;
        box-shadow: 5px 5px 2px #1c1c1c, -5px -5px 2px #262626;
      `
    } else {
      return css`
        border-radius: 20px;
        background: inherit;
        box-shadow: 5px 5px 2px #d2d2d2, -5px -5px 2px #ffffff;
      `
    }
  }}
` 

const neumorphismPressed = css`
${props => {

    if (props.theme === "dark") {
      return css`
        border-radius: 20px;
        background: inherit;
        box-shadow: inset 9px 9px 18px #1c1c1c, 
            inset -9px 9px 18px  #262626;
      `
    } else {
      return css`
        border-radius: 20px;
        background: inherit;
        box-shadow:  inset 5px 5px 2px #d2d2d2, 
            inset -5px -5px 2px #ffffff;
      `
    }
}}
`

const neumorphismHover = css`
${props => {

    if (props.theme === "dark") {
      return css`
        border-radius: 20px;
        background: linear-gradient(145deg, #1e1e1e, #232323);
        box-shadow: 5px 5px 2px #1c1c1c, -5px -5px 2px #262626;
      `
    } else {
      return css`
        border-radius: 20px;
        background: linear-gradient(145deg, #e1e1e1, #ffffff);
        box-shadow: 5px 5px 2px #d2d2d2, -5px -5px 2px #ffffff;
      `
    }
}}
`
export {dropShadow , neumorphism,neumorphismPressed ,neumorphismHover}