 import React from 'react';
 import styled from 'styled-components'
const ExternalLink = ({url , icon, text}) => {
    return <a href={url} target="_blank" rel="noopener noreferrer" >
      {icon ? <img src={icon} alt ={text}></img> : text}
    </a>
  }

const Emoji =({data})=>{
  return <span role="img">{data}</span>
}

const Section = styled.section`
  margin-top : 8%;
  position :relative;
`
export {ExternalLink , Emoji , Section}  