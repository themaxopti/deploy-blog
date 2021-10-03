import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import './Header.css'
import Bubble from '../../icons/speech-bubble (1) 2.png'
import SettingsIcon from '../../icons/settings 1.png'
import { useState } from 'react'
import ProverRetengel from '../../icons/Rectangle 18.png'
import { formValueSelector } from 'redux-form'
import Prover from '../Prover/Prover'
import { Section, StyledLinkHeader, Popover, PopoverLink, StyledBubbleImageDiv, StyledBubbleImage, StyledSettingImage, HeaderDiv } from './HeaderStyledComponents'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CombinePopoverLink, PopoverComponent, PopoverElement } from '../Popover/Popover'
import Register from '../../../components/Register/Register'
import Test from '../ModalWIndow/Test'
import ModalWindowHoc from '../ModalWIndow/ModalWIndow'
import Login from '../../../components/Login/Login'
import { authProfile } from '../../../redux/auth-reducer'
import Chat from '../../../components/Chat/Chat'
import showMore from '../../icons/more.svg'


export const Header = (props) => {
    const inputRef = useRef()
    const [offsetH, setOffsetH] = useState(0)
    const [isFixed, setIsFixed] = useState(false)
    const [render, setRender] = useState(false)
    const dataUsers = ['1', '3', '5', '7']
    const dataPosts = ['some', 'some', 'some', 'some']
    const dataProfile = ['some', 'some', 'some', 'some']
    const dataRegister = ['some', 'some', 'some', 'some']
    const dataUsersTodos = ['some', 'some', 'some', 'some']
    const [animateTo, setAnimateTo] = useState(false)
    const [animateOutTo, setAnimateOutTo] = useState(true)
    const [dataNav, setDataNav] = useState(false)

    const headerDivContent = document.querySelector('.Header_Div_Content')
    // headerDivContent.style.marginTop = '200px'
    const navInHeader = document.querySelector('.nav_in_header')

    const [displayModal, setDisplayModal] = useState(false)

    useEffect(async () => {
        setOffsetH(inputRef.current.getBoundingClientRect().top)
    }, [])

    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'themeColor' : ''}`


    window.onclick = (e) => {
        if (e.target.dataset.isnav) {
            setDataNav(!dataNav)
        }
    }

    window.onscroll = () => {
        if (window.pageYOffset >= offsetH) {
            setIsFixed(true)
            props.changeHeader(false)
        } if (window.pageYOffset < 185) {
            props.changeHeader(true)
        }
    }


    const nameLogin = props.languageObj.registerAndLoginPageText.login.login
    const nameRegister = props.languageObj.registerAndLoginPageText.register.register
    const nameName = props.languageObj.registerAndLoginPageText.name
    const nameEmail = props.languageObj.registerAndLoginPageText.email
    const namePassword = props.languageObj.registerAndLoginPageText.password

    return (
        <div ref={inputRef} style={{
            zIndex: '50', top: '0px',
            width: '100%', marginTop: `${props.isFakeHeader === true ? '50px' : '0px'}`,
            position: `${props.isFakeHeader === true ? 'relative' : 'fixed'}`
        }}>
            <Section>
                {
                    <StyledBubbleImageDiv>
                        <Prover languageObj={props.languageObj} changeTheme={props.changeTheme} setAnimateTo={setAnimateTo} setAnimateOutTo={setAnimateOutTo} outAnimatedProver={animateOutTo} animatedProver={animateTo} {...props} />

                        <StyledBubbleImage data-tooltip="Всплывающая подсказка" className="bubble_image" src={Bubble} />
                        <StyledSettingImage className="settings_image" onClick={() => {
                            setAnimateTo(true)
                        }} src={SettingsIcon} />
                    </StyledBubbleImageDiv>
                }

                <HeaderDiv backgroundC={
                    props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? false : true
                }>
                    <div className="Header_Div_Content adaptive_margin" style={{ justifyContent: 'center' }}>
                        <span
                            className={"blog_with_font"}
                            style={{
                                marginRight: '160px', display: `${props.isFakeHeader ? 'none' : 'block'}`
                            }}
                        >
                            <StyledLinkHeader to="/" className={isTheme} >Blog</StyledLinkHeader>
                        </span>


                        <img
                            src={showMore}
                            data-isnav="navik"
                            className="showMoreSvg"
                            alt=""
                            onClick={e => {
                                if (dataNav) {
                                    navInHeader.classList.add('show_nav')
                                    headerDivContent.classList.add('show_nav')
                                } if (!dataNav) {
                                    headerDivContent.classList.remove('show_nav')
                                    navInHeader.classList.remove('show_nav')
                                }
                            }}
                            style={{
                                transform: `${props.isFakeHeader === true ? 'translateX(70px)' : ''} `,
                                display: `${props.noneShowMore === true ? 'none' : ''}`
                            }}
                        />



                        <nav className="nav_in_header"
                            style={{ color: `${props.theme == 'dark' ? 'white' : 'black'}` }}
                        >

                            <div className="postLinkMargin">
                                <StyledLinkHeader to="/posts" className={isTheme}>
                                    {props.languageObj.mainTitleText.categories.posts}
                                </StyledLinkHeader>
                            </div>
                            <div>
                                <StyledLinkHeader to="/users" className={isTheme}>
                                    {props.languageObj.mainTitleText.categories.users}
                                </StyledLinkHeader>
                            </div>
                            <div>
                                {
                                    props.isAuth
                                        ? <StyledLinkHeader className={isTheme} to={`/users/${props.userId}`}>

                                            {/* <CombinePopoverLink linkTitle={'Profile'} data={dataProfile} /> */}
                                            {props.languageObj.mainTitleText.categories.profile}
                                            {/* <CombinePopoverLink linkTitle={'Profile'} data={dataProfile} /> */}
                                        </StyledLinkHeader>
                                        : <div
                                            className={isTheme}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {props.languageObj.mainTitleText.categories.profile}
                                        </div>
                                }


                            </div>



                            <div>

                                <div
                                    style={{ cursor: 'pointer' }}
                                    className={isTheme}
                                    onClick={() => {
                                        props.changeModal(true)
                                        props.changeModalRegister(true)
                                        props.changeModalChat(false)
                                        props.changeModalLogin(false)
                                    }}>
                                    {props.languageObj.mainTitleText.categories.register}
                                </div>
                                {
                                    props.isModal && props.isRegisterModal
                                        ? <Register
                                            nameRegister={nameRegister}
                                            languageObj={props.languageObj}
                                            namePassword={namePassword}
                                            nameEmail={nameEmail}
                                            nameName={nameName}
                                            nameLogin={nameLogin} /> : <></>
                                }
                            </div>


                            {
                                !!props.isAuth ? <div
                                    className={isTheme}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        localStorage.removeItem('token')
                                        props.logOut()
                                        setRender(true)
                                        window.location.reload()
                                    }}>
                                    {props.languageObj.mainTitleText.categories.logout}
                                </div>
                                    :
                                    <div>
                                        <div
                                            className={isTheme} style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                props.changeModal(true)
                                                props.changeModalRegister(false)
                                                props.changeModalChat(false)
                                                props.changeModalLogin(true)
                                            }}>
                                            {props.languageObj.mainTitleText.categories.login}
                                        </div>
                                        {
                                            props.isModal && props.isLoginModal
                                                ? <Login
                                                    namePassword={namePassword}
                                                    nameEmail={nameEmail}
                                                    nameName={nameName}
                                                    nameLogin={nameLogin} /> : <></>
                                        }
                                    </div>
                            }


                            <div>
                                <StyledLinkHeader className={isTheme} to="/todos">
                                    {props.languageObj.mainTitleText.categories.usersTodos}
                                </StyledLinkHeader>
                            </div>

                            <div>

                                <div
                                    className={isTheme}
                                    onClick={() => {
                                        props.changeModal(true)
                                        props.changeModalRegister(false)
                                        props.changeModalLogin(false)
                                        props.changeModalChat(true)
                                    }}
                                >
                                    Chat
                                </div>

                                {
                                    props.isModal && props.isChatModal
                                        ? <Chat avatar={props.avatar}
                                            userName={props.userName} />
                                        : <></>
                                }




                            </div>
                        </nav>
                    </div>
                </HeaderDiv>
            </Section>
        </div>
    )
}

export default React.memo(Header)