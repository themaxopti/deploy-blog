import React, { useEffect, useRef, useState } from 'react'
import s from './Paginator.module.css'
import next from '../../assets/icons/next 2.svg'
import classNames from 'classnames'

const DivComponent = ({ getAllTodosPaginationThunk,isTodosPagination,isPostsPagination, stateCurrnetPage, getAllPostsPaginationThunk, el, ...props }) => {
    const [render, setRender] = useState(false)
    const [active, setActive] = useState(false)
    const [disable, setDisable] = useState(true)

    const divClassNames = classNames({
        [s.pagination_div]: true,
        // [s.active]:  true,
        // [s.disable]: true
    })


    return (
        <div style={{ backgroundColor: `${el == stateCurrnetPage ? '#212020' : 'white'}`, color: `${el == stateCurrnetPage ? 'white' : 'black'} ` }} className={divClassNames} onClick={async () => {
            if (isPostsPagination) {
                await getAllPostsPaginationThunk(el)
            }

            if(isTodosPagination){
                await getAllTodosPaginationThunk(el)
            }
            // await getAllPostsPaginationThunk(el)
            await setRender(!render)
            // setActive(!active)
            // setDisable(active)
        }}>
            <span>{el}</span>
        </div>
    )
}


const Paginator = ({ getAllTodosPaginationThunk,isTodosPagination,isPostsPagination, totalPosts, getAllPostsPaginationThunk, stateCurrnetPage }) => {
    const [active, setActive] = useState(false)


    const [render, setRender] = useState(false)

    const totalPagesCount = Math.ceil(totalPosts / 5)

    let portionCount = Math.ceil(totalPagesCount / 3)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * 3 + 1;
    let rightPortionPageNumber = portionNumber * 3;

    const pages = []

    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }


    return (
        <>
            <div className={s.pagination_container}>
                {
                    <button className={s.button} disabled={portionNumber <= 1 ? true : false} onClick={() => { setPortionNumber(portionNumber - 1) }}> <img src={next} /> </button>}


                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(el => {
                        return (
                            < DivComponent getAllTodosPaginationThunk={getAllTodosPaginationThunk} isTodosPagination={isTodosPagination} isPostsPagination={isPostsPagination} stateCurrnetPage={stateCurrnetPage} getAllPostsPaginationThunk={getAllPostsPaginationThunk} el={el} />
                        )
                    })}

                {
                    <button className={s.button + ' ' + s.next} disabled={portionCount > portionNumber ? false : true} onClick={() => { setPortionNumber(portionNumber + 1) }}><img style={{ transform: 'rotate(180deg)' }} src={next} /></button>}
            </div>
        </>
    )
}

export default Paginator