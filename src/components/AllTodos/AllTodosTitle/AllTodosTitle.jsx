import { useEffect } from "react"
import CssOptimisedHoc from "../../../hoc/CssOptimisedHoc"
import { AllToDosTitleContainer } from "../StyledAllTodos"
import s from '../AllTodos.module.css'

const AllToDosTitle = (props) => {
    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? `${s.themeColor}` : ''}`


    return (
        <AllToDosTitleContainer >
          <span className={isTheme}>  {props.languageObj.todosPageText.allTodos} </span>
        </AllToDosTitleContainer>
    )
}

export default CssOptimisedHoc(AllToDosTitle, '200px')