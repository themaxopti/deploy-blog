import { apiPosts, apiTodos } from "../api/api"




const GET_TODOS_USER = 'allTodos/GET_TODOS_USER'
const ADD_TODO_USER = 'allTodos/ADD_TODO_USER'
const SHOW_TODO_USER = 'allTodos/SHOW_TODO_USER'
const GET_ALL_TODOS = 'allTodos/GET_ALL_TODOS'
const GET_ALL_TODOS_PAGINATION = 'allTodos/GET_ALL_TODOS_PAGINATION'


const initialState = {
    todos: null,
    todosPagination:null,
    todosUser: [],
    todoUser: null,
    isInitialisedTodoPage: false,
    allTodosCount:null
}


const AllTodosReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_USER:
            return { ...state, todosUser: action.todos }

        case ADD_TODO_USER:
            return { ...state, todosUser: [...state.todosUser, action.newTodo] }

        case SHOW_TODO_USER:
            return { ...state, todoUser: { ...action.todoUser } }

        case GET_ALL_TODOS:
            return { ...state, todos: action.allTodos }

        case GET_ALL_TODOS_PAGINATION:
            return { ...state, todosPagination: action.allTodosPagination,allTodosCount:action.allTodosCount }


        default:
            return { ...state }
    }
}



const getTodosUser = (todos) => ({ type: GET_TODOS_USER, todos })
const addTodo = (todo, userName, userId) => ({ type: ADD_TODO_USER, newTodo: { todo, userName, userId } })
const showTodo = (todo, userName, userId, id,done) => ({ type: SHOW_TODO_USER, todoUser: { todo, userName, userId, id,done } })
const getAllTodos = (allTodos) => ({ type: GET_ALL_TODOS, allTodos })
const getAllTodosPagination = (allTodosPagination,allTodosCount) => ({ type: GET_ALL_TODOS_PAGINATION, allTodosPagination,allTodosCount })


export const getAllTodosPaginationThunk = (page) => (dispatch) => {
    return apiTodos.getAllTodosPagination(page).then(data => {
        return dispatch(getAllTodosPagination(data,data.allTodosCount))
    })
}


export const getAllTodosThunk = () => (dispatch) => {
    return apiTodos.getAllTodos().then(data => {
        return dispatch(getAllTodos(data))
    })
}

export const doneTodo = (todoId, doneTodo) => (dispatch) => {
    return apiTodos.doneTodo(todoId, doneTodo).then(data => {
        // return dispatch(getAllTodos(data))
    })
}

export const showTodoThunk = (todoId) => (dispatch) => {
    return apiTodos.showTodo(todoId).then(data => {
        return dispatch(showTodo(data.todo, data.userName, data.owner, data._id,data.done))
    })
}


export const addTodoThunk = (todo, userName, userId) => (dispatch) => {
    return apiTodos.addTodo(todo).then(data => {
        // return dispatch(addTodo(todo, userName, userId))
    })
}


export const getTodosUserThunk = (userId) => (dispatch) => {
    return apiTodos.getTodosUsers(userId).then(data => {
        return dispatch(getTodosUser(data))
    })
}


export default AllTodosReduser