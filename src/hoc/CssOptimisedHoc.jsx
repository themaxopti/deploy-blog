import { Container, Div, Content } from "../components/MainTitle/MostActivityUsers/StyledMostActivityUsers"
import { Section } from '../assets/components-assets/Header/HeaderStyledComponents'
import AllPostsContext from "../components/AllPosts/AllPostsContextContext/AlPostsContext"
import { useContext } from "react"
import './HocClassnames.css'
import { UserPageRectangle } from "../components/UserPage/StyledUserPage"
import { useEffect } from "react"


function CssOptimisedHoc(Component, marginTop, classNameBackImage) {

    return function ComponentContainer(props) {

        useEffect(() => {
         window.scrollTo(0,0)

        },[])


        return (
            <>
                <div style={{ marginTop: `${marginTop}` }}>
                    <Section className={classNameBackImage}>
                        <Div >
                            <Content>

                                <Component {...props} />

                            </Content>
                        </Div>
                        {/* <UserPageRectangle></UserPageRectangle> */}

                    </Section>

                </div>
            </>
        )
    }
}

export default CssOptimisedHoc