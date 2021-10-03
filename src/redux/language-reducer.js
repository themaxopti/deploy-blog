import React from 'react'
import { languages } from '../api/api'

const CHANGE_LANGUAGE = 'language-reducer/CHANGE_LANGUAGE'
const CHANGE_LANGUAGE_PROJECT = 'language-reducer/CHANGE_LANGUAGE_PROJECT'

const languageId = "61462a5356d3bf20756d3c1a"

const initialState = {
    language: 'en',
    languageObj: null
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_LANGUAGE:
            return { ...state, languageObj: action.language }

        case CHANGE_LANGUAGE_PROJECT:
            return { ...state, language: action.languageProject }

        default:
            return { ...state }
    }
}

export const changeLanguage = (language) => ({ type: CHANGE_LANGUAGE, language })
export const changeLanguageProject = (languageProject) => ({ type: CHANGE_LANGUAGE_PROJECT, languageProject })

export const changeLanguageProjectThunk = (language) => (dispatch) => {
    languages.changeLanguageProject(language, languageId).then(data => {
        dispatch(changeLanguageProject(data.data.language))
    })
}


export const getLanguageProjectThunk = () => (dispatch, getState) => {
    languages.getLanguageProject(languageId).then(data => {
        dispatch(changeLanguageProject(data.data, languageId))
        return window.history.pushState('', 'New Page Title', '#' + data.data)
    })
}

export const changeLanguageThunk = (language = 'en') => (dispatch) => {
    if(language === ''){
        language = 'en'
    }

    return languages.changeLanguage(language).then(data => {
        dispatch(changeLanguage(data.data))
    })
}

export default languageReducer