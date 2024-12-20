import React, { useState } from 'react';
import { CustomButton, Navbar, RepositoryCard } from '../components';
import { RepositoryData } from '../constants';
import SearchInput from '../components/SearchInput';
import { plus, refresh } from '../assets/icons';
import { NoResult } from '../assets/images';

const Repository = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = RepositoryData.filter((item) =>
        item.repoName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='flex flex-col sm:justify-between sm:flex-row'>
            <Navbar />
            <div className='p-3 w-full border sm:m-7 border-slate-300 rounded-md bg-white'>
                <div className='flex flex-col sm:flex-row sm:justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Repositories</h1>
                        <p className='font-extralight tex-sm text-slate-400'>
                            {filteredData.length} total repositories
                        </p>
                    </div>
                    <div className='flex flex-row gap-3 w-10/12 sm:w-1/3'>
                        <CustomButton
                            text={"Refresh All"}
                            width={"127px"}
                            borderColor={"slate-300"}
                            img={refresh}
                        />
                        <CustomButton
                            text={"Add Repository"}
                            width={"127px"}
                            borderColor={"none"}
                            img={plus}
                            bgColor={"blue"}
                            textColor={"white"}
                        />
                    </div>
                </div>
                <SearchInput onSearch={setSearchQuery} />
                <div>
                {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <RepositoryCard
                                key={item.id}
                                link={""}
                                repositoryName={item.repoName}
                                repoType={item.repositoryStatus}
                                repoLanguage={item.technologyUsed}
                                repoStorage={item.storage}
                                updateTime={item.updationTime}
                            />
                        ))
                    ) : (
                        <div className="h-screen w-full flex justify-center items-start ">
                            <div className='flex flex-col justify-center items-center '>
                            <img src={NoResult} width={300} height={300}/>
                            <p className='text-sm font-medium'>No repository found</p>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Repository;
