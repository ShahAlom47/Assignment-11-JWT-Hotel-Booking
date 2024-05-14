import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../CustomHockes/useAxios";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ReviewPage from "../Review/ReviewPage";
import { Helmet } from "react-helmet";


const RoomDetails = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { id } = useParams()
    const [roomData, setRoomsData] = useState([]);
   

    useEffect(() => {
        axiosSecure(`/room/${id}`)
            .then((data) => { setRoomsData(data?.data) })


    }, [axiosSecure, id])



  




    const handelBooking = (id) => {
        if (!roomData?.availability) {
            toast.info('This room already booked, Please choose another')
            return
        }
        navigate(`/room/booking/${id}`)
    }

   



    return (
        <div className="py-20 bg-[#ceccc9]">
             <Helmet>
                <title>KingLion |Room Details  </title>
            </Helmet>
            <div className=" mb-12 flex justify-center">
                <h1 className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >Details</h1>
            </div>


            <div className="max-w">
                <div className="card lg:w-10/12 md:w-10/12 m-auto bg-base-100 shadow-2xl shadow-[#19191c] relative overflow-hidden ">
                    <p className="top-1 right-1 absolute">
                        {
                            roomData?.availability ? <p className="bg-green-500 text-xl text-center font-semibold w-60 absolute h-10 top-9  -right-20 rotate-45 "> Available</p>
                                : <p className="bg-yellow-500 text-center text-xl font-semibold w-60 absolute top-9 -right-20 rotate-45 "> Booked</p>
                        }

                    </p>
                    <figure className="relative" ><img src={roomData?.image} alt="Shoes" />
                        {
                            roomData?.special_offers ? <div className="bg-yellow-600 absolute bottom-0 right-2 p-5 lg:pt-16 md:pt-10 pt-8 w-4/12  rounded-t-full lg:h-48 ">
                                <p className="lg:text-5xl md:text-3xl text-2xl font-bold  text-center ">OFFER</p>
                                <p className="text-center font-semibold ">{roomData?.special_offers}</p>
                            </div> : <></>
                        }
                    </figure>

                    <div className="p-7 ">
                        <div className="">
                            <h2 className="card-title text-2xl border-b">{roomData?.description}</h2>
                            <p className="text-gray-500 my-4">{roomData?.details}</p>
                            <p className="text-gray-700"> <span className="text-lg font-semibold">Price:</span> <span className="text-2xl text-yellow-600">${roomData?.price_per_night}</span> /NIGHT</p>
                            <p className="text-gray-700"> <span className="text-lg font-semibold">Room Size:</span> ${roomData?.room_size}</p>
                            {
                                roomData?.availability ?
                                    <p className=" "> <span className="text-lg font-semibold" >Availability:</span> <span className="bg-green-400 p-1 px-2 rounded-sm">Available</span> </p>
                                    : <p className=" "> <span className="text-lg font-semibold">Availability:</span> <span className="bg-yellow-500 p-1 px-2 rounded-sm">Booked</span> </p>
                            }
                        </div>
                        <div className="card-actions justify-end flex-row items-end mt-3">
                            <button onClick={() => navigate(-1)} className="btn-sm  btn rounded-sm bg-transparent  border-2 hover:border-black  border-black w-32 hover:text-gray-900"> <FaArrowAltCircleLeft /> Back</button>
                            <button onClick={() => handelBooking(roomData?._id)} className="btn-sm  btn rounded-sm bg-transparent  border-2 hover:border-black  border-black w-32 hover:text-gray-900"> Book Now</button>
                        </div>


                    </div>

                    <div className="reviewSection p-8">
                    <h1 className="my-3 border-t-2 border-b-2">Reviews</h1>

                        <ReviewPage roomId={roomData._id}></ReviewPage>
                    </div>

                </div>

                <ToastContainer />

            </div>
        </div>
    );
};

export default RoomDetails;