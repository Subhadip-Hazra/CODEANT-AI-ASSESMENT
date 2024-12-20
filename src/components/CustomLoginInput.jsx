import React from 'react'
import { SelfHostedData, SSLLoginOptionsData } from '../constants'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const CustomLoginInput = ({isHostedActive}) => {
    return (
        <Link to={'/repository'} className='w-full px-8 p-3 flex flex-col justify-center items-center h-[440px]'>
        {
            isHostedActive ? (
                    SSLLoginOptionsData.map((item) => (
                        <CustomButton key={item.id} text={item.title} img={item.imageSrc} borderColor={"slate-200"} altText={item.alt} width={'10/12'} font={'semibold'} />
                    ))
            ):(
                SelfHostedData.map((item) =>(
                    <CustomButton key={item.id} text={item.title} img={item.imageSrc} borderColor={"slate-200"} altText={item.alt} width={'10/12'} font={'semibold'}/>
                ))
            )
        }
        
        </Link>
    )
}

export default CustomLoginInput;