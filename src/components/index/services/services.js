import React from 'react'
import styled from 'styled-components';
import Service from './service'
import {Section} from '../../common/utils'
export default function services({content}) {
    return (
        <Wrapper id="services">
              <Image src={require(`../../../images/illustrations/${content.image}`)} alt={content.alt} />
            <h1>{content.header}</h1>
            <div className="services">
             {content.items.map(item => {
                 return <Service content={item}></Service>
             })}
            </div>
           
        </Wrapper>
    )
}


const Wrapper = styled(Section)`
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
const Image = styled.img`
position: absolute;
    left: 62%;
    top: -50%;
    width: 400px;
@media screen and (max-width: 768px) {
    position : relative;
  top : 20px;
  left: 50%;
  width : 200px
}
`