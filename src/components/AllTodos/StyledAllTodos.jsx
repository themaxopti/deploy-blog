import styled from "styled-components"
import { Container } from "../MainTitle/MostActivityUsers/StyledMostActivityUsers"

export const AllToDosTitleContainer = styled(Container)`
    justify-content: start;
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    height:auto;
    color: #000000;
`

export const ToDosAndUsersContainer = styled(Container)`
    justify-content: space-between;
    height:auto;
    flex-direction: column;
`

export const ToDosAndUsersDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const TodosDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`