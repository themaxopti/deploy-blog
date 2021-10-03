import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Header from './Header'
import { changeTheme, changeHeader, changeModal, changeModalLogin, changeModalRegister } from '../../../redux/header-section-reduser'
import { setAuth, authProfile, logOut } from '../../../redux/auth-reducer'
import { changeThemeThunk } from '../../../redux/auth-reducer'
import { getThemeGlobalThunk } from '../../../redux/header-section-reduser'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { changeModalChat } from '../../../redux/header-section-reduser'


const HeaderContainer = (props) => {

    const windowTheme = document.querySelector('body')

    useEffect(async ()=>{
        
        windowTheme.style.backgroundColor = ` ${props.theme === 'dark' || ( !props.isAuth && props.globalTheme === 'black') ? '#494646' : 'white'} `
    },[props.theme,props.globalTheme])

    //windowTheme.style.backgroundColor = ` ${props.theme === 'dark' ? '#494646' : 'white'} `


    return (
        <Header noneShowMore={props.noneShowMore} {...props} />
    )
}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isModal: state.headerSection.isModal,
        isChatModal:state.headerSection.isChatModal,
        isFakeHeader: state.headerSection.isFakeHeader,
        isAuth: state.auth.isAuth,
        isLoginModal: state.headerSection.isLoginModal,
        isRegisterModal: state.headerSection.isRegisterModal,
        userId: state.auth.userId,
        languageObj: state.language.languageObj,
        theme:state.auth.theme,
        globalTheme:state.auth.globalTheme,
        userName:state.auth.userName,
        avatar:state.auth.avatar
    })
}

export default compose(
    withRouter,
    connect(mapStateToProps, { changeModalChat,getThemeGlobalThunk,changeThemeThunk,logOut, setAuth, changeTheme, changeHeader, changeModal, changeModalLogin, authProfile, changeModalRegister })
)(HeaderContainer)


// export default connect(mapStateToProps, { getThemeGlobalThunk,changeThemeThunk,logOut, setAuth, changeTheme, changeHeader, changeModal, changeModalLogin, authProfile, changeModalRegister })(HeaderContainer)