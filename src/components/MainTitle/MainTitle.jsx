import React, { useState } from 'react'
import { useRef } from 'react'
import { connect } from 'react-redux'
import FakeHeaderContainer from '../../assets/components-assets/Header/FakeHeader/FakeHeaderContainer'
import HeaderContainer from '../../assets/components-assets/Header/HeaderContainer'
import Pages from './Pages/Pages'
import MostActivityUsers from './MostActivityUsers/MostActivityUsers'
import BestPeopleToDos from './BestPeopleToDos/BestPeopleToDos'
import PageBlog from './PageBlog/PageBlog'
import { changeHeader } from '../../redux/header-section-reduser'
import { useEffect } from 'react'
import { authProfile } from '../../redux/auth-reducer'
import LanguageHoc from '../../hoc/LanguageHoc'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { changeLanguageThunk, getLanguageProjectThunk } from '../../redux/language-reducer'
import ProgressiveBar from '../../assets/components-assets/ProgressiveBar/ProgressiveBar'
import { getUsers } from '../../redux/users-page-reguser'
import { getAllTodosPaginationThunk } from '../../redux/all-todos-reducer'

const MainTitle = (props) => {

    const [initial, setInitial] = useState(false)
    let hash = window.location.hash
    hash = hash.substr(1)

    

    useEffect(async () => {
        await props.authProfile()
        await props.getLanguageProjectThunk()
        await props.changeLanguageThunk(hash).catch(e => window.location.reload())
        await props.getUsers()
        await props.getAllTodosPaginationThunk(14)

        props.changeHeader(true)
        setInitial(true)
    }, [])



    if(!initial || !props.languageObj){
        return <ProgressiveBar  />
    }if(initial && props.languageObj){
        return (
            <>
                <FakeHeaderContainer {...props} languageObj={props.languageObj} />
                <HeaderContainer />
                <Pages languageObj={props.languageObj} />
                <MostActivityUsers users={props.users} languageObj={props.languageObj} />
                <BestPeopleToDos todosPagination={props.todosPagination} languageObj={props.languageObj} />
                <PageBlog languageObj={props.languageObj} />
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader,
        language: state.language.language,
        languageObj:state.language.languageObj,
        isAuth:state.auth.isAuth,
        users:state.users.users,
        todosPagination:state.todos.todosPagination
    })
}



export default compose(
    LanguageHoc,
    withRouter,
    connect(mapStateToProps, { getAllTodosPaginationThunk,getUsers,authProfile, changeHeader, changeLanguageThunk, getLanguageProjectThunk })
)(MainTitle)


// export default connect(mapStateToProps, {authProfile ,changeHeader })(MainTitle)
