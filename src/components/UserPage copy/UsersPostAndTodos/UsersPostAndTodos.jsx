import CssOptimisedHoc from "../../../hoc/CssOptimisedHoc"
import { UsersPostAndTodosContainer } from "../StyledUserPage"
import s from '../UserPage.module.css'
import { Post } from "../../AllPosts/PostsAndUsers/Posts/Post"
import { UsersDiv } from "../../AllPosts/PostsAndUsers/StyledPostsAndTodos"
import { Todo } from "../../AllTodos/Todo/Todo"
import { useRef, useState } from "react"
import React from 'react'



const UsersPostAndTodos = (props) => {
    const [inputValue, setInputValue] = useState(null)
    const [textAreaValue, setTextAreaValue] = useState(null)
    const [inputValueTodo, setInputValueTodo] = useState(null)
    const [isAddPost, setIsAddPost] = useState(false)
    const [isAddTodo, setIsAddTodo] = useState(false)
    const [render, setRender] = useState(false)

    const inputRef = useRef()
    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' ? `${s.themeColor}` : ''}`

    window.onclick = function (e) {
        if (e.target.dataset.hide === 'hiw') {
            setIsAddPost(true)
        } else {
            setIsAddPost(false)
        }


        if (e.target.dataset.hide === 'hi') {
            setIsAddTodo(true)
        } else {
            setIsAddTodo(false)
        }
    }

    function addPostFormShow() {
        setIsAddPost(false)
    }


    function onSubmit(e) {
        e.preventDefault()
        props.addPostUser(inputValue, textAreaValue, props.userName, props.userId)
        props.getAllPostsUser(props.userId)
        // alert(textAreaValue)
    }

    function onSubmitTodo(e) {
        e.preventDefault()
        props.addTodoThunk(inputValueTodo, props.userName, props.userId)
        // alert(textAreaValue)
    }

    return (
        <>
            <UsersPostAndTodosContainer data-hide="hiw">
                <div className={s.all_posts_and_todos_main}>
                    <div className={s.all_posts}>

                        <span data-hide="hiw" className={isTheme} >
                            {props.languageObj.profilePageText.posts.allPosts}
                        </span>

                        <div>
                            {props.posts.map(el => {
                                return <Post
                                    languageObj={props.languageObj}
                                    titlePost={el.title}
                                    idPost={el._id}
                                    postId={el.owner}
                                    desc={el.desc}
                                    userName={el.userName}
                                />
                            })}
                        </div>
                    </div>


                    <div className={s.all_todos}>
                        <span className={isTheme}> {props.languageObj.profilePageText.todos.allTodos} </span>

                        <div>
                            {props.todosUser.map(el => {
                                return <Todo
                                    languageObj={props.languageObj}
                                    todo={el.todo}
                                    idTodo={el._id}
                                    userName={el.userName}
                                    postId={el.owner}
                                    done={el.done}
                                />
                            })}
                        </div>
                    </div>
                </div>

            </UsersPostAndTodosContainer>
        </>
    )
}

export default CssOptimisedHoc(UsersPostAndTodos, '200px')