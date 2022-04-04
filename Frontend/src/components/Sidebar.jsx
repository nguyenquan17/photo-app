import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import {FaHashtag} from 'react-icons/fa';
import { categories } from '../utils/categories';
import logo from '../assets/Retro.png';
const Sidebar = ({user, closeToggle}) => {

    console.log(user);
    const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:bg-zinc-300 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out capitalize rounded-lg p-2';
    const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-100 ease-in-out capitalize p-2';

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className='flex flex-col'>
                <Link
                    to="/"
                    className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
                    onClick={handleCloseSidebar}
                >
                    <img src={logo} alt="logo" className="w-10 " />
                    <span className='text-xs whitespace-nowrap'>Photos for everyone</span>
                </Link>
                <div className='flex flex-col gap-5'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={handleCloseSidebar}
                    >
                        <FaHashtag /> Explore
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base 2xl:text-xl m-2">Discover categories</h3>
                    {categories.slice(0, categories.length).map((category) => (
                        <NavLink
                            to={`category/${category.name}`}
                            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                            onClick={handleCloseSidebar}
                            key={category.name}
                        >
                            <img src={category.image} alt='category' className='w-8 h-8 rounded-full shadow-sm'/>
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link
                    to={`user-profile/${user.idGoogle}`}
                    className = 'flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
                    onClick={handleCloseSidebar}
                >
                    <img src={user.imageUrl} className="w-10 h-10 rounded-full" alt="user-profile" />
                    <p>{user.userName}</p>
                    <IoIosArrowForward/>
                </Link>
            )}
        </div>
    )
}

export default Sidebar
