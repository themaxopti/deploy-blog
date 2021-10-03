import axios from 'axios'
import config from '../config.json'

const numb = 1

const url = 'https://distracted-noyce-0c68d2.netlify.app/api'

// it is my life11

const token = JSON.parse(localStorage.getItem('token') || false)



function getBody(method, headers = {}, body = {}) {
    return {
        method,
        headers,
        body: JSON.stringify(body)
    }
}

const apiBody = {
    getLoginBody(email, password) {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ email, password })
        }
    },
    getAuthBody() {

        // const token = !!isToken ? JSON.parse(localStorage.getItem('token')) : JSON.parse('asdasd')

        return {
            headers: { Authorization: `Bearer ${token.token || 'adasd'}` }
        }
    },
    getAddPostBody(title, body) {
        return {
            method: 'POST', // или 'PUT'
            body: JSON.stringify({
                title,
                desc: body
            }), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.token || 'adasd'}`
            }
        }
    },
    getAddTodoBody(todo) {
        return {
            method: 'POST', // или 'PUT'
            body: JSON.stringify({
                todo
            }), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.token || 'adasd'}`
            }
        }
    },
    addPostBody(text, postId) {
        return {
            method: 'POST', // или 'PUT'
            body: JSON.stringify({
                text, postId
            }), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.token || 'adasd'}`
            }
        }
    },
    doneTodoBody(todoId, doneTodo) {
        return getBody('PATCH', {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.token || 'adasd'}`
        }, { todoId, doneTodo })
    }
}

export const apiUsers = {
    getUsers(pageNumber) {
        return fetch(`${url}/users/${pageNumber}`).then(res => res.json())
    },
    getUser(userId) {
        return fetch(`${url}/user/currentUser/${userId}`).then(res => res.json())
    },
    getProfile(profileId) {
        return fetch(`1`).then(res => res.json())
    }
}



export const apiPosts = {
    getPostsUsers(userId) {
        // return fetch(`${url}/posts?userId=${userId}`).then(res => res.json())
    }
}



export const apiTodos = {
    getTodosUsers(userId) {
        return fetch(`${url}/todos/${userId}`).then(res => res.json())
    },
    addTodo(title) {
        return fetch(`${url}/todos`, apiBody.getAddTodoBody(title)).then(res => res.json())
    },
    showTodo(todoId) {
        return fetch(`${url}/todos/oneTodo/${todoId}`).then(res => res.json())
    },
    getAllTodos() {
        return fetch(`${url}/alltodo`).then(res => res.json())
    },
    getAllTodosPagination(page) {
        return fetch(`${url}/allTodos/${page}`).then(res => res.json())
    },
    doneTodo(todoId, doneTodo) {
        return fetch(`${url}/todos/doneTodo`, apiBody.doneTodoBody(todoId, doneTodo)).then(res => res.json())
    }
}



export const auth = {
    login(email, password) {
        return fetch(`${url}/auth/login`, apiBody.getLoginBody(email, password)).then(res => res.json())
    },
    authUser() {
        return fetch(`${url}/auth/authUser`, apiBody.getAuthBody()).then(res => res.json())
    }
}




export const posts = {
    addPost(title, body) {
        return fetch(`${url}/posts`, apiBody.getAddPostBody(title, body)).then(res => res.json())
    },
    getPosts(userId) {
        return fetch(`${url}/posts/${userId}`).then(res => res.json())
    },
    showPost(postId) {
        return fetch(`${url}/posts/onePost/${postId}`).then(res => res.json())
    },
    getAllPosts() {
        return fetch(`${url}/allpost`).then(res => res.json())
    },
    getAllPostsForPagination(postId) {
        return fetch(`${url}/allPosts/${postId}`).then(res => res.json())
    }
}

export const comments = {
    addComment(text, postId) {
        return fetch(`${url}/coments/addcomment`, apiBody.addPostBody(text, postId)).then(res => res.json())
    },
    showPostComments(postId) {
        return fetch(`${url}/coments/${postId}`).then(res => res.json())
    }
}


export const addPhoto = {
    addPhoto(photoFile) {
        const formData = new FormData()
        formData.append('avatar', photoFile)

        // return fetch(`${url}/files/avatar`,{
        //     method:'POST',
        //     body:JSON.stringify(formData),
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         Authorization: `Bearer ${token.token || 'adasd'}`
        //     }
        // })

        return axios.post(`${url}/files/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token || 'adasd'}`
            }

        })
    }
}


export const languages = {
    changeLanguage(lang) {
        return axios.get(`${url}/language/${lang}`)
    },
    changeLanguageProject(lang, id) {
        return axios.patch(`${url}/language/set/${lang}/${id}`)
    },
    getLanguageProject(id) {
        return axios.get(`${url}/language/get/${id}`)
    }
}



export const theme = {
    getThemeProject() {
        return axios.get(`${url}/getProjectTheme`)
    },
    changeThemeProject(theme) {
        return axios.patch(`${url}/newThemeProject`, { theme })
    },
    changeThemeUser(theme) {
        return axios.patch(`${url}/changeThemeUser`, { theme }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.token || 'adasd'}`
            }
        })
    }
}


export const messagesApi = {
    getMessages() {
        return axios.get(`${url}/messages`)
    },
    addMessage(message = {}) {
        return axios.post(`${url}/messages`, message)
    }
}


export const findApi = {
    getFinds(find) {
        return axios.post(`${url}/find`, { find },{headers:{
            'Content-Type': 'application/json'
        }})
    }
}