import React from 'react'
import styled from 'styled-components'
import { Section } from '../../../assets/components-assets/Header/HeaderStyledComponents'
import { Div, Container, Content, PagesContainer } from '../MostActivityUsers/StyledMostActivityUsers'
import { Rectangle } from '../Pages/StyledPages'
import toDoImage from '../../../assets/images/glenn-carstens-peters-RLw-UC03Gwc-unsplash 1.png'
import SliderPhoto from '../../../assets/images/toa-heftiba-6bKpHAun4d8-unsplash 1.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserSlider, UserSliderImage, UserSliderUser } from '../MostActivityUsers/StyledMostActivityUsers'
import { ContainerTodo, BestPeopleToTosSpan, ToDoSpan } from './StyledBestPeopleToDos'
import CssOptimisedHoc from '../../../hoc/CssOptimisedHoc'
import config from '../../../config.json'
import userSvg from '../../../assets/icons/user.svg'
import { StyledLinkHeader } from '../../../assets/components-assets/Header/HeaderStyledComponents'

const TodoCardForSlider = (props) => {
    const todo = `${props.todo.length > 0 ? props.todo.substr(0, 9) : ''}${props.todo.length <= 9 ? '' : '...'}`

    return (
        <div style={{ marginLeft: '400px', maxWidth: '400px' }}>
            <StyledLinkHeader to={`/oneTodo/${props._id}`}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <ToDoSpan>{todo}</ToDoSpan>
                    <UserSlider>

                        <UserSliderImage>
                            <img style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                                src={props.avatar ? config.SERVER_URL + '/' + props.avatar : userSvg} alt="" />
                        </UserSliderImage>

                        <UserSliderUser style={{ marginTop: '20px', cursor: 'pointer' }}>{props.userName}</UserSliderUser>

                    </UserSlider>
                </div>
            </StyledLinkHeader>
        </div>
    )
}

const SliderToDos = (props) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div style={{ transform: 'translateY(60px)' }} >
            <Slider {...settings}>
                {
                    props.candidate.map(el => <TodoCardForSlider
                        key={el._id}
                        todo={el.todo}
                        userName={el.userName}
                        avatar={el.avatar}
                        _id={el._id} />)
                }
            </Slider>
        </div>
    )
}


const BestPeopleToDos = (props) => {
    const langObject = props.languageObj.mainTitleText

    return (
        <ContainerTodo>
            <Rectangle>
                <SliderToDos candidate={props.todosPagination.candidate} />
                <BestPeopleToTosSpan > {langObject.todoSlider} </BestPeopleToTosSpan>
            </Rectangle>
            <img src={toDoImage} className="cardImg" alt="" />
        </ContainerTodo>
    )
}

export default CssOptimisedHoc(BestPeopleToDos, '100px')
