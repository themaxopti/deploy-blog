import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { changeTheme, changeHeader } from "../../redux/header-section-reduser"
import { connect } from "react-redux"
import HeaderContainer from "../../assets/components-assets/Header/HeaderContainer"
import AllUsersTitle from "./AllUsersTitle"
import AllUsers from "./AllUsers"
import ShowMore from "./ShowMore"
import Test from "../../assets/components-assets/ModalWIndow/Test"
import { getUsers } from "../../redux/users-page-reguser"
import { useEffect, useState } from "react"
import { compose } from "redux"
import { withRouter } from "react-router"
import LanguageHoc from "../../hoc/LanguageHoc"
import { getLanguageProjectThunk, changeLanguageThunk } from "../../redux/language-reducer"
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"



const Users = (props) => {

    let hash = window.location.hash
    hash = hash.substr(1)
    const [inittializased, setInittializased] = useState(false)

    let initialPageLimit = 4

    async function initialProject () {
        await props.getUsers(initialPageLimit)
        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash)
        await setInittializased(true)
    }

    useEffect(async function initialProject () {
        await props.getUsers(initialPageLimit)
        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash)
        await setInittializased(true)
    }, [])

    // if(!inittializased || !props.languageObj){
    //     initialProject()
    // }
    if(!inittializased || !props.languageObj){
        return <ProgressiveBar />
    }


    if (inittializased && props.languageObj) {
        return (
            <>
                <HeaderContainer {...props} />
                <AllUsersTitle {...props} />
                <AllUsers {...props} />
            </>
        )
    } 
}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        users: state.users.users,
        languageObj: state.language.languageObj,
        theme: state.auth.theme,
        globalTheme: state.auth.globalTheme,
        isAuth:state.auth.isAuth
    })
}




export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { changeLanguageThunk, getLanguageProjectThunk, changeTheme, changeHeader, getUsers })
)(Users)

// export default connect(mapStateToProps, { changeTheme, changeHeader, getUsers })(Users)