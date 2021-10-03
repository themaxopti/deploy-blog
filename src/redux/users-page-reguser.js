import React from 'react'
import { apiUsers } from '../api/api'

const SET_USERS = 'users/SET_USERS'
const GET_PROFILE = 'users/GET_PROFILE'

const initialState = {
    users: null,
    profile: null
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users }
        case GET_PROFILE:
            return { ...state, profile: action.profile }

        default:
            return { ...state }
    }
}

// action creators

const setUsers = (users) => ({ type: SET_USERS, users })
const getProfile = (profile) => ({ type: GET_PROFILE, profile })


// thunk creators


export const getUsers = (pageNumber = 0) => (dispatch) => {
    return apiUsers.getUsers(pageNumber).then(data => {
        dispatch(setUsers(data))
    })
}

export const getProfileUser = (profileId) => (dispatch) => {
    return apiUsers.getUser(profileId).then(data => {
        dispatch(getProfile(data))
    })
}

export default userPageReducer