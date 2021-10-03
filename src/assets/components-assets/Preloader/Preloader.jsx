import React from 'react'
import s from './Preloader.module.css'
import loading from '../../../assets/icons/loading.svg'

const Preloader = () => {
    return (
        <>
           <img className={s.loaderImage} src={loading} alt="" />
        </>
    )
}

export default Preloader