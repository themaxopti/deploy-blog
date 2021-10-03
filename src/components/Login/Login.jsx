import { connect } from 'react-redux'
import ModalWindowHoc from '../../assets/components-assets/ModalWIndow/ModalWIndow'
import { changeModal } from '../../redux/header-section-reduser'
import s from './Register.module.css'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { setAuth } from '../../redux/auth-reducer'
import { login } from '../../redux/auth-reducer'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { useEffect, useState } from 'react'
import { authProfile } from '../../redux/auth-reducer'


const NameInput = ({ input, meta,...props }) => {
    return (
        <>
            <input type="text" placeholder={props.nameEmail} {...input} errorMessage={meta.error} /> <br />
            <span style={{ color: 'red' }}>{meta.touched && meta.error}</span>
        </>
    )
}


const PasswordInput = ({ input, meta,...props }) => {
    return (
        <>
            <input type="password" placeholder={props.namePassword} {...input} errorMessage={meta.error} /> <br />
            <span style={{ color: 'red' }}>{meta.touched && meta.error}</span>
        </>
    )
}

const RegisterForm = ({ handleSubmit, error,...props }) => {
    
    
    return (
        <div className={s.container_register}>
            <form className={s.register_content} onSubmit={handleSubmit} >
                <div className={s.name}> <Field name="inputName" validate={required} component={NameInput} {...props} type="text" placeholder={props.nameName} /> </div>

                <div className={s.password}> <Field name="inputPassword" validate={required} component={PasswordInput} {...props} type="password" placeholder="" /></div>
                {error}
                <div className={s.register} >
                    <button >   {props.nameLogin}  </button>
                </div>
            </form>
        </div>
    )
}

const LoginFormRedux = reduxForm({ form: 'login' })(RegisterForm)

const Login = (props) => {
    const [render, setRender] = useState(false)
    console.log(props)
    if (props.isModalHoc === false) {
        props.changeModal(false)
    }

    console.log(props.nameLogin)
    
    if (props.isAuth) {
        return <Redirect to="/" />
    }


    async function onSubmit(e) {
        // e.preventDefault()
        await props.login(e.inputName, e.inputPassword)
    }

    return (
        <LoginFormRedux {...props} onSubmit={onSubmit} />
    )
}

const mapStateToProps = (state) => {
    return ({
        isModal: state.headerSection.isModal,
        isAuth: state.auth.isAuth
    })
}


export default compose(
    withRouter,
    connect(mapStateToProps, { authProfile, changeModal, setAuth, login }),
    ModalWindowHoc
)(Login)


// export default connect(mapStateToProps, { changeModal, setAuth,login })(ModalWindowHoc(Login))