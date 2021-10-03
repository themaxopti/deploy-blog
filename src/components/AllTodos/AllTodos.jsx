import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import HeaderContainer from '../../assets/components-assets/Header/HeaderContainer'
import { changeTheme, changeHeader } from "../../redux/header-section-reduser"
import { connect } from "react-redux"
import AllTodosTitle from "./AllTodosTitle/AllTodosTitle"
import { useEffect } from "react"
import TodosAndUsers from "./TodosAndUsers/TodosAndUsers"
import { getAllTodosThunk, getAllTodosPaginationThunk } from "../../redux/all-todos-reducer"
import { useState } from "react"
import { getUsers } from "../../redux/users-page-reguser"
import { compose } from "redux"
import { withRouter } from "react-router"
import LanguageHoc from "../../hoc/LanguageHoc"
import { changeLanguageThunk, getLanguageProjectThunk } from "../../redux/language-reducer"
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"



const AllToDos = (props) => {
    let hash = window.location.hash
    hash = hash.substr(1)


    const [initialised, setInitialised] = useState(false)


    // props.changeHeader(false)

    useEffect(async () => {
        await props.getUsers(5)

        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash)
        // await props.getAllTodosThunk()
        await props.getAllTodosPaginationThunk(1)
        await props.getUsers(5)
        await setInitialised(true)
    }, [])

    props.changeHeader(false)


    if (initialised && props.languageObj) {
        return (
            <>
                <HeaderContainer {...props} />
                <AllTodosTitle {...props} />
                <TodosAndUsers {...props} />
            </>
        )
    } else {
        return < ProgressiveBar />
    }

}

const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        todosPagination: state.todos.todosPagination,
        todos: state.todos.todos,
        users: state.users.users,
        languageObj: state.language.languageObj,
        theme: state.auth.theme,
        globalTheme: state.auth.globalTheme,
        isAuth: state.auth.isAuth,
        allTodosCount:state.todos.allTodosCount
    })
}


export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { getLanguageProjectThunk, changeLanguageThunk, getUsers, getAllTodosPaginationThunk, getAllTodosThunk, changeTheme, changeHeader }),
)(AllToDos)

