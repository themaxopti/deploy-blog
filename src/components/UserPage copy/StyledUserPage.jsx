import styled from "styled-components";
import { Container } from "../MainTitle/MostActivityUsers/StyledMostActivityUsers";


export const UserPageContentContainer = styled(Container)`
    height: 314px;
    justify-content: start;
    ::before{
        content:'';
        width: 100vw;
        height: 80px;
        position:absolute;
        background: rgba(0, 0, 0, 0.3);
        right:0;
        bottom: 0;
    }
    ::after{
        content:'';
        width: 200px;
        height: 80px;
        position:absolute;
        background: rgba(0, 0, 0, 0.3);
        right:-200px;
        bottom: 0;
    }
`

export const UsersPostAndTodosContainer = styled(Container)`
    height: auto;
    justify-content: start;

`

export const UserPageRectangle = styled(Container)`
width: 1440px;
height: 80px;
position:absolute;
background: rgba(0, 0, 0, 0.3);
bottom: 0;

`

