import React, { useState } from 'react'
import { loginImage, logo, belowDesign } from '../assets/images'
import { CustomButton, CustomLoginIcon } from '../components'

const SignIn = () => {
    const [isActive,setIsActive] = useState(true);
    const changeField = () => {
        setIsActive(true);
    }
    const changeFieldAgain = () =>{
        setIsActive(false);
    }


    return (
        <div className='flex flex-row justify-between w-full min-h-screen bg-[#FAFAFA]'>
            <div className='hidden  sm:flex sm:min-h-screen sm:items-center sm:justify-center sm:m-auto sm:w-1/2 bg-white'>
                <img src={loginImage} />
                <img src={belowDesign} className='absolute -bottom-6 left-0'/>
            </div>
            <div className='w-full sm:w-1/2 min-h-full justify-center text-center items-center m-auto bg-[#FAFAFA] sm:px-16 p-2'>
                <div className='bg-white h-[502px] flex flex-col justify-center items-center sm:p-5 py-8 border border-slate-200 rounded-xl shadow-sm'>
                    <img src={logo} />
                    <h1 className='text-2xl font-bold '>Welcome to CodeAnt AI</h1>
                    <div className='flex flex-row my-4 w-full mx-3 px-8'>
                        <CustomButton text={"SAAS"} bgColor={isActive? 'blue' : 'gray'} textColor={isActive ? "white" : 'black'} borderColor={isActive ? "transparent" : 'slate-200'} width={"311px"} onClick={changeField} font={"semiBold"} />
                        <CustomButton text={"Self Hosted"} bgColor={isActive? 'gray' : 'blue'} borderColor={isActive ? "slate-200" : 'transparent'} width={"311px"} textColor={isActive ? 'black' : 'white'} onClick={changeFieldAgain} font={"semiBold"}/>
                    </div>
                    <CustomLoginIcon isHostedActive={isActive}/>
                    {!isActive &&<div className='w-full h-[83%]'/>}

                </div>
                <p className='mt-6'>By signing up you agree to the<span className='font-medium'> Privacy Policy</span>.</p>
            </div>
        </div>
    )
}

export default SignIn