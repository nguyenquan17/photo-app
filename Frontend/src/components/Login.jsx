import React from 'react'
import { useNavigate } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import {FcGoogle} from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logoWhite.png";
import userApi from '../api/UserApi';
const Login = () => {

    const navigate = useNavigate();

    const responseGoogle = async (res) => {
        localStorage.setItem('USER', JSON.stringify(res.profileObj)) //stringify(obj -> json)
        const {name, googleId, imageUrl, email} = res.profileObj
        console.log(res.profileObj);
        const newUser = {
            idGoogle: googleId,
            email: email,
            userName: name,
            imageUrl: imageUrl
        }
        userApi.createUser(newUser);
        navigate('/')

    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video src={shareVideo} type="video/mp4" controls={false} play loop muted className='w-full h-full object-cover'/>
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} alt="logo" width="100px"/>
                    </div>
                    <div className='shadow-2xl'>
                        <GoogleLogin 
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            render={(renderProps) => (
                                <button
                                    type='button'
                                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-4'/> Sign in with Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
