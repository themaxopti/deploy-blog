import React, { useState } from 'react'
import CssOptimisedHoc from '../../../hoc/CssOptimisedHoc'
import { PostsAndTodosContainer, PostsAndToDosDiv, PostsDiv, UsersDiv } from './StyledPostsAndTodos'
import { Post } from './Posts/Post'
import User from './Users/User'
import Paginator from '../../../assets/Paginator/Paginator'


const PostsAndUsers = (props) => {


    const totalPosts = props.allPostsCount



    return (
        <PostsAndTodosContainer>
            <PostsAndToDosDiv>
                <PostsDiv>
                    {props.posts.map(el => {
                        return <Post
                        key={el._id}
                            titlePost={el.title}
                            idPost={el._id}
                            postId={el.owner}
                            desc={el.desc}
                            userName={el.userName}
                            languageObj={props.languageObj} />

                    })}
                    
                </PostsDiv>
                <UsersDiv>
                    {
                        props.users.map(el => <User 
                            key={el._id}
                            linkUser={el._id}
                            username={el.userName}
                            description={el.email} />)
                    }
                    {/* <User />
                    <User />
                    <User />
                    <User />
                    <User /> */}
                </UsersDiv>
            </PostsAndToDosDiv>

            <Paginator isPostsPagination={true}
                isTodosPagination={false}
                stateCurrnetPage={props.stateCurrnetPage}
                totalPosts={totalPosts}
                getAllPostsPaginationThunk={props.getAllPostsPaginationThunk} />


        </PostsAndTodosContainer>
    )
}

export default CssOptimisedHoc(PostsAndUsers, '100px')
