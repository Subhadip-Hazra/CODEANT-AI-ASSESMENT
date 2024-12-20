import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({text,img,bgColor,width,borderColor,textColor,altText,onClick,font}) => {
    return (
        <button className={`w-${width} flex flex-1 justify-center items-center gap-2 bg-${bgColor} p-2 border border-${borderColor} text-${textColor} rounded-md my-2 font-${font}`} onClick={onClick}>
            <img src={img} alt={altText}/>
            {text}
        </button>
    )
}

export default CustomButton