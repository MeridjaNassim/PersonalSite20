import React,{useState} from 'react';
import styled from 'styled-components';
import { logos } from '../images';
import { dropShadow } from '../effects';

const Modal = (props) => {
    const [close,setClose] = useState(false);
    return (
        <StyledWrapper  className={`${close ? 'close' : ""}`} >
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

const StyledWrapper = styled.div`
    display : flex ;
    flex-direction : column;
    position : fixed ;
    justify-content :center;
    align-items : center;
    top : 20vh;
    width : 40vw;
    left : 30vw;
    font-family : var(--font);
    ${dropShadow}
    opacity : 0;
    background : #fafafa;
    padding : 50px;
    text-align : center;
    border-radius : 20px;
    z-index :9999;  
    border : 2px solid inherit;
    transform : translateY(-100vh);
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
            transform : translateY(-15vh);
            opacity : 1;
        }
    }
    .modal-header {
        background-color : inherit;
        color : #212121
    }
    .modal-body {
        background-color : inherit;
        color : #212121
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
export default Modal;
