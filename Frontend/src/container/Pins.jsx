import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import PinDetail from '../components/PinDetail';
import CreatePin from '../components/CreatePin';
import Search from '../components/Search';
import UserProfile from '../components/UserProfile';
const Pins = ({user}) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
        <div className='relative pl-2 md:pl-2'>
            <div className='bg-gray-50'>
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user}/>
            </div>
            <div className='h-full'>
                <Routes>
                    <Route path="/" element={<Feed/>}> 
                        <Route path="pin-detail/:pinId" element={<PinDetail user={user && user}/>}/>
                        <Route path="create-pin" element={<CreatePin user={user && user}/>}/>
                    </Route>
                    <Route path="category/:categoryId" element={<Feed/>}>
                         <Route path="pin-detail/:pinId" element={<PinDetail user={user && user}/>}>
                            {/* <Route path=":pinId" element={<PinDetail user={user && user}/>}></Route> */}
                        </Route> 
                    </Route>
                    {/* <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user}/>}></Route> */}
                    <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>

                </Routes>
            </div>
        </div>
        </>
    )
}

export default Pins
