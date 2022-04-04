import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import pinApi from '../api/PinApi';
import Spinner from './Spinner';
import MasonryLayout from './MasonryLayout';

const Feed = () => {
    //show photo list
    const [pins, setPins] = useState(null);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Home');
    const [activeBtn, setActiveBtn] = useState('home');
    const {categoryId} = useParams();



     //style btn
     const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
     const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none'

    //call api get Pin by Category
    
    useEffect(() => {
        setLoading(true);
        const fetchPin = async () => {
            if(categoryId) {
                const pinListByCategory = await pinApi.getPinByCategory(categoryId);
                setPins(pinListByCategory)
                // console.log(pinListByCategory);
                setLoading(false)
            } else {
                const pinList = await pinApi.getAllPin();
                if(text === 'Home'){
                    setPins(pinList)
                    console.log(pinList);
                } else if (text === 'Videos'){
                    let videosData = [...pinList].filter((pin) => {
                        return pin.format === 'mp4';
                    })
                    setPins(videosData);
                    console.log(videosData);
                } else {
                    let gifsData = [...pinList].filter((pin) => {
                        return pin.format === 'gif';
                    })
                    setPins(gifsData);
                    console.log(gifsData);
                }
                setLoading(false)
            }
        }
        fetchPin();
    }, [text,categoryId])

    if(loading) return <Spinner message = "Loading..."/>

    return (
        <div>
            <div className='flex flex-row justify-center items-center'>
                <button
                    className={`${activeBtn === 'home' ? activeBtnStyles : notActiveBtnStyles}`}
                    type='button'
                    onClick={(e) => {
                        setText(e.target.textContent)
                        setActiveBtn('home')
                    }}      
                    >
                    Home
                </button>
                <button
                    className={`${activeBtn === 'videos' ? activeBtnStyles : notActiveBtnStyles}`}
                    type='button'
                    onClick={(e) => {
                        setText(e.target.textContent)
                        setActiveBtn('videos')
                    }}
                >
                    Videos
                </button>
                <button
                    className={`${activeBtn === 'gifs' ? activeBtnStyles : notActiveBtnStyles}`}
                    type='button'
                    onClick={(e) => {
                        setText(e.target.textContent)
                        setActiveBtn('gifs')
                    }}
                >
                    Gifs
                </button>

            </div>
            {pins && (
                <MasonryLayout pins={pins} />
            )}
            <Outlet />
        </div>
    )
}

export default Feed
