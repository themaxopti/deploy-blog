import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import ModalWindowHoc from '../../assets/components-assets/ModalWIndow/ModalWIndow'
import { changeModal } from '../../redux/header-section-reduser'
import s from './Chat.module.css'
import configData from '../../config.json'
import userSvg from '../../assets/icons/user.svg'
import { messagesApi } from '../../api/api'

const Chat = (props) => {
    console.log(configData.SERVER_URL + `/${props.avatar}`)
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef(null)
    const [connected, setConnected] = useState(false)
    const [userName, setUserName] = useState('')



    useEffect(() => {
        if (messages.length > 0) {
            inputRef1.scrollTop = 100000000
        }
    }, [messages])



    useEffect(async function connect() {
        messagesApi.getMessages().then(data => setMessages(data.data))


        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = () => {
            setConnected(true)

            const message = {
                event: 'connection',
                userName: props.userName || 'Anonim',
                id: Date.now()
            }

            socket.current.send(JSON.stringify(message))
            console.log('Подключение установленно')
        }


        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            messagesApi.addMessage({ message: message.message, avatar: message.avatar, userName: message.userName })
            console.log(message)
            setMessages(prev => [...prev, message])
        }


        socket.current.onclose = () => {
            console.log('Socket close')
        }

        socket.current.onerror = () => {
            console.log('error')
        }
    }, [])



    const sendMessage = async () => {
        const message = {
            userName: props.userName || 'Anonim',
            avatar: props.avatar,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
    }

    if (props.isModalHoc === false) {
        props.changeModal(false)
        window.location.reload()
    }

    const inputRef1 = document.querySelector('.Chat_message_content__3Fjlj')
    console.log(inputRef1)
    // useEffect(() => {
    //     const wtf = inputRef1.current.getBoundingClientRect().top()

    // },[])

    console.log(messages)

    if (!connected) {
        return (
            <>
                <div>
                    не подключено
                    <input value={userName} onChange={e => setUserName(e.target.value)} type="text" placeholder="Name" />
                    <button onClick={connect}>Войти</button>
                </div>
            </>
        )
    }




    return (
        <>
            <div className={s.message_container}>
                <div id="onetwo" className={s.message_content}>
                    {
                        messages.map(mess =>
                            <div key={mess.id}>
                                {mess.event === 'connection'
                                    ? <div style={{ marginTop: '40px' }}>Пользователь {mess.userName} подключился</div>


                                    :
                                    <div className={s.position_card} style={{color:'black'}}>
                                        <div className={s.user_card}>
                                            <div className={s.img_user}> <img src={configData.SERVER_URL + `/${mess.avatar}`} alt="" /></div>
                                            <div className={s.user_name_and_msg}>
                                                <div>{mess.userName}</div>
                                                <div className={s.message}>{mess.message}</div>
                                            </div>
                                            {/* {mess.userName}. {mess.message} */}
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                </div>
                <input className={s.ababa}
                    style={{
                        marginTop:'20px'
                    }}
                    placeholder="Введите сообщение"
                    value={value}
                    onChange={e => setValue(e.target.value)} type="text" name="" id="" />
                <button className={s.addButton} onClick={() => {
                    sendMessage()
                    // inputRef1.scrollTop = 100000000
                }}>Send message</button>
            </div>
        </>
    )
}



const mapStateToProps = (state) => {
    return ({
        isModal: state.headerSection.isModal,
        isAuth: state.auth.isAuth,
        theme:state.auth.theme,
        globalTheme:state.auth.globalTheme,
    })
}

export default compose(
    withRouter,
    connect(mapStateToProps, { changeModal }),
    ModalWindowHoc
)(Chat)