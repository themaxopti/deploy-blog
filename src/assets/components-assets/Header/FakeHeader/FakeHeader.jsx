import React, { useEffect } from 'react'
import loop from '../../../icons/search.svg'
import loopWhite from '../../../icons/Vector (1).svg'
import { useState } from 'react'
import { Section, StyledLinkHeader, StyledBubbleImageDiv, StyledBubbleImage, StyledSettingImage, HeaderDiv, ProverDiv, ProverDivContainer, CrossButton, ContainObjectsInProver, ObjectInProver, Switcher, SwitcherCircle, LanguageSwitcher, LanguageSwitchElLeft, LanguageSwitchElCenter, LanguageSwitchElRight, AboutProject, SpanWithCredentionals } from '../../Header/HeaderStyledComponents'
import Prover from '../../Prover/Prover'
import Bubble from '../../../icons/speech-bubble (1) 2 (1).svg'
import SettingsIcon from '../../../icons/settings 1.png'
import { NavLink } from 'react-router-dom'
import { findApi } from '../../../../api/api'
import classNames from 'classnames'

const FakeHeader = (props) => {
    const [animateTo, setAnimateTo] = useState(false)
    const [animateOutTo, setAnimateOutTo] = useState(true)
    const [inputFind, setInputFind] = useState('')
    const [findElements, setFindElements] = useState({ todo: [], user: [], post: [] })
    const [isFindInput, setIsFindInput] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(!render)
    }, [isFindInput])


    const classNamesFakeHeader = classNames(
        'Header_Div_Content',
        'margin_top_fake_header'
    )

    const isTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'themeColor' : ''}`

    window.onclick = (e) => {
        if (e.target.dataset.hideinp !== 'hide') {
            setIsFindInput(false)
            setInputFind('')
        } if (e.target.dataset.hideimg == 'hideimg') {
            setIsFindInput(true)
            setInputFind('')
        }
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <Section>
                {
                    <StyledBubbleImageDiv>
                        <Prover setAnimateTo={setAnimateTo} setAnimateOutTo={setAnimateOutTo} outAnimatedProver={animateOutTo} animatedProver={animateTo} {...props} />

                        <StyledBubbleImage data-tooltip="Всплывающая подсказка" className="bubble_image" src={Bubble} />
                        <StyledSettingImage className="settings_image" onClick={() => {
                            setAnimateTo(true)
                        }} src={SettingsIcon} />
                    </StyledBubbleImageDiv>
                }


                <HeaderDiv backgroundC={props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? false : true}>
                    <div className={classNamesFakeHeader}>
                        <span className="blog_with_font"> <StyledLinkHeader to="/" className={isTheme} > Blog</StyledLinkHeader></span>
                        <input data-hideinp="hide" className={`${!isFindInput ? ' none_find_input' : ' yes_find_input'}`}
                            onFocus={
                                () => setIsFindInput(true)
                            }
                            value={inputFind} type="text"
                            onChange={e => {
                                setInputFind(e.target.value)
                                findApi.getFinds(e.target.value).then(data => setFindElements(data.data))
                            }} />

                        <img onClick={() => setIsFindInput(true)}
                            className="loop_img_fake_adaptive"
                            data-hideimg="hideimg"
                            src={props.theme === 'dark' || props.globalTheme == 'black' && !props.isAuth ? loopWhite : loop} alt=""
                            style={{ position: 'absolute', right: '140px', cursor: 'pointer', width: '40px', height: '87px' }}
                        />
                        <div className="find_scroll">
                            <nav data-hideinp="hide" className={`navigation_search` + `${!isFindInput ? ' none_find_input' : ' yes_find_input'}`}>
                                {findElements.todo.map(e => <StyledLinkHeader key={e._id}  to={`/oneTodo/${e._id}`}>  <div> <span> {e.todo} </span> </div>  </StyledLinkHeader>)}
                                {findElements.post.map(e => <StyledLinkHeader key={e._id} to={`/postPage/${e._id}`}>  <div> <span> {e.title}  </span> </div>  </StyledLinkHeader>)}
                                {findElements.user.map(e => <StyledLinkHeader key={e._id} to={`/users/currentUser/${e._id}`}>  <div>  <span> {e.userName} </span>  </div>  </StyledLinkHeader>)}
                            </nav>
                        </div>
                    </div>
                </HeaderDiv>
            </Section>
        </div >
    )
}



export default FakeHeader