import HeaderContainer from "../../assets/components-assets/Header/HeaderContainer"
import React, { useState } from 'react'
import { connect } from "react-redux"
import { changeTheme, changeHeader } from '../../redux/header-section-reduser'
import UserPageContent from "./UserPageContent"
import UsersPostAndTodos from "./UsersPostAndTodos/UsersPostAndTodos"
import { getProfileUser, getUsers } from "../../redux/users-page-reguser"
import { useEffect } from "react"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { getPostsUserThunk } from "../../redux/AllPosts-reduser"
import { getTodosUserThunk } from "../../redux/all-todos-reducer"
import { authProfile } from "../../redux/auth-reducer"
import { Redirect } from "react-router"
import { addPost } from "../../redux/AllPosts-reduser"
import { addPostUser, getAllPostsUser } from "../../redux/AllPosts-reduser"
import { addTodoThunk } from "../../redux/all-todos-reducer"
import { showPostsUserThunk } from "../../redux/AllPosts-reduser"
import LanguageHoc from "../../hoc/LanguageHoc"
import { getLanguageProjectThunk, changeLanguageThunk } from "../../redux/language-reducer"
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"



const UserPage = (props) => {
    const [initialiZed, setInitialiZed] = useState(false)

    let hash = window.location.hash
    hash = hash.substr(1)

    useEffect(async () => {
        try {
            await props.authProfile()
            await props.getProfileUser(props.match.params.userId)
            await props.getTodosUserThunk(props.match.params.userId)
            await props.getAllPostsUser(props.match.params.userId)
            await props.getLanguageProjectThunk()
            await props.changeLanguageThunk(hash)
            setInitialiZed(true)
        } catch (e) {

        }
    }, [])



   if (initialiZed && props.languageObj) {
        return (
            <div style={{ overflow: 'hidden' }}>
                <HeaderContainer noneShowMore={true} {...props} />
                <UserPageContent {...props} />
                <UsersPostAndTodos {...props} />
            </div>
        )
    }else {
        return < ProgressiveBar />
    }

}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        profile: state.users.profile,
        todosUser: state.todos.todosUser,
        postsUser: state.posts.postsUser,
        users: state.users.users,
        userName: state.auth.userName,
        email: state.auth.email,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        posts: state.posts.posts,
        avatar: state.users.avatar,
        languageObj: state.language.languageObj,
        theme:state.auth.theme,
        globalTheme:state.auth.globalTheme,

    })
}


export default compose(
    LanguageHoc,
    React.memo,
    connect(mapStateToProps, { changeLanguageThunk, getLanguageProjectThunk, showPostsUserThunk, addTodoThunk, getAllPostsUser, addPostUser, addPost, authProfile, changeTheme, changeHeader, getProfileUser, getPostsUserThunk, getTodosUserThunk, getUsers }),
    withRouter
)(UserPage)

// connect(mapStateToProps, { changeTheme, changeHeader, getProfileUser })(UserPage)