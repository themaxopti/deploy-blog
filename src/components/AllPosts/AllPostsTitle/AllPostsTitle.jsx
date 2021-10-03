import React from 'react'
// import { Container, Div, Content } from "../../MainTitle/MostActivityUsers/StyledMostActivityUsers"
// import { Section } from '../../../assets/components-assets/Header/HeaderStyledComponents'
import { AllPostsTitleContainer } from './StyledAllPosts'
import CssOptimisedHoc from '../../../hoc/CssOptimisedHoc'
import { compose } from 'redux'
import s from '../AllPosts.module.css'


const AllPostsTitle = (props) => {
    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? `${s.themeColor}` : ''}`

    props.changeHeader(false)
    return (
        <AllPostsTitleContainer className={isTheme}>
          <span className={isTheme}>  {props.languageObj.profilePageText.posts.allPosts} </span>
        </AllPostsTitleContainer>
    )
}




export default CssOptimisedHoc(AllPostsTitle,'200px')