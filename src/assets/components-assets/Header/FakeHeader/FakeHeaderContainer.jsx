import React from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../../../../redux/header-section-reduser'
import FakeHeader from './FakeHeader'


const FakeHeaderContainer = (props) => {
    return (
        <FakeHeader {...props} />
    )
}


const mapStateToProps = (state) => {
    return ({
        isChangeTheme: state.headerSection.isChangeTheme,
        isFakeHeader:state.headerSection.isFakeHeader,
        theme:state.auth.theme,
        globalTheme:state.auth.globalTheme
    })
}

export default connect(mapStateToProps,{changeTheme})(FakeHeaderContainer)