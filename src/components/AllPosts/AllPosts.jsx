import React, { useState } from 'react'
import HeaderContainer from '../../assets/components-assets/Header/HeaderContainer'
import AllPostsTitle from './AllPostsTitle/AllPostsTitle'
import AllPostsContext from './AllPostsContextContext/AlPostsContext'
import { connect } from 'react-redux'
import { changeTheme, changeHeader } from '../../redux/header-section-reduser'
import PostsAndUsers from './PostsAndUsers/PostsAndTodos'
import { changeModal } from '../../redux/header-section-reduser'
import { getUsers } from '../../redux/users-page-reguser'
import { useEffect } from 'react'
import { getAllPostsThunk, getAllPostsPaginationThunk } from '../../redux/AllPosts-reduser'
import { compose } from 'redux'
import LanguageHoc from '../../hoc/LanguageHoc'
import { withRouter } from 'react-router'
import { getLanguageProjectThunk, changeLanguageThunk } from '../../redux/language-reducer'
import ProgressiveBar from '../../assets/components-assets/ProgressiveBar/ProgressiveBar'


const AllPosts = (props) => {
    let hash = window.location.hash
    hash = hash.substr(1)

    const [initialised, setInitialised] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(async () => {
        await props.getLanguageProjectThunk()
        await props.getUsers(5)
        await props.changeLanguageThunk(hash)
        await props.getAllPostsPaginationThunk(currentPage)

        setInitialised(true)
    }, [])


   if (initialised && props.languageObj) {
        return (
            // <>asdasd</>
            <>
                <HeaderContainer {...props} />
                <AllPostsTitle  {...props} />
                <PostsAndUsers stateCurrnetPage={props.currentPage} currentPage={currentPage} setCurrentPage={setCurrentPage}  {...props} />
            </>
        )
    } else {
        return < ProgressiveBar />
    }
}



const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        isModal: state.headerSection.isModal,
        users: state.users.users,
        posts: state.posts.posts,
        allPosts: state.posts.allPosts,
        currentPage: state.posts.currentPage,
        languageObj: state.language.languageObj,
        theme: state.auth.theme,
        globalTheme: state.auth.globalTheme,
        isAuth:state.auth.isAuth,
        allPostsCount:state.posts.allPostsCount
    })
}


export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { getUsers,changeLanguageThunk, getLanguageProjectThunk, getAllPostsPaginationThunk, getAllPostsThunk, changeTheme, changeHeader, getUsers })
)(AllPosts)

// export default connect(mapStateToProps, { getAllPostsPaginationThunk, getAllPostsThunk, changeTheme, changeHeader, getUsers })(AllPosts)