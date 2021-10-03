import React from 'react'
import { PopoverLink, Popover } from '../Header/HeaderStyledComponents'

export const PopoverElement = (props) => {
    return (
        <PopoverLink to={'/'}>{props.link}</PopoverLink>
    )
}

export const PopoverComponent = (props) => {
    const links = [...props.links]
    let numb = 0

    return (
        <>
            <div className="test" style={{ height: '20px', width: '100px', position: 'absolute' }}></div>
            <Popover className="popover" change={props.isOpen}>
                {
                    links.map((el) => {
                        numb++
                        return <PopoverElement key={el + numb} link={el} />
                    })
                }
            </Popover>
        </>
    )
}

export function CombinePopoverLink({ linkTitle, data, someLink }) {
    return (
        <>
            {linkTitle}
            <PopoverComponent links={data} />
        </>
    )
}
