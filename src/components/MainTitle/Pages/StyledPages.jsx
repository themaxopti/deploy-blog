import styled from "styled-components"

export const PagesDiv = styled.div`
    flex-grow: 1;
    max-width: 1440px;
    width:100%;
    margin: 0 auto;

    z-index:1;
`

export const PagesDivContent = styled.div`
    width: 100%;
`

export const PagesContainer = styled.div`
    display:flex;
    flex-direction:column;
    max-width: 1222px;
    margin-left:76px;

    @media (max-width: 575px) {
        margin-left:0px;  
    }
`

export const Rectangle = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index:0;
    width: 100%;
    height: 100%;
    background: rgba(6, 5, 5, 0.6);
`

export const FontMarginFirstDivCard = styled.div`
    margin-top:240px;
    margin-left:25px;

    @media (max-width: 575px) {
        margin-left:10px;  
        margin-top:70px;
    }

`

export const FontMarginSecondDivCard = styled(FontMarginFirstDivCard)`
    margin-top:110px;
`