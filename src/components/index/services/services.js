import React from 'react'
import styled from 'styled-components';
import Service from './service'

export default function services({content}) {
    return (
        <Wrapper id="services">
            <h1>{content.header}</h1>
            <div className="services">
             {content.items.map(item => {
                 return <Service content={item}></Service>
             })}
            </div>
           
        </Wrapper>
    )
}


const Wrapper = styled.section`
 margin-top : 10%;
    width : 100%;
    h1 {
        text-align :center;
        margin-bottom : 5vh;
    }
    .services {
        display :flex ;
        justify-content :center;
        flex-wrap : wrap;
        @media screen and (max-width: 768px) {
          flex-direction : column
        }
    }
`