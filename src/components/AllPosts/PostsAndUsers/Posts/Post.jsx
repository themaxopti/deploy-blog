import React from 'react'
import PostPhoto from '../../../../assets/images/hayden-walker-ihiEd-_4TNY-unsplash 1.png'
import { PostCard, PostCardContent } from '../StyledPostsAndTodos'
import { Rectangle } from '../../../MainTitle/Pages/StyledPages'
import s from '../PostsAndTodos.module.css'
import moreImg from '../../../../assets/images/Rectangle 5.svg'
import { StyledLinkHeader } from '../../../../assets/components-assets/Header/HeaderStyledComponents'

export const Post = (props) => {


    const desc = `${props.desc.length > 0 ? props.desc.substr(0, 4) : ''}...`
    const title = `${props.titlePost.substr(0, 6)} ${props.titlePost.length < 6 ? '' : '...'}`

    return (
        <StyledLinkHeader style={{ color: 'white' }} to={`/postPage/${props.idPost}`}>
            <PostCard>
                <Rectangle style={{ borderRadius: '5px' }}>
                    <PostCardContent>
                        <div className={s.title_and_post}>
                            <div className={s.PostTitle} > {props.languageObj.profilePageText.posts.post.title}: {title}</div>
                            <div className={s.PostName} > {props.languageObj.profilePageText.posts.post.name}:  {props.userName} </div>
                        </div>
                        <div className={s.description_and_more}>
                            <div className={s.PostDescription} >  {props.languageObj.profilePageText.posts.post.desc}:  {desc}</div>
                        </div>
                    </PostCardContent>
                </Rectangle>
                <div className={s.PostMore}>
                    <img src={moreImg} alt="" />
                    <span>Show more</span>
                </div>

                <img src={PostPhoto} className="cardImg" alt="" />

            </PostCard>
        </StyledLinkHeader>
    )
}