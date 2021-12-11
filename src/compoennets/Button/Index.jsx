import React from 'react'

const Button = (props) => {
    return (
        <button className={`btn px-4 py-2 rounded-full text-white border m-2 ${props.cname}`}
        onClick={props.onClickValue}>{props.btnTitle}</button>
    )
}

export default Button
