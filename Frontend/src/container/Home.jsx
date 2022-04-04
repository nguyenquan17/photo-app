import React, {useEffect, useState, useRef} from 'react'
import userApi from '../api/UserApi';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import logo from '../assets/iris1.png';
import UserProfile from '../components/UserProfile';
import Pins from './Pins';
import PinDetail from '../components/PinDetail';

const Home = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState(null);
    const scrollRef = useRef(null);

    const userInfo = localStorage.getItem('USER') !== 'undefined' ? JSON.parse(localStorage.getItem('USER')) : localStorage.clear();
    useEffect(() => {
        const fetchUser = async () => {
            const userData = await userApi.getUser(userInfo?.googleId);
            setUser(userData);
        }
        fetchUser();
    }, [])

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    });

    return (
        <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar user = {user && user}/>
            </div>
            <div className='flex md:hidden flex-row'>
                <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
                    <HiMenu fontSize={40} 
                            className="cursor-pointer" 
                            onClick={() => setToggleSidebar(true)}
                    />
                    <Link to='/'>
                        <img src={logo} alt="logo" className='w-28' />
                    </Link>
                    <Link to={`user-profile/${user?.idGoogle}`}>
                            <img src={user?.imageUrl} alt="logo" className="w-10 rounded-full" />
                    </Link>
                </div>
                {toggleSidebar && (
                    <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
                        <div className='absolute w-full flex justify-end items-center p-2'>
                            <AiFillCloseCircle 
                                fontSize={35} 
                                className='cursor-pointer'
                                onClick={() => setToggleSidebar(false)}
                            />
                        </div>
                        <Sidebar user = {user && user} closeToggle={setToggleSidebar}/>
                    </div>
                )}
            </div>
            <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
                <Routes>
                    {/* navigate to user-profile */}
                    <Route path="user-profile/:userId" element={<UserProfile />}> 
                        <Route path="pin-detail/:pinId" element={<PinDetail user={user && user}/>}></Route>
                    </Route>
                    {/* navigate to Pins */}
                    <Route path="/*" element={<Pins user={user && user} />} />
                    {/* <Route path="/*" element={<PinDetailModal user={user && user} />} /> */}
                    
                </Routes>
            </div>
        </div>
        
    )
}

export default Home
