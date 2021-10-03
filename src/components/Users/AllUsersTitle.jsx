import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { Container } from "../MainTitle/MostActivityUsers/StyledMostActivityUsers"
import { AllUsersTitleContainer } from "./StyledAllUsers"


export const AllUsersTitle = (props) => {
    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' ? `themeColor` : ''}`

    props.changeHeader(false)

    return (
        <AllUsersTitleContainer className={isTheme} > <span className={isTheme}>  {props.languageObj.usersPageText.users} </span> </AllUsersTitleContainer>
    )
}

export default CssOptimisedHoc(AllUsersTitle, '200px')