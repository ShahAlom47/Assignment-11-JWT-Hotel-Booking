import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/booking?email=${user?.email}`)
            .then(data => setMyBooking(data.data))
            .catch(err => console.log(err))

    }, [axiosSecure, user])
    console.log(myBooking);

    const handelCancel=(id)=>{
        axiosSecure.delete(`/delete?=${id}`)
        .then(data => console.log(data))
        .catch(err => console.log(err))


    }

    return (
        <div className="py-20 bg-[#ceccc9]">
            <div className=" mb-12 flex justify-start border-b-2 border-gray-700 ">
                <h1 className=" text-3xl  max-w-6xl   pb-6 mx-10 block    border-gray-700" >My Booking</h1>
            </div>
            <div className="max-w space-y-3 " >
                {
                    myBooking.map((data) => <div key={data?._id} className="flex gap-6 p-4 border-b-2 border-gray-700">
                        <div className="w-3/12">
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
                            <p className="text-gray-800"> <span className="text-l font-semibold">Free PickUp: </span> {data?.pickup}</p>
                            <div className="flex gap-2 mt-3 mx-0">
                                <Link to={`/room-details/${data?.roomId}`}><button className="btn btn-sm rounded-sm bg-gray-900 hover:text-gray-900 border-none text-white"> View Details</button></Link>
                                <button onClick={handelCancel(data._id)} className="btn btn-sm rounded-sm bg-red-500 text-white border-none "> Cancel</button>

                            </div>

                        </div>
                     
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyBooking;