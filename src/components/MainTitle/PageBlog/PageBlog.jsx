import React from 'react'
import './PageBlog.css'


const PageBlog = (props) => {
    const langObject = props.languageObj.mainTitleText


    return (
        <div className="main_Page_Blog_End">
            <div className="main_Page_Blog_End_one"> {langObject.footer.about}</div>
            <div className="main_Page_Blog_End_two"> {langObject.footer.contacts} </div>
            <span className="blogSpan"><span style={{color:'white'}}> Bl</span><span style={{color:' #494646'}}>og</span> </span>
        </div>
    )
}

export default PageBlog