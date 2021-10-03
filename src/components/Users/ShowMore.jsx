import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { ShowMoreContainer } from "./StyledAllUsers"
import s from './Users.module.css'

const ShowMore = (props) => {
    return (
        <ShowMoreContainer>
            <div className={s.show_more}>
                Show more
            </div>
        </ShowMoreContainer>
    )
}

export default ShowMore