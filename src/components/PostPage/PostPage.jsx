import { connect } from "react-redux"
import { changeTheme, changeHeader } from "../../redux/header-section-reduser"
import HeaderContainer from "../../assets/components-assets/Header/HeaderContainer"
import SpeccificPost from "./SpeccificPost"
import { changeModalLogin } from "../../redux/header-section-reduser"
import { changeModalRegister } from "../../redux/header-section-reduser"
import { showPostsUserThunk } from "../../redux/AllPosts-reduser"
import { useEffect, useState } from "react"
import { authProfile } from "../../redux/auth-reducer"
import { compose } from "redux"
import { withRouter } from "react-router"
import { getCommentsPostThunk, addComent } from "../../redux/comments-reducer"
import LanguageHoc from "../../hoc/LanguageHoc"
import { changeLanguageThunk, getLanguageProjectThunk } from '../../redux/language-reducer'
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"

const PostPage = (props) => {
    const [initializided, setInitializided] = useState(false)


    let hash = window.location.hash
    hash = hash.substr(1)


    useEffect(async () => {
        await props.authProfile()

        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash)

        await props.showPostsUserThunk(props.match.params.postId)
        await props.getCommentsPostThunk(props.match.params.postId)
        await setInitializided(true)
    }, [])


    if (initializided && props.languageObj) {
        return (
            <>
                <HeaderContainer {...props} />
                <SpeccificPost {...props} />
            </>
        )
    } else {
        return <ProgressiveBar />
    }
}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        post: state.posts.post,
        comments: state.comments.comments,
        languageObj: state.language.languageObj,
        theme: state.auth.theme,
        globalTheme: state.auth.globalTheme,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { changeLanguageThunk, getLanguageProjectThunk, addComent, getCommentsPostThunk, authProfile, showPostsUserThunk, changeTheme, changeHeader })
)(PostPage)


// export default connect(mapStateToProps, { authProfile,showPostsUserThunk,changeTheme, changeHeader })(PostPage)