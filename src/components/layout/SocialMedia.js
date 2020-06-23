import React from 'react'
import styled from "styled-components"
import { ExternalLink } from "../common/utils"

const VerticalSmDiv = styled.div`
    margin : 10% 0 0 20px;
    display : flex ; 
    flex-direction : column;
    width : 10vw;
    z-index : 100000;
    position : absolute;
    height : 100px;
    img {
        max-width : 25px;
        opacity : 0.4;
        transition : 1s ease ;
        &:hover {
            opacity : 1;
        }
    }
    @media screen and (max-width: 768px) {
      margin-top: 25%;
    }
`
export const SocialMediaLinks = [
    <ExternalLink
    url="https://www.instagram.com/shia_lab/"
    icon={require("../../images/icons/instagram.svg")}
    text="instagram"
  />,
  <ExternalLink
    url="https://twitter.com/AbdMeri"
    icon={require("../../images/icons/twitter.svg")}
    text="twitter"
    />,
  <ExternalLink
    url="https://www.facebook.com/nassim.top2"
    icon={require("../../images/icons/facebook.svg")}
    text="facebook"
    />,
    <ExternalLink
    url="https://github.com/MeridjaNassim"
    icon={require("../../images/icons/github.svg")}
    text="github"
    />,
   <ExternalLink
    url="https://www.linkedin.com/in/abdellah-meridja-308a16147/"
    icon={require("../../images/icons/linkedin.svg")}
    text="linkedin"
    />
  ]
export default function SocialMedia(){
    return (
        <VerticalSmDiv>
            {SocialMediaLinks}
        </VerticalSmDiv>
    )
}
