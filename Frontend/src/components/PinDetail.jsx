import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import ModalCustom from '../utils/ModalCustom';
import pinApi from '../api/PinApi';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import Spinner from './Spinner';

const PinDetail = ({user}) => {
    
    const { pinId } = useParams();
    
    //state
    const [pinDetail, setPinDetail] = useState();

    //call API
    useEffect(() => {
        const fetchPinDetail = async () =>{
            const dataPinDetail = await pinApi.getPinById(pinId);
            setPinDetail(dataPinDetail);
            // console.log(dataPinDetail);
        }
        fetchPinDetail();
    },[pinId])

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    let modalOpen = location.state?.open
    const handleClose = () => {
        modalOpen = false;
        navigate(-1);

    }

    if (!pinDetail) {
        return (
            <Spinner message="Showing pin" />
        );
    }

    return (
        <div className=' '>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <ModalCustom isOpen = {modalOpen} handleClose={handleClose} className='w-screen'>
                <div className="flex xl:flex-col flex-col m-auto bg-white p-4 rounded-md h-max">
                    <div className='flex flex-row items-start justify-between'>
                        <Link
                            to={`/user-profile/${pinDetail?.postedBy?.idGoogle}`}
                            className='flex gap-2 m-5 items-center bg-white rounded-lg'
                        >
                            <img src={pinDetail?.postedBy?.imageUrl} alt="user-profile" className='w-10 h-10 rounded-full object-cover'/>
                            <p className='font-semibold capitalize'>{pinDetail?.postedBy?.userName}</p>
                        </Link>
                        <button className='m-5 items-center h-12 px-4 p-2 mx-2 rounded-md bg-emerald-500 hover:bg-emerald-600 font-semibold text-white transition-all duration-300 ease-in-out'>
                            <div className="flex gap-2 items-center">
                                <a
                                    href={`${pinDetail?.url}`}
                                    download
                                >
                                    Download
                                </a>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center items-center md:items-start flex-initial relative object-contain w-full">
                    {pinDetail?.format === 'mp4' ? 
                        (
                            <video preload='metadata' controls autoPlay className='w-fit h-fit object-cover'>
                                <source src={pinDetail?.url} type='video/mp4'/>
                            </video>
                        ) : (
                            <img
                            className="h-full object-contain"
                            src={pinDetail?.url}
                            alt="user-post"
                            />
                        )
                    }
                    </div>
                    <div className="w-full p-5 flex-1 xl:min-w-620">
                        <div className="flex items-center justify-between">
                            <a href={pinDetail?.destination} target="_blank" rel="noreferrer" 
                                className='flex items-center'
                            >
                                <AiOutlineLink />
                                {pinDetail?.destination}
                            </a>
                        </div>
                        <div className='' >
                            <h1 className="text-4xl font-bold break-words mt-3">
                                {pinDetail?.title}
                            </h1>
                            <p className="mt-3">{pinDetail?.about}</p>
                        </div>

                        <h2 className="mt-5 text-2xl">Comments</h2>
                        <div className='max-h-370 overflow-y-auto'>
                            {/* {pinDetail.comments?.map((comment) => (
                                <div className="flex gap-2 mt-5 items-center bg-white rounded-lg" key={comment.comment}>
                                    <img
                                        src={comment.postedBy?.image}
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        alt="user-profile"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-bold">{comment.postedBy?.userName}</p>
                                        <p>{comment.comment}</p>
                                    </div>
                            </div>
                            ))} */}
                        </div> 
                        <div className="flex flex-wrap mt-6 gap-3">
                            <Link to={`/user-profile/${user.idGoogle}`}>
                                <img src={user.imageUrl} className="w-10 h-10 rounded-full cursor-pointer" alt="user-profile" />
                                {/* <img src={pinDetail?.postedBy?.imageUrl} alt="user-profile" className='w-10 h-10 rounded-full object-cover'/> */}
                            </Link>
                            <input
                                className=" flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
                                type="text"
                                placeholder="Add a comment"
                                
                            />
                            <button
                                type="button"
                                className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
                                
                            >
                                Post
                            </button>
                        </div>
                    </div>
                    {/* <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptate pariatur delectus doloremque officiis? Asperiores eius cupiditate vitae. Provident dolor facere excepturi distinctio voluptatibus enim quisquam porro dignissimos exercitationem ipsum.
                        Eaque architecto suscipit libero alias quod quo illum beatae debitis voluptatum ducimus, porro inventore qui labore? Fugit, inventore recusandae nesciunt ad quos libero cupiditate, eius aliquam delectus obcaecati dolor laboriosam.
                        Hic exercitationem dolorum corrupti incidunt fugit consequuntur laudantium eligendi animi, maxime ducimus molestias labore sint natus officiis reprehenderit ex. Odio fugiat magnam repellat et deleniti architecto aperiam? Perspiciatis, esse ea!
                        Minus perspiciatis hic quibusdam consequatur. Accusamus ad reprehenderit impedit qui a voluptate eius illo ducimus cupiditate minima at, alias, quam aspernatur modi? Quod quibusdam expedita sed cum hic doloribus in.
                        Laboriosam asperiores ipsam ea reprehenderit odit delectus? Incidunt sit, totam fugiat accusamus sint commodi voluptatum cumque hic praesentium voluptas eligendi? Reprehenderit necessitatibus, eius adipisci temporibus enim iste sit repellendus facere!
                        Officia illum ut blanditiis magni recusandae? Dolores quae nihil deleniti cupiditate dignissimos, nostrum, suscipit, impedit culpa quam iste adipisci officia obcaecati reprehenderit maiores asperiores sapiente dolorem modi nobis facilis ad!
                        Aperiam cupiditate voluptatum ea, blanditiis eaque libero autem possimus natus corporis odio consequuntur ipsum ipsa ullam illum illo sunt! Minima libero vero corporis consequuntur ullam, inventore quisquam quas cupiditate debitis.
                        Incidunt quae nihil eaque explicabo esse ipsum laborum ex cumque libero itaque iusto et reiciendis dicta illum similique, temporibus ipsam ratione ab officiis. Laboriosam nobis porro tempora quos, officiis repellat?
                        Nihil possimus sed voluptas odio ex tempore velit numquam in error, veritatis cupiditate unde, exercitationem voluptate! Quasi, quas et, obcaecati soluta, modi magni impedit ullam distinctio veniam commodi alias numquam!
                        Aliquam eos placeat deserunt ad dolores modi numquam hic alias consectetur temporibus, ratione obcaecati fugiat ducimus esse aliquid saepe eius sit, sequi inventore ab quaerat aspernatur non quam? Aliquid, minus.
                        Voluptatum, excepturi blanditiis. Laboriosam minus dolore, exercitationem similique dolorem quidem hic illo tempora corrupti aut dignissimos corporis voluptas reiciendis et porro? Ullam id quod error, aspernatur soluta iure quis eos.
                        Voluptas consequatur fugit nam vitae deleniti, reprehenderit quos, nihil possimus explicabo, odit qui! Maxime, autem. Vero totam facilis voluptatum ipsa nihil. Consectetur cupiditate voluptates similique maiores saepe? Ab, mollitia facilis?
                        Esse nam omnis aliquid, ut quasi porro, accusamus dignissimos eos molestias iste facere qui vel hic aperiam repellendus cupiditate culpa est repellat architecto assumenda libero quisquam odit unde! Temporibus, culpa!
                        Distinctio inventore facilis perspiciatis, cupiditate explicabo cum. Recusandae hic explicabo quos tempore impedit veniam maxime suscipit numquam doloremque modi! Animi odit doloribus repudiandae eligendi temporibus! Dolor consequatur facilis sunt explicabo!
                        Neque qui nisi ipsam adipisci dolores iure distinctio quo quisquam! Molestias delectus dolore iusto doloremque est blanditiis! Quam recusandae, eos adipisci neque ullam velit vel, unde quia id, molestias dolorum.
                        Esse eaque velit adipisci animi, atque porro assumenda voluptas sapiente reiciendis. Fugiat libero ea veniam qui odit quos, quia illo. Quasi impedit quisquam pariatur quam quae rem distinctio ratione ex?
                        In cumque ipsum rem ab labore, ipsam saepe eius nesciunt commodi odit vel deleniti dignissimos voluptas quis architecto magnam sapiente neque blanditiis perferendis. Obcaecati maiores nesciunt recusandae, impedit tempore molestiae?
                        Mollitia doloremque alias asperiores cumque quaerat recusandae minus quo, quas veritatis sit magni blanditiis quam assumenda facere id explicabo harum libero, dolores natus obcaecati delectus quisquam? Quis quasi iusto perferendis.
                        Rerum natus illo aliquid atque eum, veniam id laborum maxime autem tempore dolorem sequi deserunt esse eveniet tenetur? Sapiente consequuntur quam hic ut unde beatae nobis doloremque ratione voluptatibus eos?
                        Ipsum molestias ut adipisci est veritatis aspernatur asperiores at sequi sint ullam! Expedita cumque neque soluta, exercitationem reprehenderit nulla deserunt dolore? Vitae molestias quibusdam illum ipsa itaque quidem voluptates praesentium.
                        Quia tenetur itaque nostrum magni voluptas? Iure quisquam, corrupti voluptas ad placeat vero, harum necessitatibus accusamus voluptates fuga blanditiis hic neque dolor nihil odio nobis dicta quasi totam, dolores quaerat.
                        Porro, tempora earum tenetur corrupti iusto aperiam nihil a, eum praesentium amet nulla aliquam iure voluptatem ea vel perferendis blanditiis. Nihil assumenda atque quos doloremque, animi numquam dolor ad soluta.
                        Esse dolorem ab aliquid voluptas adipisci sapiente, reiciendis sequi sunt hic, dignissimos consequatur fugit fugiat consectetur numquam commodi, provident vero aspernatur impedit beatae porro explicabo. Assumenda saepe nihil non impedit!
                        At fuga aspernatur enim temporibus aliquam porro quidem vero! Consequatur optio molestias, ex dolorem nemo veritatis laudantium, laboriosam ipsa quas quae, omnis cum ea culpa quos numquam cumque voluptatibus eaque.
                        Fugiat repudiandae consequatur maxime nihil sequi. Ab provident commodi veniam error tempore cumque numquam impedit, officiis est cupiditate, illum consequuntur aliquid vitae ipsam molestiae accusamus fuga aliquam soluta praesentium amet.
                        Laboriosam magnam error quam accusantium inventore nostrum quo tempora minima voluptates perspiciatis, quidem ut architecto adipisci odit modi! Repellat veritatis neque earum vitae at ea in quas, quidem provident odit.
                        Delectus esse, provident praesentium repellat velit excepturi voluptatum nobis? Voluptas ea quia doloribus ab, suscipit, cupiditate quaerat, voluptate accusamus magnam veritatis voluptatum. Animi repudiandae doloremque error, explicabo eum recusandae. Ad?
                        Tenetur, iusto quo voluptas tempore sapiente minima. Excepturi aut autem provident tempora natus deleniti at, blanditiis quas ratione eum nulla eveniet iusto cumque debitis tenetur veritatis ipsam distinctio quos maxime?
                        Molestias cumque harum impedit quibusdam sunt ut tenetur voluptas quis accusamus, suscipit, mollitia ducimus? Architecto tempore autem a soluta. Repellendus consequuntur cumque excepturi sapiente sit voluptates vero maxime dolore rerum.
                        Modi harum odio quos ea expedita et, ipsam itaque autem molestias commodi iusto dignissimos praesentium labore cumque blanditiis incidunt culpa excepturi ex amet! Quisquam totam vero id quae excepturi sequi.
                    </div> */}
                </div>
            </ModalCustom>
                    )
        </div>
    )
}

export default PinDetail
