import styled, { keyframes } from "styled-components";

export const ModalWIndowWrap = styled.div`
    display:  ${props => props.hide ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    transition: 1s;
    position: fixed;
    z-index: 1001;
    top:0;
    left:0;    
    width: 100%;
    height: 100vh;
    background-color: rgba(41, 39, 39, 0.4);
`

export const Span = styled.div`
    position: absolute;
    margin-top: -400px;
    margin-right: 800px;
    font-family: Merienda;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 52px;
    color: #000000;

`

const rotate = keyframes`
  from {
    transform: rotate3d(2,2,0,270deg);
    
}

  to {
    transform: rotate3d(0px);

  }
`;

export const ModalWindowContain = styled.div`
    position:relative;
    transition: 3s;
    transform: translateX(${props => props.hide ? '-210%' : '0px' }) ;
    display:${props => props.hide ? 'none' : 'flex'};
    justify-content:center;
    animation: ${rotate} 0.8s linear ;
    align-items:center;
    max-width: 1055px;
    width: 100%;
    height: 600px;
    background: #E8E8E8;
    border-radius: 7px;

`