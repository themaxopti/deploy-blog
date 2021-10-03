import React from 'react'
import ProverRetengel from '../../icons/Rectangle 18 (1).svg'
import { formValueSelector } from 'redux-form'
import { useState } from 'react'
import { ProverDiv, ProverDivContainer, LanguageSwitchElLeft, CrossButton, ContainObjectsInProver, ObjectInProver, SpanWithCredentionals, Switcher, SwitcherCircle, LanguageSwitcher, LanguageSwitchElCenter, LanguageSwitchElRight, AboutProject } from '../Header/HeaderStyledComponents'
import { NavLink } from 'react-router-dom'
import { StyledLinkHeader } from '../Header/HeaderStyledComponents'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { changeLanguageProjectThunk } from '../../../redux/language-reducer'
import { changeLanguageThunk } from '../../../redux/language-reducer'
import { connect } from 'react-redux'
import { changeThemeThunk, changeThemeGlobalThunk } from '../../../redux/auth-reducer'


const Prover = ({ changeTheme, isChangeTheme, animatedProver, outAnimatedProver, setAnimateOutTo, setAnimateTo, ...props }) => {
    const [mlSircle, setMlSircle] = useState(props.theme == 'white' || props.globalTheme === 'white' ? false : true)
    const [sircleColor, setSircleColor] = useState(props.theme == 'white' || props.globalTheme === 'white' ? false : true)
    const [switcherColor, setSwitcherColor] = useState(props.theme == 'white' || props.globalTheme === 'white' ? false : true)
    const windowTheme = document.querySelector('body')
    const [render, setRender] = useState(false)



    const changeThemeNow = async () => {
        setMlSircle(!mlSircle)
        setSircleColor(!sircleColor)
        setSwitcherColor(!switcherColor)
        if (!props.isAuth) {
            if (props.globalTheme == 'white') {
                await props.changeThemeGlobalThunk('black')
            } if (props.globalTheme == 'black') {
                await props.changeThemeGlobalThunk('white')
            }
        }
        if (props.theme == 'dark') {
            await props.changeThemeThunk('white')

        } if (props.theme == 'white') {
            await props.changeThemeThunk('dark')
        }
        setRender(true)
    }

    const languages = [
        'en', 'ru', 'ua'
    ]

    async function changeLanguage(lang) {
        props.history.push(`#` + lang)
        await props.changeLanguageProjectThunk(lang)
        await props.changeLanguageThunk(lang)
    }

    return (
        <ProverDiv style={{ marginLeft: `${animatedProver === false ? '-110px' : '0px'}` }}>
            <img className="img_provider" src={ProverRetengel} alt="" />
            <ProverDivContainer>
                <CrossButton>
                    <div class="cl-btn-2" onClick={() => {
                        setAnimateOutTo(true)
                        setAnimateTo(false)
                    }}>
                        <div>
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
                        </div>
                    </div>
                </CrossButton>
                <ContainObjectsInProver>
                    <ObjectInProver style={{ transform: 'translateY(10px)' }}>
                        <SpanWithCredentionals> {props.languageObj.popOver.theme} </SpanWithCredentionals>
                        <Switcher bColor={switcherColor} onClick={changeThemeNow}>
                            <SwitcherCircle bColor={sircleColor} primary={mlSircle}></SwitcherCircle>
                        </Switcher>
                    </ObjectInProver>

                    <ObjectInProver style={{ flexDirection: 'column', transform: 'translateY(50px)' }}>
                        <SpanWithCredentionals > {props.languageObj.popOver.language} </SpanWithCredentionals>
                        <LanguageSwitcher style={{ transform: 'translateY(15px)' }}>

                            {
                                languages.map((e,i) => {
                                    return (
                                        <>
                                            <LanguageSwitchElLeft key={i} onClick={() => { changeLanguage(e) }}> {e}</LanguageSwitchElLeft>
                                        </>
                                    )
                                })
                            }



                        </LanguageSwitcher>
                    </ObjectInProver>

                    <ObjectInProver style={{ marginTop: '100px', marginLeft: '5px' }}>
                        <AboutProject> <StyledLinkHeader style={{ color: 'white' }} to="/aboutAuthor"> {props.languageObj.popOver.aboutProject}</StyledLinkHeader> </AboutProject>
                    </ObjectInProver>
                </ContainObjectsInProver>
            </ProverDivContainer>

        </ProverDiv>
    )
}



// export default withRouter( Prover)

const mapStateToProps = (state) => {
    return ({
        theme: state.auth.theme,
        language: state.language.language,
        languageEn: state.language.languageEn,
        isAuth: state.auth.isAuth,
        globalTheme: state.auth.globalTheme
    })
}

export default compose(
    withRouter,
    connect(mapStateToProps, { changeThemeGlobalThunk, changeThemeThunk, changeLanguageThunk, changeLanguageProjectThunk })
)(Prover)