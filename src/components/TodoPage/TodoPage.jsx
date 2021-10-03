import { connect } from "react-redux"
import { changeTheme, changeHeader } from "../../redux/header-section-reduser"
import HeaderContainer from "../../assets/components-assets/Header/HeaderContainer"
import SpeccificTodo from "./SpeccificTodo"
import { compose } from "redux"
import { withRouter } from "react-router"
import { useEffect, useState } from "react"
import { showTodoThunk,doneTodo } from "../../redux/all-todos-reducer"
import { authProfile } from "../../redux/auth-reducer"
import LanguageHoc from "../../hoc/LanguageHoc"
import { getLanguageProjectThunk,changeLanguageThunk } from "../../redux/language-reducer"
import ProgressiveBar from "../../assets/components-assets/ProgressiveBar/ProgressiveBar"


const TodoPage = (props) => {
    const [initializided, setInitializided] = useState(false)

    let hash = window.location.hash
    hash = hash.substr(1)

    useEffect(async () => {
        try {
            await props.getLanguageProjectThunk()
            await props.changeLanguageThunk(hash)
            await props.authProfile()
            await props.showTodoThunk(props.match.params.todoId)
            await setInitializided(true)
        } catch (e) {

        }
    }, [])
    // alert(props.match.params.todoId)
     if (initializided) {
        return (
            <>
                <HeaderContainer {...props} />
                <SpeccificTodo {...props} />
            </>
        )
    }else{
        return <ProgressiveBar />
    }
    // return (
    //     <>
    //         <HeaderContainer {...props} />
    //         <SpeccificTodo {...props} />
    //     </>
    // )

}



const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        todoUser: state.todos.todoUser,
        isInitialisedTodoPage: state.todos.isInitialisedTodoPage,
        userId:state.auth.userId,
        languageObj:state.language.languageObj,
        theme:state.auth.theme,
        globalTheme:state.auth.globalTheme
    })
}


export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { changeLanguageThunk,getLanguageProjectThunk,doneTodo,authProfile,showTodoThunk, changeTheme, changeHeader })
)(TodoPage)


// export default connect(mapStateToProps, { changeTheme, changeHeader })(TodoPage)