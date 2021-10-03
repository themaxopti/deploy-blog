import { combineReducers, applyMiddleware, compose } from "redux"
import { createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import headerSectionReduser from "./header-section-reduser"
import AllPostsReduser from "./AllPosts-reduser"
import { reducer as formReducer } from 'redux-form'
import userPageReducer from "./users-page-reguser"
import AllTodosReduser from "./all-todos-reducer"
import authReducer from "./auth-reducer"
import commentsReducer from "./comments-reducer"
import languageReducer from "./language-reducer"



const reducers = combineReducers({
    form: formReducer,
    headerSection: headerSectionReduser,
    posts: AllPostsReduser,
    users: userPageReducer,
    todos: AllTodosReduser,
    auth: authReducer,
    comments:commentsReducer,
    language:languageReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


// store.subscribe(() => {
//     console.log('Subscribe', store.getState());
// })

export default store