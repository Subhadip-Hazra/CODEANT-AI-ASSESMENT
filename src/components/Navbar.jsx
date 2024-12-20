import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { logo } from '../assets/images';
import { NavBarOptions } from '../constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(menuRef.current, {
                duration: 0.5,
                y: 0,
                ease: 'power3.out',
            });
        } else {
            gsap.to(menuRef.current, {
                duration: 0.5,
                y: '-200%',
                ease: 'power3.in',
            });
        }
    }, [isMenuOpen]);

    return (
        <div>
            {/* Desktop Navbar */}
            <div className='w-[240px]'>
                <div className='h-screen w-[240px] hidden sm:block p-3 fixed bg-white'>
                    <div className='flex flex-col justify-center items-center relative h-full'>
                        <img src={logo} alt='logo' className='my-6 px-4 w-full' />
                        <select className='px-6 p-2 mx-10 w-full rounded-md border border-slate-300 focus:outline-none'>
                            <option className='text-sm font-medium'>UtkarshDhairyaPanwar</option>
                        </select>
                        <div className='mt-6 w-full px-2 flex-1'>
                            {NavBarOptions.map((item) => (
                                <div key={item.id}>
                                    {item.id !== 6 && item.id !== 7 &&
                                        (<div onClick={() => setSelectedOption(item.id)}
                                            className={`flex items-start gap-3 py-2 px-2 rounded-md cursor-pointer ${selectedOption === item.id ? 'bg-blue text-white' : ''
                                                }`}>
                                            <img src={item.imageSrc} alt={item.title} className='w-6 h-6' />
                                            <p className='text-sm font-medium'>{item.title}</p>
                                        </div>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                        <div className='absolute bottom-4 w-full px-2'>
                            {NavBarOptions.filter((item) => item.id === 6 || item.id === 7).map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedOption(item.id)}
                                    className={`flex items-start gap-3 py-3 px-2 rounded-md cursor-pointer ${selectedOption === item.id ? 'bg-blue text-white' : ''
                                        }`}
                                >
                                    <img src={item.imageSrc} alt={item.title} className='w-6 h-6' />
                                    <p className='text-sm font-medium'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='sm:hidden flex flex-row justify-between items-center w-full p-4 bg-white text-white'>
                <img src={logo} alt='logo' className='w-28' />
                <button
                    className='focus:outline-none'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span className='text-2xl z-10 text-black'>
                        {isMenuOpen ? '✖' : '☰'}
                    </span>
                </button>
            </div>

            {/* Animated Mobile Menu */}
            <div
                ref={menuRef}
                className='bg-white sm:hidden shadow-md p-4 w-full absolute min-h-8/12 pb-16'
                style={{ transform: 'translateY(-100%)' }}
            >
                {NavBarOptions.map((item) => (
                    <div key={item.id} className='flex items-center gap-3 p-2'>
                        <img src={item.imageSrc} alt={item.title} className='w-6 h-6' />
                        <p className='text-sm'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
