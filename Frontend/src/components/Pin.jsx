import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RiDownloadCloud2Fill } from 'react-icons/ri';
import { AiOutlineLink } from 'react-icons/ai';
import {FcLikePlaceholder, FcLike} from 'react-icons/fc';
import pinApi from '../api/PinApi';
const Pin = ({pin}) => {

    const navigate = useNavigate();
    const [postHovered, setPostHovered] = useState(false);
    const [savingPost, setSavingPost] = useState(false);
    const {id, url, format, destination, savedUserList, postedBy} = pin;
    // console.log(id, title, image, destination,savedUserList);
    // console.log(pin[0]);
    // console.log(savedUserList.length);
    //get user from Storage
    const user = localStorage.getItem('USER') !== 'undefined' 
                ? JSON.parse(localStorage.getItem('USER')) 
                : localStorage.clear();
    // const userId = user.googleId
    //check alreadySaved
    //userLike[1,2,3] ------- userGoogleId 1, 
    //compare if(have) filter savedUserList return new array: [1]
    // then [1].length => 1
    // !1 -> false
    // !false -> true 
    // => saved
    const alreadySaved = !!(savedUserList?.filter((data) => data?.userLike?.idGoogle === user?.googleId))?.length
    // console.log("Saved ?: ", alreadySaved);

    //method
    const openModalPinDetail = () => {
        // setOpen(true);
        if(user === null) {
            navigate('/login')
        }
        else {
            navigate(`pin-detail/${id}`,{state: {
                open: true,
                selectedPage: id
            }})
        }
    }

    const savePin = (id) => {
        if(!alreadySaved) {
            setSavingPost(true)
            const formSave = {
                composeId: {
                    pinId: id,
                    userLike: user?.googleId
                },
                pinSaved: {
                    id: id
                },
                userLike: {
                    idGoogle: user?.googleId
                }
            }
            pinApi.savePin(formSave).then(() => {
                window.location.reload();
                setSavingPost(false);
            })
        }
    }

    return (
        <div className='m-2'>
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                onClick={openModalPinDetail}
                className=" relative cursor-zoom-in hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out "
            >
                {format === 'mp4' ? 
                    (
                        <video preload='metadata' controls loop className='w-fit h-full'>
                            <source src={url} type='video/mp4'/>
                        </video>
                    ) : (
                        <img className="rounded-lg w-full min-h-fit" src={url}  alt="user-post" /> 
                    )
                }
                {postHovered && (
                    <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50' style={{ height: '100%' }}>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <a href={`${url}?dl=`}
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                    className='bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'
                                >
                                    <RiDownloadCloud2Fill />
                                </a>
                            </div>
                            {alreadySaved ? (
                                <button type="button" className="bg-red-200 opacity-70 hover:opacity-100 text-black font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none flex flex-row items-center justify-center">
                                   {savedUserList.length } 
                                   <FcLike />
                                </button>
                            ) : (
                                <button type="button" className="bg-red-200 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        savePin(id)
                                    }}    
                                >
                                    {savingPost ? 'Saving' : <FcLike size={20}/>}
                                </button>
                            )}
                        </div>
                        <div className=" flex justify-between items-center gap-2 w-full">
                            {destination && (
                                <a
                                  href={destination}
                                  target="_blank"
                                  className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
                                  rel="noreferrer"
                                >
                                    <AiOutlineLink />
                                    {destination.length > 20 ? destination.slice(8,20) : destination.slice(8)}{'...'}
                                </a>
                             )}

                        </div>
                        
                    </div>
                )}
            </div>
            <Link
                to={`/user-profile/${postedBy?.idGoogle}`}
                className='flex gap-2 mt-2 items-center'
            >
                <img src={postedBy?.imageUrl} alt="user-profile" className='w-8 h-8 rounded-full object-cover'/>
                <p className='font-semibold capitalize'>{postedBy?.userName}</p>
            </Link>
        </div>
    )
}

export default Pin
