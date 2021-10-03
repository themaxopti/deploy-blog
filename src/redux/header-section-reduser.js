import React from 'react'
import { auth, theme } from "../api/api"



const CHANGE_THEME = 'headerSection/CHANGE_THEME'
const CHANGE_HEADER = 'headerSection/CHANGE_HEADER'
const CHANGE_MODAL = 'headerSection/CHANGE_MODAL'
const CHANGE_MODAL_LOGIN = 'headerSection/CHANGE_MODAL_LOGIN'
const CHANGE_MODAL_Register = 'headerSection/CHANGE_MODAL_Register'
const CHANGE_THEME_GLOBAL = 'headerSection/CHANGE_THEME_GLOBAL'
const CHANGE_MODAL_CHAT = 'headerSection/CHANGE_MODAL_CHAT'




const initialState = {
    isChangeTheme: false,
    isFakeHeader: true,
    isModal: false,
    isChatModal: null,
    isLoginModal: null,
    isRegisterModal: null
}

const headerSectionReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, isChangeTheme: action.themeData }

        case CHANGE_HEADER:
            return { ...state, isFakeHeader: action.headerData }

        case CHANGE_MODAL:
            return { ...state, isModal: action.isModal }

        case CHANGE_MODAL_LOGIN:
            return { ...state, isLoginModal: action.isLoginModal }

        case CHANGE_MODAL_Register:
            return { ...state, isRegisterModal: action.isRegisterModal }

        case CHANGE_THEME_GLOBAL:
            return { ...state, globalTheme: action.themeDataGlobal }


        case CHANGE_MODAL_CHAT:
            return { ...state, isChatModal: action.isChatModal }


        default:
            return { ...state }
    }
}


export const changeTheme = (themeData) => ({ type: CHANGE_THEME, themeData })
export const changeThemeGlobal = (themeDataGlobal) => ({ type: CHANGE_THEME_GLOBAL, themeDataGlobal })
export const changeHeader = (headerData) => ({ type: CHANGE_HEADER, headerData })
export const changeModal = (isModal) => ({ type: CHANGE_MODAL, isModal })
export const changeModalLogin = (isLoginModal) => ({ type: CHANGE_MODAL_LOGIN, isLoginModal })
export const changeModalRegister = (isRegisterModal) => ({ type: CHANGE_MODAL_Register, isRegisterModal })
export const changeModalChat = (isChatModal) => ({ type: CHANGE_MODAL_CHAT, isChatModal })



export const getThemeGlobalThunk = (themeUser) => (dispatch) => {
    theme.getThemeProject().then(data => {
        dispatch(changeThemeGlobal(data.data.theme))
    })
}




export default headerSectionReduser