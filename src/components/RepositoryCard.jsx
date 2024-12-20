import React from 'react'
import { Link } from 'react-router-dom'
import { database } from '../assets/icons'

const RepositoryCard = ({ link,repositoryName,repoType,repoLanguage,repoStorage,updateTime }) => {
    return (
        <Link to={link}>
            <div className='p-4 flex-1 w-full bg-white my-2 border-t border-t-slate-300'>
                <div className='flex flex-1 gap-4'>
                    <h1 className='text-xl font-medium '>{repositoryName}</h1>
                    <div className='rounded-full border flex justify-center items-center border-shadowBlue bg-lightBlue text-sm text-blue'>
                        <p className='px-3 capitalize'>{repoType}</p>
                    </div>
                </div>
                <div className='flex mt-3 justify-between w-full text-sm sm:text-md sm:w-1/2'>
                    <div className='flex flex-1 gap-2'>
                        <p>{repoLanguage}</p>
                        <p className='w-2 h-2 mt-2 rounded-full bg-blue'></p>
                    </div>
                    <div className='flex flex-1 gap-2 mb-1'>
                        <img src={database} width={11} height={12}/>
                        <p className='text-sm'>{repoStorage}</p>
                    </div>
                    <div className='flex flex-1 gap-2'>
                        <p>Update {updateTime} days ago</p>
                    </div>                    
                </div>
            </div>
        </Link>
    )
}

export default RepositoryCard