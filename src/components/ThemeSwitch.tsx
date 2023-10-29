"use client"
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Dropdown from './dropdown'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isActive, setIsActive] = useState(false);

    
    // useEffect only runs on the client, so now we can safely show the UI
    const handleClick = () => {
        setIsActive(!isActive);
    };

    // Show the UI only after the component has mounted on the client side
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const handleChange = (optionId:string) => {
        return optionId
      };
    const show = () => {

        if (theme === 'light') {
            return (
                <Image src='/sun.png' alt='light' width={16} height={16} />
            );
        } else if (theme === 'dark') {
            return <Image src='/moon.png' alt='dark' width={16} height={16} />;
        } else if (theme === 'system') {
            return <Image src='/contrast.png' alt='system' width={16} height={16} />;
        }
    }

        return (
            <div>
                <select value={`${show()}`} onChange={e => setTheme(e.target.value)} className='appearance-none flex items-center gap-1 rounded-lg relative cursor-pointer bg-[#0A58CA] px-[12px] py-[8px]'>
                    <option value="system" className='appearance-none'>
                        <Image src='/contrast.png' alt='light' width={16} height={16} className='inline-block' />
                        <span>Tự động</span>
                    </option>
                    <option value="dark">Dark</option>
                    <option value="light">
                        <Image src='sunIcon.svg' alt='sunIcon' width={24} height={24} className='text-red' />
                    </option>
                </select>


                <div className={`dropdown relative top-0 right-2 ${isActive ? " active" : ""}`}>
                    <button id='btn' className='btn flex items-center gap-1 rounded-lg relative cursor-pointer bg-[#0A58CA] px-[12px] py-[8px]'
                    onClick={handleClick}
                    >
                        <span className='inline-block w-[16px] h-[16px]'>{show()}</span>
                        <Image src='/drop-down-arrow.png' alt='light' width={8} height={4} className='inline-block invert-[94%] sepia-[100%] saturate-[26%] hue-rotate-[92deg] brightness-[107%] contrast-[106%]' />
                    </button>
                    <div className='list absolute scale-y-0 origin-top bg-white text-left transition delay-75'>
                        <li className='flex items-center gap-2 p-[10px] hover:text-white hover:bg-blue-600'>
                            <Image src='/sun.png' alt='light' width={16} height={16} className='inline-block' />
                            <span>Sáng</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src='/moon.png' alt='light' width={16} height={16} className='inline-block' />
                            <span>Tối</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src='/contrast.png' alt='light' width={16} height={16} className='inline-block' />
                            <span>Tự động</span>
                        </li>
                    </div>
                </div>
            </div>
        )
    }

    export default ThemeSwitch