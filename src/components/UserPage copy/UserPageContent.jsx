import { UserPageContentContainer } from "./StyledUserPage"
import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { UserPageRectangle } from "./StyledUserPage"
import s from './UserPage.module.css'
import houseSvg from '../../assets/icons/Vector.svg'
import { useEffect } from "react"
import { Redirect } from "react-router"
import userSvg from '../../assets/icons/user.svg'
import config from '../../config.json'


const UserPageContent = (props) => {
    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' ? `${s.themeColor}` : ''}`

    props.changeHeader(false)

    const URL = `${config.SERVER_URL}`


    const profileAv = props.profile.avatar

    return (
        <UserPageContentContainer>
            <div className={s.user_information_div}>
                <div className={s.div_user_photo}>
                    <div className={s.photo_sircle}>
                        <img src={profileAv ? URL + `${profileAv}` : userSvg} alt="" />
                    </div>
                </div>
                <div className={s.some_information_div}>
                    <div className={s.some_email}>
                        <div className={s.email_title}>{props.profile.email || 'null'}</div>
                        <div className={s.email}> {props.languageObj.profilePageText.email} </div>
                        <div className={s.user_name}> <span className={isTheme} > {props.profile.userName || 'null'}  </span> <div style={{ marginLeft: '50px' }}></div>  </div>
                    </div>
                    <div className={s.some_living}>
                        <div className={s.house_icon} ><img src={houseSvg} alt="" /></div>
                        <div className={s.place_text}> {props.languageObj.profilePageText.house} </div>
                    </div>
                </div>
            </div>
        </UserPageContentContainer>
    )
}

export default CssOptimisedHoc(UserPageContent, '100px', 'imageUser')