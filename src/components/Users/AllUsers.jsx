import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { Container } from "../MainTitle/MostActivityUsers/StyledMostActivityUsers"
import { AllUsersContainer } from "./StyledAllUsers"
import User from "../AllPosts/PostsAndUsers/Users/User"
import s from './Users.module.css'
import { useState } from "react"
import Preloader from "../../assets/components-assets/Preloader/Preloader"
import { useEffect } from "react"


const AllUsers = (props) => {

    const [initialPageLimit, setInitialPageLimit] = useState(6)
    const [isPreloader, setIsPreloader] = useState(false)

    // useEffect(() => {
    //     setIsPreloader(true)
    // },[initialPageLimit])

    return (
        <AllUsersContainer>
            <div className={s.users_container}>
                {/* <User username="sdadas" description="asdasd" /> */}
                {props.users.map(el => <User
                    key={el._id}
                    isAuth={props.isAuth}
                    theme={props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'black' : 'white'}
                    avatar={el.avatar}
                    linkUser={el._id}
                    margin={'margin'}
                    username={el.userName}
                    description={el.email} />)}
            </div>

            {isPreloader && <Preloader />}

            <div onClick={async () => {
                setIsPreloader(true)
                setInitialPageLimit(prev => prev + 2)

                await props.getUsers(initialPageLimit)
                setIsPreloader(false)
            }} className={s.show_more}>
                {props.languageObj.usersPageText.showMore}
            </div>
        </AllUsersContainer>
    )
}

export default CssOptimisedHoc(AllUsers, '0px')