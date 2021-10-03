import React from 'react'
import styled from 'styled-components'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Section = styled.div`
    display: flex;
    position: relative;
`

export const StyledBubbleImageDiv = styled.div`
    position: fixed;
    cursor:pointer;
    z-index:1000;
    top:0px;
    left:0px;
`

export const StyledBubbleImage = styled.img`
    position: absolute;
    width: 50px;
`

export const StyledSettingImage = styled(StyledBubbleImage)`
    width: 27px;
    margin-left: 5px;
    transition: 1s;
    cursor:pointer;
    margin-top: 6px;
    animation: 2s linear 0s normal none infinite running slidein;
    opacity: 0;
    &:hover{
        opacity:1;
    }  
    @keyframes slidein {
        from {
         transform: rotate(0deg);    
        }
    
        to {
            transform: rotate(360deg);   
        }
    }
`

export const HeaderDiv = styled.div`
    position:relative;
    display: flex;
    flex-grow: 1;
    max-width: 1440px;
    width:100%;
    margin: 0 auto;
    background-color: ${props => !props.backgroundC ? '#494646' : 'white' };
    width: 100%;
`

export const ProverDiv = styled.div`
    position: absolute;
    transition: 0.6s;
    z-index:10;
    margin-top: 150px;
    margin-left: -110px;
`

export const ProverDivContainer = styled.div`
    position: absolute;
    font-family: Montserrat;
    cursor:default;
    font-style: normal;
    font-weight: normal;
    line-height: 15px;
`

export const CrossButton = styled.div`
    width: 45px;
    height: 25px;
    background-color: black;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ContainObjectsInProver = styled.div`
    margin-top: 15px;
`

export const ObjectInProver = styled.div`
    display: flex;
`

export const Switcher = styled.div`
    transition: 1s; 
    cursor: pointer;
    display: flex;
    align-items:center;
    background: ${props => props.bColor === false ? 'white' : 'black'};
    border-radius: 69px;
    width: 39px;
    height: 17px;
    margin-left: 5px;
`


export const SwitcherCircle = styled.div`
    transition: 1s; 
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: ${props => (props.bColor === false ? 'black' : 'white')};
    margin-left: ${(props) => (props.primary === false ? '5px' : '20px')};
`


export const LanguageSwitcher = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    background: #FFFFFF;
    border-radius: 326px;
    height: 19px;
`

export const LanguageSwitchElLeft = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 12px;
    border-radius: 326px 0px 0px 326px;
    align-items:center;
    background-color: white;
    justify-content:center;
    cursor: pointer;
    &:hover{
    background-color: black;
    color:white;
    }
`

export const LanguageSwitchElCenter = styled(LanguageSwitchElLeft)`
    border-radius: 0px;
    
`

export const LanguageSwitchElRight = styled(LanguageSwitchElLeft)`
    border-radius: 0px 326px 326px 0px;
`

export const AboutProject = styled.span`
    font-family: Montserrat;
    font-style: italic;
    cursor:pointer;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`

export const SpanWithCredentionals = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
`

export const StyledLinkHeader = styled(NavLink)`
    transition: 1s;
    text-decoration: none;
    cursor:pointer;
    &:hover .popover{
        display: flex;
    }
`

export const Popover = styled.div`
    display: none;
    flex-direction: column;
    width: 100px;
    border-radius: 5px;
    margin-top: 20px;
    cursor:default;
    position: absolute;
    z-index:10;
`

export const PopoverLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color: white;
    text-decoration:none;
    cursor:pointer;
    width: 100%;
    height:40px;
    &:hover{
        font-weight:600;
    }  
`