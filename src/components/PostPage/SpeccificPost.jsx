import CssOptimisedHoc from "../../hoc/CssOptimisedHoc"
import { SpeccificPostContainer } from "./StyledPostPage"
import s from './SpeccificPost.module.css'
import classNames from "classnames"
import { useState } from "react"
import { useEffect } from "react"


const Comment = ({ name, email, body, ...props }) => {
    const isTheme = `${props.theme == 'dark' || props.globalTheme === 'black' && !props.isAuth ? `${s.themeColor}` : ''}`


    return (
        <div className={classNames(s.comment)}>
            <div className={s.comment_name}>
                {props.nameText}
                <span style={{ color: `${props.theme == 'white' ? 'black' : 'white'}` }}>
                    {name}
                </span>
            </div>
            <div className={s.comment_email}>
                {props.nameEmail}
                <span style={{ color: `${props.theme == 'white' ? 'black' : 'white'}` }}>
                    {email}
                </span>
            </div>
            <div className={s.comment_body}>
                {props.nameBody}
                <span style={{ color: `${props.theme == 'white' ? 'black' : 'white'}` }}>
                    {body}
                </span>
            </div>
        </div>
    )
}

const SpeccificPost = (props) => {
    const [textareaValue, setTextareaValue] = useState('')
    const [render, setRender] = useState(false)
    const [goEender, setGoEender] = useState(false)
    const [isTextArreaComment, setIsTextArreaComment] = useState(false)
    const [textArreaComment, setTextArreaComment] = useState(null)
    const styledTheme = `${props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'white' : 'black'}`

    window.onclick = (e) => {
        if (!e.target.dataset.textareahide) {
            setIsTextArreaComment(false)
        }
    }

    useEffect(() => {
        props.getCommentsPostThunk(props.match.params.postId)
        setGoEender(!goEender)
    }, [render])



    async function onSubmit(e) {
        e.preventDefault()

        await props.addComent(textareaValue, props.match.params.postId)
        // await props.getCommentsPostThunk(props.match.params.postId)
        setTextareaValue('')
        await setRender(!render)
    }



    const nameText = props.languageObj.postPageText.comments.name
    const nameEmail = props.languageObj.postPageText.comments.email
    const nameBody = props.languageObj.postPageText.comments.body
    const nameAdd = props.languageObj.postPageText.comments.add
    const isTheme = `${props.theme == 'dark' || props.globalTheme === 'black' && !props.isAuth ? `${s.themeColor}` : ''}`

    props.changeHeader(false)
    return (
        <>
            <SpeccificPostContainer>
                <div className={s.container}>
                    <div className={classNames(s.post_title, s.stlyled)}>
                        {props.languageObj.postPageText.post.postTitle}:
                        <span style={{ color: styledTheme }}>
                            {props.post.title}
                        </span>
                    </div>
                    <div className={classNames(s.post_description, s.stlyled)}>
                        {props.languageObj.postPageText.post.postDescription}:
                        <span style={{ color: styledTheme }}>
                            {props.post.desc}
                        </span>
                    </div>
                    <div className={classNames(s.user_name, s.stlyled)}>
                        {props.languageObj.postPageText.post.userName}:
                        <span style={{ color: styledTheme }}>
                            {props.post.userName}
                        </span>
                    </div>
                </div>
            </SpeccificPostContainer>

            <SpeccificPostContainer>
                <span className={s.comments_all_title} style={{ color: styledTheme }}>
                    Comments
                </span>
                <span
                    data-textareahide="hide"
                    onClick={() => setIsTextArreaComment(true)}
                    className={s.addButton}
                    style={{
                        color: styledTheme,
                        border: `1px solid ${isTheme}`,
                        marginLeft: '40px'
                    }}
                >
                    {nameAdd}
                </span>
            </SpeccificPostContainer>
            <form
                data-textareahide="hide"
                style={{ display: `${isTextArreaComment ? 'block' : 'none'}` }}
                onSubmit={onSubmit}
                className={s.comment_form}
                action=""
            >
                <textarea
                    data-textareahide="hide"
                    value={textareaValue}
                    name=""
                    id=""
                    onChange={e => setTextareaValue(e.target.value)}
                    className={s.textareaComment}
                    cols="30" rows="10"
                >
                </textarea>

                <button
                    data-textareahide="hide"
                    className={s.addButton}
                >
                    {nameAdd}
                </button>
            </form>
            <SpeccificPostContainer>
                <div className={s.coments_container}>
                    {
                        props.comments === null ?
                            <div>1</div>
                            : props.comments.Comments.map(el => <Comment theme={props.theme == 'dark' || props.globalTheme == 'black' && !props.isAuth ? 'black' : 'white'} nameText={nameText}
                                nameBody={nameBody}
                                nameEmail={nameEmail}
                                name={el.userName}
                                email={'some'}
                                body={el.text} />)
                    }
                </div>
            </SpeccificPostContainer>
        </>
    )
}


export default CssOptimisedHoc(SpeccificPost, '100px')