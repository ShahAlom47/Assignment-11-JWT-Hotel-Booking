import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaCarSide, FaRegEdit } from "react-icons/fa";


const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/booking?email=${user?.email}`)
            .then(data => setMyBooking(data.data))
            .catch(err => console.log(err))

    }, [axiosSecure, user, myBooking])


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
                        console.log(data.data.deletedCount);
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
                                }).catch(err => console.log(err))
                        }
                    }).catch(err => console.log(err))
            }
        });


        }
        else {

            toast.error('Sorry, you must cancel at least 1 day in advance. ')
        }


      





    }

    return (
        <div className="py-20 bg-[#ceccc9] min-h-screen">
            <ToastContainer></ToastContainer>
            <div className=" mb-12 flex justify-start border-b-2 border-gray-700 ">
                <h1 className=" text-3xl  max-w-6xl   pb-6 mx-10 block    border-gray-700" >My Booking</h1>
            </div>
            <div className="max-w space-y-3 " >
                {
                    myBooking.map((data) => <div key={data?._id} className="lg:flex md:flex gap-6 p-4 border-b-2 border-gray-700">
                        <div className="lg:w-3/12 md:w-3/12">
                            <img className="h-full w-full" src={data.roomPhoto} alt="Room Photo" />
                        </div>
                        <div className="flex-1 text-sm">
                            <h1 className="text-lg">{data?.roomName}</h1>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Name: </span> {data?.name}</p>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Name: </span> {data?.email}</p>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Departure Date: </span> {data?.depDate}</p>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Arrival Date: </span> {data?.arrDate}</p>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Price: </span> <span className="text-xl text-yellow-600">${data?.roomPrice}</span> /NIGHT</p>
                            <p className="text-gray-800"> <span className="text-l font-semibold">Room Size: </span> {data?.roomSize}</p>
                            <p className="text-gray-800 flex items-center gap-3"> <span className="text-l font-semibold ">Free PickUp: </span>  {data?.pickup} <FaCarSide className="text-yellow-800" /></p>
                            <div className="flex gap-2 mt-3 mx-0">
                                <Link to={`/room-details/${data?.roomId}`}><button className="btn btn-sm rounded-sm bg-gray-900 hover:text-gray-900 border-none text-white"> View Details</button></Link>
                                <Link to={`/update-date/${data?.roomId}`}><button className="btn btn-sm rounded-sm bg-gray-900 hover:text-gray-900 border-none text-white"><FaRegEdit /> Update Date</button></Link>
                                <button onClick={() => handelCancel(data._id, data?.roomId)} className="btn btn-sm rounded-sm bg-red-500 text-white border-none "> Cancel Booking</button>

                            </div>

                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default MyBooking;