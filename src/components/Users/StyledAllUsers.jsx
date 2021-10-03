import styled from "styled-components"
import { Container } from "../MainTitle/MostActivityUsers/StyledMostActivityUsers"

export const AllUsersTitleContainer = styled(Container)`
    justify-content: start;
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    height:auto;
    color: #000000;

    @media(max-width: 575px) {
        margin-left:10px;
    }

`

export const AllUsersContainer = styled(Container)`
    position:relative;
    justify-content: start;
    font-family: Montserrat;
    flex-direction: column;
    height:auto;
    margin-bottom: 220px;   
    
    @media(max-width: 575px) {
        margin-left:10px;
    }

`

export const ShowMoreContainer = styled(Container)`
    justify-content: start;
`