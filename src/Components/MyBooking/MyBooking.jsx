import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaCarSide, FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import { FcViewDetails } from "react-icons/fc";

import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MyBookingTable from "./MyBookingTable";
// ..
AOS.init();


const MyBooking = () => {
    const { user,themesValue } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [viewStyle,setViewStyle]=useState(false);


    useEffect(() => {
        axiosSecure.get(`/booking?email=${user?.email}`)
            .then(data => setMyBooking(data.data))
            // .catch(err => console.log(err))

    }, [axiosSecure, user, ])
 



    const handelCancel = (id, roomId) => {

        const targetedBooking = myBooking.filter(book => book._id === id)

        const bookingDate =targetedBooking[0].arrDate;
        const providedDateObject = new Date(bookingDate);
        const currentDateObject = new Date();
        const oneDay = 24 * 60 * 60 * 1000;
        const dateDifference = (currentDateObject - providedDateObject) / oneDay;
       



        if (dateDifference >= 1) {
             Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm !"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete?id=${id}&email=${user?.email}`)
                    .then(data => {
                        // console.log(data.data.deletedCount);
                        if (data.data.deletedCount == 1) {

                            axiosSecure.post('/rooms/cancel', { roomId })
                                .then(() => {
                                    toast.success('Successfully Cancel Your Booking')
                                    const remainingData = myBooking.filter(data => data.roomId !== id)
                                    setMyBooking(remainingData)
                                      Swal.fire({
                                        title: "Canceled!",
                                        text: "Your file has been canceled.",
                                        icon: "success"
                                      });
                                }).catch(() =>{})
                        }
                    }).catch(() =>{})
            }
        });


        }
        else {

            toast.error('Sorry, you must cancel at least 1 day in advance. ')
        }


      





    }

    return (
        <div className="py-20 bg-[#85838125] min-h-screen">
             <Helmet>
                <title>KingLion | My Booking  </title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className=" mb-12 flex justify-center border-b-2 border-gray-700 ">
                <h1 className=" text-3xl  max-w-6xl   pb-6 mx-10 block    border-gray-700" >My Booking</h1>
            </div>
      
            <div className="max-w space-y-3 " >
            <div className=" text-4xl ">
                <button onClick={()=>setViewStyle(!viewStyle)} 
                className="mx-5 flex"
                > 
                <GiHamburgerMenu className={`${viewStyle?'text-red-500':''}`} /><CgMenuGridR className={`${viewStyle?'':' text-red-500'}`} /></button>

            </div>
                {
                    viewStyle?<><MyBookingTable data={myBooking} handelCancel={handelCancel} ></MyBookingTable></>: <div>
                    {
                        myBooking.map((data) => <div data-aos="fade-left" key={data?._id} className="lg:flex md:flex gap-6 p-4 border-b-2 border-gray-700">
                            <div  className="lg:w-3/12 md:w-3/12">
                                <img className="h-full w-full" src={data.roomPhoto} alt="Room Photo" />
                            </div>
                            <div className="flex-1 text-sm container">
                                <h1 className="text-lg">{data?.roomName}</h1>
                               
                               <div className="">
                               <p className=""> <span className="text-l font-semibold">Name: </span> {data?.name}</p>
                                <p className=""> <span className="text-l font-semibold">Name: </span> {data?.email}</p>
                                <p className=""> <span className="text-l font-semibold">Departure Date: </span> {data?.depDate}</p>
                                <p className=""> <span className="text-l font-semibold">Arrival Date: </span> {data?.arrDate}</p>
                                <p className=""> <span className="text-l font-semibold">Price: </span> <span className="text-xl text-yellow-600">${data?.roomPrice}</span> /NIGHT</p>
                                <p className=""> <span className="text-l font-semibold">Room Size: </span> {data?.roomSize}</p>
                                <p className=" flex items-center gap-3"> <span className="text-l font-semibold ">Free PickUp: </span>  {data?.pickup} <FaCarSide className="text-yellow-800" /></p>
                              
                               </div>
                                 <div className="flex flex-wrap gap-2 mt-3 mx-0">
                                    <Link to={`/room-details/${data?.roomId}`}><button className="btn btn-sm rounded-sm bg-gray-900 hover:text-gray-500 border-none text-white"><FcViewDetails /> View Details</button></Link>
                                    <Link to={`/update-date/${data?.roomId}`}><button className="btn btn-sm rounded-sm bg-gray-900 hover:text-gray-500 border-none text-white"><FaRegEdit /> Update Date</button></Link>
                                    <button onClick={() => handelCancel(data._id, data?.roomId)} className="btn btn-sm rounded-sm bg-red-500 text-white border-none "><MdOutlineCancel /> Cancel Booking</button>
                                    <Link to={`/review/${data.roomId}`}><button className=' text-gray-700 hover:border-gray-900 btn btn-sm bg-transparent border-none border-b underline '>Write Review</button></Link>
    
                                </div>
    
                            </div>
    
                        </div>)
                    }
                    </div>
                 }
            </div>

        </div>
    );
};

export default MyBooking;