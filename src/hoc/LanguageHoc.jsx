import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { changeLanguageThunk, getLanguageProjectThunk, changeLanguageProjectThunk } from "../redux/language-reducer"
import { getThemeGlobalThunk,authProfile } from "../redux/auth-reducer"
import ProgressiveBar from "../assets/components-assets/ProgressiveBar/ProgressiveBar"


// async function getLanguageQuery() {
//     try {

//     } catch (e) {

//     }
// }

const mapStateToProps = (state) => {
    return ({
        language: state.language.language,
        languageObj: state.language.languageObj,
        isAuth:state.auth.isAuth
    })
}

function LanguageHoc(Component) {



    function ComponentContainer(props) {
        const [initial, setInitial] = useState(false)

        async function getLanguageQuery() {
            try {
                setInitial(false)
                await props.getLanguageProjectThunk()
                await props.getLanguageProjectThunk(hash)
            } catch (e) {

            }
        }





        let hash = window.location.hash
        hash = hash.substr(1)




        useEffect(async () => {

            if (props.language === 'en') {
                await props.getLanguageProjectThunk()
                props.history.push(`#` + hash)
            } else {
                // await props.getLanguageProjectThunk()
                props.history.push(`#` + props.language)
            }

            if (!props.isAuth) (
                await props.getThemeGlobalThunk()
            )

            await props.getLanguageProjectThunk()

            await props.getLanguageProjectThunk(hash)


            setInitial(true)
        }, [])



        if (!initial) {
            return <ProgressiveBar />
        } if (initial) {
            return (
                <Component />
            )
        }
    }


    return compose(
        withRouter,
        connect(mapStateToProps, { authProfile,getThemeGlobalThunk, changeLanguageProjectThunk, changeLanguageThunk, getLanguageProjectThunk }),
    )(ComponentContainer)
    // return connect(mapStateToProps, { changeLanguageThunk })(ComponentContainer)
}

export default LanguageHoc