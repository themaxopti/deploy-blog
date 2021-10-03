import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { SpeccificPostContainer } from "./StyledTodoPage"
import s from './SpeccificTodo.module.css'
import classNames from "classnames"
import todoImg from '../../assets/icons/tick.svg'
import { useEffect, useState } from "react"


const SpeccificTodo = (props) => {
    const done = props.todoUser.done
    const [todo, setTodo] = useState(done)

    console.log('Локальная ' + props.theme + ' Глобальная ' + props.globalTheme)

    useEffect(async () => {
        await props.doneTodo(props.match.params.todoId, todo)
        await props.showTodoThunk(props.match.params.todoId)
    }, [todo])

    const styledTheme = `${props.theme == 'dark' || props.globalTheme === 'black' && !props.isAuth ? 'white' : 'black'}`

    // `${props.theme == 'dark' || props.globalTheme === 'black' && !props.isAuth ? 'white' : 'black'}`

    props.changeHeader(false)
    return (
        <>
            <SpeccificPostContainer>
                <div className={s.container}>
                    <div className={classNames(s.post_title, s.stlyled)}>
                        {props.languageObj.todoPageText.todoTitle}
                        :<div className={todo ? s.divAnimation : ''}>
                            <span className={todo ? s.styledText : ''} style={{ color: styledTheme }}>
                                {props.todoUser.todo}
                            </span>
                        </div>
                    </div>
                    <div className={classNames(s.user_name, s.stlyled)}>{props.languageObj.todoPageText.userName}<span style={{ color: styledTheme }}>{props.todoUser.userName}</span> </div>
                    <div onClick={e => props.todoUser.userId != props.userId ? '' : setTodo(!todo)} className={classNames(s.post_doneTodo, s.stlyled)}> {todo ? <img src={todoImg} alt="" /> : <></>} </div>
                </div>
            </SpeccificPostContainer>
        </>
    )
}


export default CssOptimisedHoc(SpeccificTodo, '100px')