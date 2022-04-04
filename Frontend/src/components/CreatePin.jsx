import React, {useState, useEffect} from 'react';
import ModalCustom from '../utils/ModalCustom';
import {categories} from '../utils/categories';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Axios from 'axios';
import pinApi from '../api/PinApi';

const CreatePin = ({user}) => {

    //state
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [destination, setDestination] = useState('');
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState(false);
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [format, setFormat] = useState(null);

    // const [preview, setPreview] = useState();
    // const [selectedFile, setSelectedFile] = useState(null);
    const [wrongImageType, setWrongImageType] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    let modalOpen = location.state?.open
    const handleClose = () => {
        modalOpen = false;
        navigate('/')

    }

    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined)
    //         console.log("Run here 1");
    //         return
    //     }
    //     const objImageUrl = URL.createObjectURL(selectedFile)
    //     setPreview(objImageUrl);
    //     console.log("Run here 2");
    //     //clear memory when component is unmounted
    //     return () => {
    //         URL.revokeObjectURL(objImageUrl)
    //         console.log("Run here 3");
    //     }
    // }, [selectedFile])

    const uploadImage = async (e) => {
        let fileImage = e.target.files[0];
        if(fileImage.type === 'image/png' || 
            fileImage.type === 'image/svg' || 
            fileImage.type === 'image/jpeg' || 
            fileImage.type === 'image/gif' || 
            fileImage.type === 'image/tiff' || 
            fileImage.type === 'video/mp4'){
            
            setWrongImageType(false);
            // setLoading(true);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", fileImage);
            formData.append("upload_preset", "u3vef5jg" );
    
            try{
              await Axios.post("https://api.cloudinary.com/v1_1/dv0zrozae/upload", formData)
                .then((response) => {          
                    console.log(response);
                    if(response.status === 200) {
                        setImageAsset(response.data.url)
                        setFormat(response.data.format)
                        setLoading(false)
                    }
                })
                // console.log(imageAsset);
            }catch(error){
                console.log('error', error);
            }
        }else {
            setLoading(false)
            setWrongImageType(true);
            
        }  
    }   

    console.log(imageAsset);
    const createPin = async () => {
        console.log(imageAsset);
        if(title && about && destination && category && imageAsset){
            const formPin = {
                title: title,
                about: about,
                destination: destination,
                category: category,
                url: imageAsset,
                format: format,
                postedBy: {
                    idGoogle: user.idGoogle,
                }
            };
            const data = await pinApi.createPin(formPin).then((res) => console.log(res))
            setLoading(false);
            handleClose();
            return data
        }else{
            setFields(true);
            setTimeout(
                () => {
                  setFields(false);
                },
                2000,
              );
        }
    }

    return (
        <>
            <ModalCustom isOpen={modalOpen} handleClose={handleClose}>
            <div className='flex flex-col justify-center items-center '>
                <div className='flex lg:flex-col flex-col justify-center items-center bg-white lg:p-5 p-3  w-full'>
                    <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
                        <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
                            {loading && (<Spinner />)}
                            {wrongImageType && (<p className='text-red-600'>It&apos;s wrong file type.</p>)}
                            {!imageAsset ? (
                                <label>
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="font-bold text-2xl">
                                                <AiOutlineCloudUpload />
                                            </p>
                                            <p className="text-lg">Click to upload</p>
                                        </div>
                                        <p className="mt-32 text-gray-400">Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB</p>
                                    </div>
                                    <input
                                        type="file"
                                        name="upload-image"
                                        onChange={uploadImage}
                                        className="w-0 h-0"
                                    />
                                </label>  
                            ) : (
                                <div className='relative h-full'>
                                    {format === 'mp4' ? 
                                        (
                                            <video preload='metadata' loop className='w-fit h-full'>
                                                <source src={imageAsset} type='video/mp4'/>
                                            </video>
                                        ) : (
                                            <img src={imageAsset} alt="upload" className='h-full w-full'/>
                                        )
                                    }
                                    <button type='button' 
                                        className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                                        onClick={() => setImageAsset(null)}
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
                        {user && (
                            <div className='flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg'>
                                <img src={user.imageUrl} alt="user" className='w-10 h-10 rounded-full'/>
                                <p className='font-bold'>{user.userName}</p>
                            </div>
                        )}
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Add title here'
                            className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2'
                        />
                        
                        <input 
                            type="text" 
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder='About'
                            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
                        />

                        <input 
                            type="url" 
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder='Add a destination link'
                            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
                        />
                        <div className='flex flex-col'>
                            <div>
                                <p className='mb-2 font-semibold text:lg sm:text-xl'>Choose Category</p>
                                <select 
                                    className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
                                    onChange={(e) => setCategory(e.target.value)}   
                                >   
                                    <option value="">
                                        Select Category
                                    </option>
                                    {categories.map((category) => (
                                        <option key={category.name} value={category.name} className="text-base border-0 outline-none capitalize bg-white text-black ">
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex justify-end items-end mt-5'>
                                <button 
                                    type='submit' 
                                    onClick={createPin}
                                    className='bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none'
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ModalCustom>
        </>
    )
}

export default CreatePin
