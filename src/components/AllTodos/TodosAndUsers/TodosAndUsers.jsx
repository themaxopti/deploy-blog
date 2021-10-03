import CssOptimisedHoc from "../../../hoc/CssOptimisedHoc"
import { ToDosAndUsersContainer } from "../StyledAllTodos"
import { ToDosAndUsersDiv, TodosDiv } from "../StyledAllTodos"
import { Todo } from "../Todo/Todo"
import { UsersDiv } from "../../AllPosts/PostsAndUsers/StyledPostsAndTodos"
import User from '../../AllPosts/PostsAndUsers/Users/User'
import Paginator from "../../../assets/Paginator/Paginator"


const TodosAndUsers = (props) => {

    return (
        <ToDosAndUsersContainer>
            <ToDosAndUsersDiv>
                <TodosDiv>
                    {props.todosPagination.candidate.map(el => <Todo
                        languageObj={props.languageObj}
                        idTodo={el._id}
                        userName={el.userName}
                        todo={el.todo}
                        done={el.done}
                    />
                    )}
                    {/* <Todo />
                    <Todo />
                    <Todo />
                    <Todo /> */}
                </TodosDiv>
                <UsersDiv>
                    {props.users.map(el => <User
                        linkUser={el._id}
                        username={el.userName}
                        description={el.email} />).reverse()}
                    {/* <User />
                    <User />
                    <User />
                    <User />
                    <User /> */}
                </UsersDiv>
            </ToDosAndUsersDiv>
            <Paginator
                isTodosPagination={true}
                stateCurrnetPage={props.todosPagination.currentPage}
                isPostsPagination={false}
                totalPosts={props.allTodosCount}
                getAllTodosPaginationThunk={props.getAllTodosPaginationThunk} />
        </ToDosAndUsersContainer>
    )
}

export default CssOptimisedHoc(TodosAndUsers, '100px')
