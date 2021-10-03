import logo from './logo.svg'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import MainTitle from './components/MainTitle/MainTitle'
import AllPosts from './components/AllPosts/AllPosts'
import AllToDos from './components/AllTodos/AllTodos'
import Users from './components/Users/Users'
import UserPage from './components/UserPage/UserPage'
import AboutAuthor from './components/AboutAuthor/AboutAuthor'
import PostPage from './components/PostPage/PostPage'
import TodoPage from './components/TodoPage/TodoPage'
import ModalWindowHoc from './assets/components-assets/ModalWIndow/ModalWIndow'
import Test from './assets/components-assets/ModalWIndow/ModalWIndow'
import AuthComponent from './components/AuthComponent/AuthComponent'
import UserPageCopy from './components/UserPage copy/UserPageCopy'
import { connect } from 'react-redux'
import { changeLanguageThunk, getLanguageProjectThunk } from './redux/language-reducer'
import { useEffect, useState } from 'react'

function App(props) {

  

  return (
    <>
      <AuthComponent />
      <Switch>
        <Route exact path="/"
          render={() => <MainTitle />} />

        <Route exact path="/todos"
          render={() => <AllToDos />} />

        <Route exact path="/users"
          render={() => <Users />} />

        <Route exact path="/posts"
          render={() => <AllPosts />} />

        <Route exact path="/users/:userId"
          render={() => <UserPage />} />

        <Route exact path="/users/currentUser/:userId"
          render={() => <UserPageCopy />} />

        {/* <Route exact path="/profile/:userId"
          render={() => <UserPage />} /> */}

        <Route exact path="/profile"
          render={() => <UserPage />} />

        <Route exact path="/postPage/:postId?"
          render={() => <PostPage />} />

        <Route exact path="/oneTodo/:todoId?"
          render={() => <TodoPage />} />

        <Route exact path="/aboutAuthor"
          render={() => <AboutAuthor />} />

        <Route path="*"
          render={() => <div>404 not found</div>} />
      </Switch>
    </>
  )
}



export default App
