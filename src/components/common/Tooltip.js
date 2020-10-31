import React from "react"
import styled from "styled-components"
import { lightShadow } from "./effects"
function Tooltip({ children, show }) {
  return (
    <Wrapper className="tooltip">
      <div className={`children ${show && "show"}`}>{children}</div>
    </Wrapper>
  )
}

export default Tooltip

const Wrapper = styled.div`
  position: relative;
  display: inline-block; /* If you want dots under the hoverable text */
  font-family: var(--font);
  .children {
    visibility: visible;
    width: 120px;
    background-color: var(--white);
    ${lightShadow}
    color: var(--grey-dark);
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
    &.show {
      visibility: visible;
      opacity: 1;
    }
  }
  &:hover .children {
    visibility: visible;
    opacity: 1;
  }
`
