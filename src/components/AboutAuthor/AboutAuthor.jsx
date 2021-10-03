import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import HeaderContainer from "../../assets/components-assets/Header/HeaderContainer"
import { connect } from "react-redux"
import { changeTheme, changeHeader } from "../../redux/header-section-reduser"
import AboutAuthorPage from "./AboutAuthorPage"
import { compose } from "redux"
import { withRouter } from "react-router"
import LanguageHoc from "../../hoc/LanguageHoc"
import { useEffect, useState } from "react"
import { getLanguageProjectThunk, changeLanguageThunk } from "../../redux/language-reducer"
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"


const AboutAuthor = (props) => {
    let hash = window.location.hash
    hash = hash.substr(1)

    const [initialised, setInitialised] = useState(false)

    useEffect(async () => {
        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash)

        setInitialised(true)
    }, [])

    if (initialised && props.languageObj) {
        return (
            <>
                <HeaderContainer />
                <AboutAuthorPage {...props} />
            </>
        )
    } else {
        return < ProgressiveBar />
    }

    // return (
    //     <>
    //         <HeaderContainer />
    //         <AboutAuthorPage {...props} />
    //     </>
    // )
}

const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        languageObj: state.language.languageObj,
        globalTheme: state.auth.globalTheme,
        isAuth: state.auth.isAuth,
        theme: state.auth.theme
    })
}

// LanguageHoc

export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { changeLanguageThunk, getLanguageProjectThunk, changeTheme, changeHeader })
)(AboutAuthor)

// export default connect(mapStateToProps, { changeTheme, changeHeader })(AboutAuthor)