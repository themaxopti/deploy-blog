import React from 'react'
import styled from 'styled-components'
import { Section } from '../../../assets/components-assets/Header/HeaderStyledComponents'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MostActivityUsers.css'
import Arrow from '../../../assets/icons/Arrow 1.svg'
import { Rectangle } from '../Pages/StyledPages';
import SliderPhoto from '../../../assets/images/toa-heftiba-6bKpHAun4d8-unsplash 1.png'
import { Div, Container, Content, UserSlider, UserSliderImage, MostActivityUsersDivInSlider, UserSliderUser } from './StyledMostActivityUsers'
import CssOptimisedHoc from '../../../hoc/CssOptimisedHoc';
import config from '../../../config.json'
import userSvg from '../../../assets/icons/user.svg'
import { StyledLinkHeader } from '../../../assets/components-assets/Header/HeaderStyledComponents';

const CardUserComponent = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledLinkHeader to={`/users/currentUser/${props._id}`}>
                <div style={{ display: 'flex', width: '70%', justifyContent: 'space-between', marginLeft: '145px' }}>
                    <UserSlider>
                        <UserSliderImage>
                            <img
                                style={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                src={props.avatar ? config.SERVER_URL + '/' + props.avatar : userSvg}
                                alt="" />
                        </UserSliderImage>
                        <UserSliderUser style={{ marginTop: '20px', cursor: 'pointer' }}>{props.userName}</UserSliderUser>
                    </UserSlider>
                </div>
            </StyledLinkHeader>
        </div>
    )
}


const UsersSlider = (props) => {




    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <div style={{transform:'translateX(-50px)', overflow: 'hidden', alignItems: 'center', marginLeft: '-40px', marginTop: '100px' }}>
            <Slider {...settings}>
                {
                    props.users.map(el => <CardUserComponent key={el._id} _id={el._id} userName={el.userName} avatar={el.avatar} />)
                }
            </Slider>
        </div>
    )
}


const MostActivityUsers = (props) => {
    const langObject = props.languageObj.mainTitleText


    return (
        <Container style={{ overflow: 'hidden' }} >
            <Rectangle>
                <UsersSlider users={props.users} />
                <MostActivityUsersDivInSlider> {langObject.usersSlider} </MostActivityUsersDivInSlider>
            </Rectangle>
            <img src={SliderPhoto} className="cardImg" alt="" />
        </Container>
    )
}



export default CssOptimisedHoc(MostActivityUsers, '100px')
