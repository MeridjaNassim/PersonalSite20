import styled from 'styled-components'

export const Button = styled.button`
padding : 15px;
background : ${props=> props.transparent ? 'transparent' : 'inherit'};
color : inherit ;
outline : none;
cursor : pointer;
font-family : var(--font-header);
border : 2px ${props => props.solid ? 'solid' : 'dashed'} inherit;
border-radius : 20px;
`