import { apiPosts, posts } from "../api/api"



const GET_PROFILE = 'allPosts/GET_PROFILE'
const ADD_POST = 'allTodos/ADD_POST'
const GET_POSTS = 'allTodos/GET_POSTS'
const GET_ALL_POSTS = 'allTodos/GET_ALL_POSTS'
const SHOW_POST = 'allTodos/SHOW_POST'
const GET_ALL_POSTS_PAGINATION = 'allTodos/GET_ALL_POSTS_PAGINATION'




const initialState = {
    posts: [
        { title: 'hello world', body: 'jack' }
    ],
    allPosts: [],
    postsUser: [],
    post: null,
    currentPage:null,
    allPostsCount:null
}



const AllPostsReduser = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROFILE:
            return { ...state, postsUser: action.posts }

        case ADD_POST:
            return { ...state, posts: [...state.posts, { ...action.post }] }

        case GET_POSTS:
            return { ...state, posts: [...action.postsUser] }

        case GET_ALL_POSTS:
            return { ...state, allPosts: [...action.allPosts] }

        case GET_ALL_POSTS_PAGINATION:
            return { ...state, posts: [...action.post],currentPage:action.currentPage,allPostsCount:action.allPostsCount }


        case SHOW_POST:
            return { ...state, post: { ...action.post } }

        default:
            return { ...state }

    }
}



const getPostsUser = (posts) => ({ type: GET_PROFILE, posts })
export const addPost = (title, body, userName, userId) => ({ type: ADD_POST, post: { title, body, userName, userId } })
const getPostsUsers = (posts) => ({ type: GET_POSTS, postsUser: posts })
const getAllPosts = (allPosts) => ({ type: GET_ALL_POSTS, allPosts })
const showPostsUsers = (post) => ({ type: SHOW_POST, post: post })
const showPostsPagination = (post,currentPage,allPostsCount) => ({ type: GET_ALL_POSTS_PAGINATION, post: post,currentPage,allPostsCount })


export const getAllPostsThunk = () => (dispatch) => {
    return posts.getAllPosts().then(data => {
        return dispatch(getAllPosts(data))
    })
}



export const getAllPostsPaginationThunk = (page) => (dispatch) => {
    return posts.getAllPostsForPagination(page).then(data => {
        return dispatch(showPostsPagination(data.candidate,data.currentPage,data.allPostsCount))
    })
}




export const showPostsUserThunk = (postId) => (dispatch) => {
    return posts.showPost(postId).then(data => {
        return dispatch(showPostsUsers(data))
    })
}


export const getAllPostsUser = (userId) => (dispatch) => {
    return posts.getPosts(userId).then(data => {
        return dispatch(getPostsUsers(data))
    })
}


export const addPostUser = (title, body, userName, userId) => (dispatch) => {
    return posts.addPost(title, body).then(data => {
        // return dispatch(addPost(title, body, userName, userId))
    })
}




export const getPostsUserThunk = (userId) => (dispatch) => {
    return posts.addPost(userId).then(data => {
        return dispatch(addPost(data))
    })
}

export default AllPostsReduser