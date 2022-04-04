import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import MasonryLayout from './MasonryLayout';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogout } from 'react-google-login';
import userApi from '../api/UserApi';
import pinApi from '../api/PinApi';
const UserProfile = () => {

    const [user, setUser] = useState(null);
    const [pins, setPins] = useState(null);
    const [text, setText] = useState('Created');
    const [activeBtn, setActiveBtn] = useState('created');

    const navigate = useNavigate();
    const {userId} = useParams();
    console.log(userId);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await userApi.getUser(userId);
            setUser(userData);
            // console.log(userData);
            if(text === 'Created') {
                setPins(userData.listCreated)
            }else {
                const pinsByUserLike = await pinApi.getPinsByUserLike(userId);                    
                setPins(pinsByUserLike)
            }
        }
        fetchUser();
    }, [text, userId])

    // console.log(pins);
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

     //style btn
     const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
     const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none'
 
     const randomImage = 'https://source.unsplash.com/1600x900/?nature,photography,technology';

    return (
        <div className='relative pb-2 h-full justify-center items-center'>
            <div className='flex flex-col pb-5'>
                <div className='relative flex flex-col mb-7'>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-full h-3/6 2xl:h-510 xl:h-96 object-cover'
                            src={randomImage} alt="user-profile" />
                        <img className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
                            src={user?.imageUrl} alt="user-avatar" />
                    </div>
                    <h1 className='font-bold text-2xl text-center mt-3'>
                        {user?.userName}
                    </h1>
                    <div className='absolute top-0 z-1 right-0 p-2'>
                        {userId === user?.idGoogle && (
                            <GoogleLogout
                                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <AiOutlineLogout color="red" fontSize={21} />
                                    </button>
                            )}
                                onLogoutSuccess={logout}
                                cookiePolicy="single_host_origin"
                          />
                        )}
                    </div>
                </div>
                <div className='text-center mb-7'>
                    <button
                        className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
                        type='button'
                        onClick={(e) => {
                            setText(e.target.textContent)
                            setActiveBtn('created')
                        }}
                        
                    >
                        Created
                    </button>
                    <button
                        className={`${activeBtn === 'Liked' ? activeBtnStyles : notActiveBtnStyles}`}
                        type='button'
                        onClick={(e) => {
                            setText(e.target.textContent)
                            setActiveBtn('Liked')
                        }}
                    >
                        Liked
                    </button>
                    {pins?.length ? (
                    <div className='px-2'>
                        <MasonryLayout pins = {pins}/>
                    </div>
                    ) : (
                        <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
                            No Pins Found!
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default UserProfile
