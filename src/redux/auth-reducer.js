import { Redirect } from "react-router-dom"
import { stopSubmit } from "redux-form"
import { auth, theme } from "../api/api"
import { addPhoto } from "../api/api"


const SET_AUTH = 'auth/SET_AUTH'
const SET_PROFILE = 'auth/SET_PROFILE'
const LOGOUT = 'auth/LOGOUT'
const SAVE_PHOTO = 'auth/SAVE_PHOTO'
const CHANGE_THEME = 'auth/CHANGE_THEME'
const CHANGE_THEME_GLOBAL = 'headerSection/CHANGE_THEME_GLOBAL'


// const tokenLocal = JSON.parse(localStorage.getItem('token')) || false
// console.log(tokenLocal)
// const token = !!tokenLocal.token || false



const initialState = {
    globalTheme: 'white',
    isAuth: false,
    profile: null,
    email: null,
    userId: null,
    userName: null,
    avatar: null,
    theme: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.auth }

        case SET_PROFILE:
            return { ...state, ...action.profile }

        case LOGOUT:
            return { ...state, isAuth: false, userId: null, email: null, userName: null }

        case SAVE_PHOTO:
            return { ...state, avatar: action.avatar }

        case CHANGE_THEME:
            return { ...state, theme: action.theme }

        case CHANGE_THEME_GLOBAL:
            return { ...state, globalTheme: action.themeDataGlobal }

        default:
            return { ...state }
    }
}



const changeThemeGlobal = (themeDataGlobal) => ({ type: CHANGE_THEME_GLOBAL, themeDataGlobal })
export const setAuth = (auth) => ({ type: SET_AUTH, auth })
export const logOut = () => ({ type: LOGOUT })
export const setProfile = (userName, email, userId, isAuth, avatar, theme) => ({ type: SET_PROFILE, profile: { userName, email, userId, isAuth, avatar, theme } })
export const savePhotoSuccess = (avatar) => ({ type: SAVE_PHOTO, avatar })
export const changeTheme = (theme) => ({ type: CHANGE_THEME, theme })


export const getThemeGlobalThunk = (themeUser) => (dispatch) => {
    
    theme.getThemeProject().then(data => {
        dispatch(changeThemeGlobal(data.data))
    })
}


export const changeThemeGlobalThunk = (themeUser) => (dispatch) => {
    theme.changeThemeProject(themeUser).then(data => {
        dispatch(changeThemeGlobal(data.data.theme))
    })
}

export const changeThemeThunk = (themeUser) => (dispatch) => {
    theme.changeThemeUser(themeUser).then(data => {
        dispatch(changeTheme(data.data.theme))
    })
}



export const authProfile = (isAuth) => (dispatch) => {
    auth.authUser().then(data => {
        if (data.resultCode === 200) {
            dispatch(setProfile(data.userName, data.userEmail, data.userId, true, data.avatar, data.theme))
        } else {
            localStorage.removeItem('token')
        }
    }).catch(e => {
        localStorage.removeItem('token')
    })
}


export const login = (email, password) => (dispatch) => {
    auth.login(email, password).then(data => {

        localStorage.setItem('token', JSON.stringify({
            token: data.token
        }))
        dispatch(setProfile(data.userName, data.userEmail, data.userId, true))
        dispatch(setAuth(!!data.token))
    }).then(data => window.location.reload()).catch(e => {
        e.preventDefault()
        dispatch(stopSubmit('login', { _error: 'Вы ввели некоректные данные' }))
    })
}


export const savePhoto = (file) => (dispatch, getState) => {

    // dispatch(savePhotoSuccess('8a79a0dd-6546-4001-9e64-881ccc84c0a0.jpg'))

    addPhoto.addPhoto(file).then(data => {

        dispatch(savePhotoSuccess(data.data))

    })
}

export default authReducer