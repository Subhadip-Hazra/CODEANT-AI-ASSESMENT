import React from 'react';
import { search } from '../assets/icons';

const SearchInput = ({ onSearch }) => {
    return (
        <div className="flex flex-row items-center p-2 my-5 rounded-md w-full sm:w-1/2 bg-white border border-slate-300">
            <div className='mx-2'>
                <img src={search} />
            </div>
            <input
                placeholder="Search Repositories"
                className="flex-1 text-black border-none focus:outline-0"
                autoCapitalize="none"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
