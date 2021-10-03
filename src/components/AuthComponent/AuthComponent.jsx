import { authProfile } from "../../redux/auth-reducer"
import { connect } from "react-redux"
import { useEffect } from "react"




const AuthComponent = (props) => {


    useEffect(() => {
        props.authProfile()
    }, [])


    return (
        <></>
    )
}


const mapStateToProps = (state) => {
    return ({
        
        isLoginModal: state.headerSection.isLoginModal,

        isAuth: state.auth.isAuth,
    })
}


export default connect(mapStateToProps, { authProfile })(AuthComponent)