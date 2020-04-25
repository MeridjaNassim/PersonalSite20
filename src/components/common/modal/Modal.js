import React,{useState} from 'react';
import styled from 'styled-components';
import { logos } from '../images';
import { dropShadow } from '../effects';
const StyledWrapper = styled.div`
    display : flex ;
    flex-direction : column;
    position : fixed ;
    justify-content :center;
    align-items : center;
    top : 20vh;
    width : 30vw;
    left : 35vw;
    font-family : var(--font);
    background-color : var(--grey-dark);
    ${dropShadow}
    opacity : 0;
    padding : 50px;
    text-align : center;
    border-radius : 100px;
    z-index : 13;  
    border : 2px solid inherit;
    transform : translateY(-100vh);
    transform-origin : ${props => props.origin};
    animation : drop 0.5s ease-out forwards ;
    &.close {
        animation : drop 0.5s ease-out backwards;
    }
    @media screen and (max-width: 768px) {
        margin : 10% auto;
        width : 80vw;
        left : 10vw;
        max-width : 90% !important ;
        @keyframes drop {
        from {
            transform  : translateY(-100vh);
           opacity : 0
        }
        to {
            transform : translateY(0vh);
            opacity : 1;
        }
    }
    }
    @keyframes drop {
        from {
            transform  : translateY(-100vh);
           opacity : 0
        }
        to {
            transform : translateY(0vh);
            opacity : 1;
        }
    }
    .modal-header {
        background-color : inherit;
    }
    .modal-body {
        background-color : inherit;
        color :white;
    }
    .modal-footer {
        width : 100%;
        justify-content : space-around;
        display : flex ;
        
        button {
            color : inherit;
            border-radius : 10px;
            outline : 0;
            border : none;
            padding : 1vw 2vw;
            cursor : pointer ;
            transition : transform 1s ease;
            &:hover {
                transform : scale(1.2)
            }
        }
        .btn-cancel {
            background : var(--red)
        }
        .btn-continue {
            color :white;
            background : var(--green)
        }

    }
`
const Modal = (props) => {
    const [close,setClose] = useState(false);
    let corner = props.corner ? `border-${props.corner}-radius` : 'border-top-left-radius';
    let origin = props.corner ? props.corner.split('-').join(' ') : 'top left';
    return (
        <StyledWrapper origin={origin} corner={corner} className={`${close ? 'close' : ""}`} style={{
            maxWidth : props.maxWidth,
        }}>
                <div className="modal-header">
                    <img src={props.error ? logos.loading : logos.logo} width="100px" height="100px" alt="logo"></img>
                </div>
                <div className="modal-body">
                    <p>
                      {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                   
                    <button className="btn-continue" onClick={e=> {
                        props.close(e);
                        setClose(true)
                    }}>continue</button>
                </div>
          
        </StyledWrapper>
    )
}

export default Modal;
