import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../CustomHockes/useAxios";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [roomData, setRoomsData] = useState([]);

    useEffect(() => {
        axiosSecure(`/room/${id}`)
            .then((data) => { setRoomsData(data.data) })


    }, [axiosSecure, id])


    console.log(roomData);

    return (
        <div className="py-20 bg-[#ceccc9  bg-center bg-cover min-h-screen  " style={{ backgroundImage: `url(${roomData?.image})` }}  >
            <div className="max-w flex justify-center"  >


                <div className=" lg:w-6/12 md:w-6/12 relative bg-opacity-10 bg-[#dfdbb494] backdrop-blur-md p-8 rounded-lg shadow-lg">

                    <h1 className=" text-3xl  border-b-2 pb-4  m-auto  border-gray-900" >Booking</h1>
                    <form className="my-5 space-y-4" >
                        <div className="flex gap-5 justify-center ">
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                        </div>
                        <div className="flex gap-5 justify-center ">
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                        </div>
                        <div className="flex gap-5 justify-center ">
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            <input type="text" placeholder="Type here" className="p-1 px-3 rounded-md border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                        </div>
                        <input type="submit" value="Confirm"  className=" rounded-md bg-gray-800 w-full my-5 text-white btn hover:text-black font-semibold"/>





                    </form>

                </div>


            </div>
        </div>
    );
};

export default Booking;