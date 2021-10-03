import { connect } from 'react-redux'
import ModalWindowHoc from '../../assets/components-assets/ModalWIndow/ModalWIndow'
import { changeModal } from '../../redux/header-section-reduser'
import s from './Register.module.css'
import { reduxForm, Field } from 'redux-form'
import { required, email, minLengthCreator, maxLength } from '../../utils/validators/validators'


const NameInput = ({ input, meta, ...props  }) => {
    return (
        <>
            <input type="text" placeholder={props.nameName} {...input} errorMessage={meta.error} /> <br />
            <span style={{ color: 'red' }}>{meta.touched && meta.error}</span>
        </>
    )
}

const EmailInput = ({ input, meta, ...props  }) => {
    return (
        <>
            <input type="text" placeholder={props.nameEmail} {...input} errorMessage={meta.error} /> <br />
            <span style={{ color: 'red' }}>{meta.touched && meta.error}</span>
        </>
    )
}


const PasswordInput = ({ input, meta, ...props }) => {
    return (
        <>
            <input type="password" placeholder={props.namePassword} {...input} errorMessage={meta.error} /> <br />
            <span style={{ color: 'red' }}>{meta.touched && meta.error}</span>
        </>
    )
}

const RegisterForm = ({ handleSubmit, meta, valid , ...props }) => {
    
    return (
        <div className={s.container_register}>
            <form style={{marginLeft:"100px"}} className={s.register_content} onSubmit={handleSubmit} >
                <div className={s.name}> <Field name="inputName" validate={required, email} {...props} component={EmailInput} type="text" placeholder="email" /> </div>
                <div className={s.password}> <Field name="inputPassword" validate={required} {...props} component={PasswordInput} type="password" placeholder="password" /></div>
                <div className={s.password}> <Field name="inputUserName" validate={required} {...props} component={NameInput} type="text" placeholder="userName" /></div>
                <div className={s.register} >
                    <button disabled={!valid}> {props.nameRegister}</button>
                </div>
            </form>
        </div>
    )
}

const RegisterFormRedux = reduxForm({ form: 'register' })(RegisterForm)

const Register = (props) => {
    if (props.isModalHoc === false) {
        props.changeModal(false)
    }

    async function onSubmit(formValue) {
        await fetch('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ email: formValue.inputName, password: formValue.inputPassword, userName: formValue.inputUserName })
        })
        console.log(formValue.inputUserName, formValue.inputName, formValue.inputUserName)
    }

    return (
        <RegisterFormRedux {...props} onSubmit={onSubmit} />
    )
}

const mapStateToProps = (state) => {
    return ({
        isModal: state.headerSection.isModal
    })
}

export default connect(mapStateToProps, { changeModal })(ModalWindowHoc(Register))