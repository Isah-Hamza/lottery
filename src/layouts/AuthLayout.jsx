import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png';
import layoutImg from '../assets/images/left-container.svg';
import gradient from '../assets/images/layout-gradient.png';
import Input from '../components/Inputs';
import CountryInput from '../components/Inputs/CountryInput';
import logo_white from '../assets/images/logo_white_2.png';
import layout_image from '../assets/images/layout_image.png'
import { useNavigate } from 'react-router-dom';

export const AuthLayout = ({ children, className, mainClass}) => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = window.localStorage.getItem('token')
    //     if(token){
    //         return navigate('/dashboard');
    //     }
    // }, [])

    return (
        <div className='flex h-screen'>
            <div className="hidden md:block w-[400px] lg:w-[500px] h-full layout relative">
                <img src={layoutImg} alt="layout"
                    className='w-full h-full' />
                <div className="absolute top-10 pl-10 z-10">
                    <img src={logo_white} alt="logo" className='' />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 pl-10 z-10">
                    <img src={layout_image} alt="logo" className='' />
                </div>
                {/* <img src={gradient} alt="gradient" className='absolute w-full inset-0 h-full' /> */}
                <div className="absolute bottom-10 z-10 px-10 text-white">
                    <p className='text-2xl font-bold mb-2'><span className='text-[#FF9B00]'>Manage</span> Your Communities</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Sapien ipsum lorem volutpat magna tortor auctor vitae.</p>
                    <div className='mt-3 flex gap-1'>
                        <div className="w-10 h-0.5 bg-white rounded-lg"></div>
                        <div className="w-4 h-0.5 bg-gray-500 rounded-lg"></div>
                        <div className="w-4 h-0.5 bg-gray-500 rounded-lg"></div>
                    </div>
                </div>
            </div>
            <main className={`flex-1 flex justify-center items-centers p-10 max-h-screen overflow-y-auto ${mainClass}`}>
                <div className={`w-[450px] max-w-[550px] flex flex-col place-content-center ${className}`}>
                    {/* <img src={logo} alt="logo" className='m-auto' />
                    <p className='text-center text-sm font-medium'>Lorem ipsum dolor sit amet consectetur. Sapien ipsum <br className='hidden sm:block' /> lorem volutpat magna tortor.</p> */}
                    {children}
                </div>
            </main>
        </div>
    )
}
