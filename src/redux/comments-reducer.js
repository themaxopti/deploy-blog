import { Redirect } from "react-router-dom"
import { stopSubmit } from "redux-form"
import { comments } from "../api/api"

const SET_COMMENTS_POST = 'comments-reducer/SET_COMMENTS_POST'
const ADD_COMMENT = 'comments-reducer/ADD_COMMENT'

const initialState = {
    comments: {
        Comments: []
    },
    test:null

}


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COMMENTS_POST:
            return { ...state, comments: action.comments }

        case ADD_COMMENT:
            return { ...state, comments:{Comments:[...state.comments.Comments,action.comment]},test:action.comment }


        default:
            return { ...state }
    }
}

const getCommentsPost = (comments) => ({ type: SET_COMMENTS_POST, comments })
const addPostComment = (comment) => ({ type: ADD_COMMENT, comment })

export const getCommentsPostThunk = (postId) => (dispatch) => {
    comments.showPostComments(postId).then(data => {
        dispatch(getCommentsPost(data))
    })
}

export const addComent = (text, postId) => (dispatch) => {
    comments.addComment(text, postId).then(data => {
        dispatch(addPostComment(data))
        // alert(data)
    })
}

export default commentsReducer