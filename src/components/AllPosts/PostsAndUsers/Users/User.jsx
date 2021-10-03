import s from '../PostsAndTodos.module.css'
import { StyledLinkHeader } from '../../../../assets/components-assets/Header/HeaderStyledComponents'
import userSvg from '../../../../assets/icons/user.svg'
import config from '../../../../config.json'

const User = (props) => {
    const URL = `${config.SERVER_URL}`    

    return (
        <StyledLinkHeader style={{maxWidth:'500px',width:'100%'}} to={`/users/currentUser/${props.linkUser}`}>
            <div style={{ marginTop: props.margin === 'margin' ? '20px' : '0px' }} className={s.user_card}>
                <div className={s.card_img}>
                    <img src={props.avatar ? URL + `${props.avatar}` : userSvg} alt="" />
                </div>
                <div className={s.card_title_and_description}>
                    <div className={s.title} style={{color:`${props.theme == 'black' ? 'white' : 'black'}`}}>{props.username}</div>
                    <div className={s.description} style={{color:`${props.theme == 'black' ? 'white' : 'black'}`}} > {props.description}</div>
                </div>
            </div>
        </StyledLinkHeader>
    )
}

export default User