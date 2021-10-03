import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Section } from '../../../assets/components-assets/Header/HeaderStyledComponents'
import './Pages.css'
import pageForPageOne from '../../../assets/images/adam-wilson-mM7V59F5syw-unsplash 1.png'
import pageForPageTwo from '../../../assets/images/ux-indonesia-qC2n6RQU4Vw-unsplash 1.png'
import pageForPageThree from '../../../assets/images/lauren-sauder-6GPBVYLapYQ-unsplash 1.png'
import { PagesDiv, PagesDivContent, PagesContainer, Rectangle, FontMarginFirstDivCard, FontMarginSecondDivCard } from './StyledPages'
import CssOptimisedHoc from '../../../hoc/CssOptimisedHoc'
import { StyledLinkHeader } from '../../../assets/components-assets/Header/HeaderStyledComponents'


const Pages = (props) => {

    const langObject = props.languageObj.mainTitleText

    return (
        <div style={{ marginTop: `${props.isFakeHeader ? '100px' : '230px'} ` }}>
            <Section>
                <PagesDiv>
                    <PagesDivContent>
                        <PagesContainer>
                            <div className="pagesOne">

                                <div className="card card__one">
                                    <StyledLinkHeader to="/users">
                                        {/* <Rectangle> */}
                                        <FontMarginFirstDivCard >
                                            <span style={{ color: 'white',zIndex:'999',position:'relative' }}>
                                                {langObject.cards.users.users}  <br />
                                                {langObject.cards.users.text} </span>
                                        </FontMarginFirstDivCard>
                                        {/* </Rectangle> */}
                                        <Rectangle></Rectangle>
                                        <img src={pageForPageOne} className="cardImg" alt="" />
                                    </StyledLinkHeader>

                                </div>
                                <div className="card card__two">
                                    <StyledLinkHeader to="/posts">

                                        {/* <Rectangle> */}
                                        <FontMarginFirstDivCard >
                                            <span style={{ color: 'white',zIndex:'1000',position:'relative' }}>
                                                {langObject.cards.posts.posts} <br />
                                                {langObject.cards.posts.text}
                                            </span>
                                        </FontMarginFirstDivCard>
                                        {/* </Rectangle> */}
                                        <Rectangle></Rectangle>

                                        <img src={pageForPageTwo} className="cardImg" alt="" />
                                    </StyledLinkHeader>

                                </div>
                            </div>
                            <div className="pagesTwo">
                                <div className="card card__three">
                                    <StyledLinkHeader to="/todos">

                                        {/* <Rectangle> */}
                                        <FontMarginSecondDivCard>
                                            <span style={{ color: 'white',zIndex:'1000',position:'relative' }}>
                                                {langObject.cards.todos.todos} <br />
                                                {langObject.cards.todos.text}
                                            </span>
                                        </FontMarginSecondDivCard>
                                        {/* </Rectangle> */}
                                        <Rectangle></Rectangle>

                                        <img src={pageForPageThree} className="cardImg" alt="" />
                                    </StyledLinkHeader>

                                </div>
                            </div>
                        </PagesContainer>
                    </PagesDivContent>
                </PagesDiv>
            </Section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader: state.headerSection.isFakeHeader
    })
}


export default connect(mapStateToProps, {})(Pages)