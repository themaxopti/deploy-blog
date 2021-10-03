import styled from 'styled-components'
import { Container } from '../../MainTitle/MostActivityUsers/StyledMostActivityUsers'

export const PostsAndTodosContainer = styled(Container)`
    justify-content: space-between;
    height:auto;
    flex-direction: column;
`

export const PostsAndToDosDiv = styled.div`
    position:relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const PostsDiv = styled.div`
    max-width: 648px;    
    border-radius: 5px;
    font-family: Montserrat;
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    overflow: hidden;

    color: #E3D7D7;
    width:100%;
`

export const UsersDiv = styled.div`
    margin-top: 30px;
    overflow: hidden;
    height:550px;
    max-width: 350px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E3E0E0;
    box-sizing: border-box;
    box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    @media(max-width:575px){
        display:none;
    }
`


export const PostCardContent = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const PostCard = styled.div`
    position:relative;
    max-width: 648px;
    width: 100%;
    display: flex;
    flex-grow: 1;
    height: 155px;
    overflow: hidden;
    margin-top: 30px;
`

