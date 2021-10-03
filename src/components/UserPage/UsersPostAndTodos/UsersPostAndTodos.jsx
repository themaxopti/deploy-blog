import CssOptimisedHoc from "../../../hoc/CssOptimisedHoc"
import { UsersPostAndTodosContainer } from "../StyledUserPage"
import s from '../UserPage.module.css'
import { Post } from "../../AllPosts/PostsAndUsers/Posts/Post"
import { UsersDiv } from "../../AllPosts/PostsAndUsers/StyledPostsAndTodos"
import { Todo } from "../../AllTodos/Todo/Todo"
import { useRef, useState } from "react"
import React from 'react'
import { useEffect } from "react"
import classNames from "classnames"



const UsersPostAndTodos = (props) => {

    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? `${s.themeColor}` : ''}`


    const [inputValue, setInputValue] = useState(null)
    const [textAreaValue, setTextAreaValue] = useState(null)
    const [inputValueTodo, setInputValueTodo] = useState(null)
    const [isAddPost, setIsAddPost] = useState(false)
    const [isAddTodo, setIsAddTodo] = useState(false)
    const [render, setRender] = useState(false)
    const [renderTodo, setRenderTodo] = useState(false)
    const [goRender, setGoRender] = useState(false)
    const inputRef = useRef()

    useEffect(async () => {
        await props.getAllPostsUser(props.match.params.userId)
        await setGoRender(!goRender)
    }, [render])


    useEffect(async () => {
        await props.getTodosUserThunk(props.match.params.userId)
        await setGoRender(!goRender)
    }, [renderTodo])

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
        // inputRef.autofocus = true
    }

    // document.querySelector('.tr').autoFocus = true

    async function onSubmit(e) {
        e.preventDefault()
        await props.addPostUser(inputValue, textAreaValue, props.userName, props.userId)
        await props.getAllPostsUser(props.userId)
        await setRender(!render)
        setInputValue('')
        setTextAreaValue('')
        // alert(textAreaValue)
    }


    async function onSubmitTodo(e) {

        e.preventDefault()
        await props.addTodoThunk(inputValueTodo, props.userName, props.userId)
        await props.getTodosUserThunk(props.userId)
        await setRenderTodo(!renderTodo)
        setInputValueTodo('')
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


                    <div
                        style={{ marginRight: '30px' }}
                        onClick={() => { setIsAddPost(true) }}
                        data-hide="hiw"
                        className={classNames(isTheme, s.addButton)}
                    >
                        {props.languageObj.profilePageText.posts.addPost}
                    </div>



                    <form onSubmit={onSubmit}
                        data-hide="hiw"
                        className={s.add_post_form}
                        style={{ display: `${isAddPost ? 'flex' : 'none'}` }}
                    >


                        <input
                            type="text"
                            className={s.textareaComment}
                            data-hide="hiw" autoFocus={true}
                            ref={inputRef}
                            onChange={e => { setInputValue(e.target.value) }} value={inputValue}
                        />

                        <textarea name=""
                            className={s.textareaComment}
                            data-hide="hiw"
                            onChange={(e) => { setTextAreaValue(e.target.value) }}
                            value={textAreaValue} id="" cols="30" rows="10"></textarea>
                        <button className={s.addButton}>{props.languageObj.profilePageText.posts.addPost}</button>

                    </form>

                    <div className={s.all_todos}>

                        <span className={isTheme}>   {props.languageObj.profilePageText.todos.allTodos} </span>

                        <form   
                            className={s.addPostFormUser}
                            onSubmit={onSubmitTodo}
                            data-hide="hi"
                            style={{
                                zIndex: '10', position: 'absolute', zIndex: '600', display: `${isAddTodo ? 'block' : 'none'}`
                            }}
                            onBlur={addPostFormShow}  >

                            <input
                                className={s.textareaComment}
                                type="text"
                                data-hide="hi"
                                onChange={(e) => { setInputValueTodo(e.target.value) }}
                                value={inputValueTodo} />

                            <button className={s.addButton}>
                                {props.languageObj.profilePageText.todos.addTodo}
                            </button>
                        </form>

                        <div>
                            {props.todosUser.map(el => {
                                return <Todo
                                    languageObj={props.languageObj}
                                    todo={el.todo}
                                    idTodo={el._id}
                                    done={el.done}
                                    userName={el.userName}
                                    postId={el.owner}
                                />
                            })}
                        </div>

                    </div>
                    <div data-hide="hi" className={classNames(isTheme, s.addButton)} >
                        {props.languageObj.profilePageText.todos.addTodo}
                    </div>
                </div>

            </UsersPostAndTodosContainer>
        </>
    )
}

export default CssOptimisedHoc(UsersPostAndTodos, '200px')