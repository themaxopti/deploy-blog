import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { AboutAuthorPageContainer } from "./StyledAboutAuthorPage"
import s from './AboutAuthor.module.css'


const AboutAuthorPage = (props) => {

    props.changeHeader(false)
    const styledTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'white' : 'black'}`

    return (
        <AboutAuthorPageContainer>
            <div className={s.container}>
                <div className={s.about_author_and_project}> <span style={{color:styledTheme}}>   {props.languageObj.popOver.aboutProject} </span> </div>
                <div className={s.gitHub}>  <span style={{color:styledTheme}}> GitHub: </span> <a href="https://github.com/themaxopti?tab=overview&from=2021-06-01&to=2021-06-30"> <span style={{color:styledTheme}}>  https://github.com/themaxopti?tab=overview&from=2021-06-01&to=2021-06-30 </span>  </a></div>
            </div>
        </AboutAuthorPageContainer>
    )
}


export default CssOptimisedHoc(AboutAuthorPage, '100px')