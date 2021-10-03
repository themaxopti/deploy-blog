import { connect } from "react-redux"
import { ModalWindowContent } from "./ModalWIndowContent"
import { useState } from "react"
import { ModalWIndowWrap } from "./StyledModalWIndow"
import { ModalWindowContain } from "./StyledModalWIndow"
import { useRef } from "react"
import { useEffect } from "react"
import { changeModal } from "../../../redux/header-section-reduser"
import { Span } from "./StyledModalWIndow"
import './ModalWindow.css'


function ModalWindowHoc(Component, display) {
    return function ModalWindow(props) {
        const [hide, setHide] = useState(false)
        const wrap = useRef(1)
        const [close, setClose] = useState(wrap)
        const [hideLeft, setHideLeft] = useState(false)
        const [isModal, setIsModal] = useState(true)
        const [isHideModal, setIsHideModal] = useState(true)
        const modalWindow = document.querySelector('.modal-window')
        const body = document.querySelector('body')
        const [render,setRender] = useState(false)

        useEffect(() => {
            setRender(!render)
        },[isModal])

        body.classList.add('stop-scrolling')

        window.onclick = function (e) {

            if (e.target.dataset.hidemodal) {
                return new Promise((res, rej) => {
                        setIsHideModal(false)
                        setHideLeft(true)
                        res()
                }).then(data => {
                    return new Promise((res, rej) => {
                        setTimeout(() => {
                            setIsModal(false)
                            setHide(true)
                            body.classList.remove('stop-scrolling')
                            e.target.dataset.ishide = !e.target.dataset.ishide
                        }, 1000)
                        res()
                    })
                }).then(data => {
                    setTimeout(() => {
                        setRender(!render)
                    },100)
                })
            }
        }

        return (
            <ModalWIndowWrap className="modal-window" data-hidemodal={isHideModal} data-ishide={true} hide={hide}>
                <ModalWindowContain style={{ transform: `translateX(${hideLeft ? '-300%' : '0px'}) rotate3d( ${hideLeft ? '1,1,0,270deg' : '0px'} )` }} hide={hide}>
                    <Component setHide={setHide} isModalHoc={isModal} {...props} />
                </ModalWindowContain>
            </ModalWIndowWrap>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isModal: state.headerSection.isModal,
        isAuth: state.auth.isAuth
    })
}

export default ModalWindowHoc