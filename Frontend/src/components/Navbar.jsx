import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { AiOutlineLogout ,AiOutlineCloudUpload, AiOutlinePlus} from 'react-icons/ai';
const Navbar = ({ searchTerm, setSearchTerm, user }) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const checkUserExist = () => {
        if(user) {
            navigate('/create-pin',{
                state: {
                    open: true
                }
            });
        }else {
            navigate('/login');
        }
    }
 
    return (
        <div className='relative pb-2 h-full justify-center items-center'>
            <div className='flex flex-col pb-5'> 
                <div className='relative flex flex-col mb-7'> 
                    <div className='flex flex-col justify-center items-center'>
                        <div className='absolute top-0 z-1 right-0 p-2'>

                            {!user ? (
                                <button
                                    type='button'
                                    className='px-6 p-2 mx-2 m-2 rounded-md bg-cyan-500 hover:bg-cyan-600 hover:mt-1 font-semibold text-white transition-all duration-300 ease-in-out'
                                    onClick={login}
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                                    onClick={logout}
                                >
                                    <AiOutlineLogout color="red" fontSize={21} />
                                </button>
                            )}
                        </div>
                        <img src="https://source.unsplash.com/1600x900/?nature,photography,technology" alt="" className='w-full h-3/6 2xl:h-510 xl:h-96 object-cover'/>
                        <div className="absolute flex justify-center items-center w-4/5 md:flex-row flex-col">
                            <div className='flex justify-start items-center w-2/5 h-12 px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm '>

                                <IoMdSearch fontSize={21} className="ml-1" />
                                <input
                                    type="text"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for photos and videos"
                                    value={searchTerm}
                                    onFocus={() => navigate('/search')}
                                    className="p-2 w-full h-full bg-white outline-none"
                                />
                            </div>
                            <div className=''>
                                <button
                                    type='button'
                                    className='flex justify-center items-center h-12 px-6 p-2 mx-2 m-2 rounded-md bg-white hover:bg-emerald-500 hover:text-white font-semibold text-black transition-all duration-300 ease-in-out'
                                    onClick={checkUserExist}
                                >
                                    {/* <Link to="/create-pin" className="md:w-14 md:h-12 flex justify-center items-center"> */}
                                        <AiOutlinePlus />
                                        <p>Photo</p>
                                    {/* </Link> */}

                                </button>
                            </div>

                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

// const NavBarCustom = () => {

//     return (
//         <>
//         </>
//     )
// }

export default Navbar
