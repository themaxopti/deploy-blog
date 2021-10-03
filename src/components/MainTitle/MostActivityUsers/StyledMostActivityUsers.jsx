import styled from "styled-components"
// import { Container } from "./StyledMostActivityUsers"

export const Div = styled.div`
    display: flex;
    flex-grow: 1;
    max-width: 1440px;
    width:100%;
    margin: 0 auto;
    z-index:1;
`

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;
    max-width: 1222px;
    margin-left:76px;
    height:360px;

    @media (max-width: 575px) {
        margin-left:0px;
    }
`

export const Content = styled.div`
    width:100%;
`

export const UserSlider = styled.div`
    display: flex;
    flex-direction: column;
    width: 110px;
    margin-left: 0px;
    justify-content: center;
    align-items: center;

`

export const UserSliderImage = styled.div`
    width:110px;
    height:115px;
    border-radius:50%;
    position: relative;
    cursor:pointer;
    overflow:hidden;
`

export const UserSliderUser = styled.div`
    marginTop: 20px;
    cursor: pointer;
    font-family: Lato;
    font-style: italic;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
`

export const MostActivityUsersDivInSlider = styled.div`
font-family: Montserrat;
font-style: italic;
font-weight: normal;
font-size: 22px;
line-height: 27px;
color: #FFF7F7;
text-align:center;
margin-top: 40px;

`
