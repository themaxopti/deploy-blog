import s from '../AllTodos.module.css'
import toDoImage from '../../../assets/images/markus-winkler-Q2J2qQsoYH8-unsplash 1.png'
import { Rectangle } from '../../MainTitle/Pages/StyledPages'
import { StyledLinkHeader } from '../../../assets/components-assets/Header/HeaderStyledComponents'
import todoImg from '../../../assets/icons/tick.svg'
import todoNonImg from '../../../assets/icons/crosscircleflat_106051.svg'

// crosscircleflat_106051.svg


export const Todo = (props) => {

    const todo = `${props.todo.length > 0 ? props.todo.substr(0,4) : ''}...`

    return (
        <StyledLinkHeader to={`/oneTodo/${props.idTodo}`}>
            <div className={s.todo_card}>
                <Rectangle style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className={s.todo_card_container}>
                        <div className={s.todo_title}>
                            {props.languageObj.todosPageText.todo.todo}:
                            {todo}
                        </div>
                        <div className={s.todo_name}>
                            {props.languageObj.todosPageText.todo.name}
                            {props.userName}
                        </div>
                    </div>
                    <div className={s.tickyDiv}>
                        <img src={props.done ? todoImg : todoNonImg} alt="" />
                    </div>
                </Rectangle>
                <img src={toDoImage} className="cardImg" alt="" />
            </div>
        </StyledLinkHeader>
    )
}