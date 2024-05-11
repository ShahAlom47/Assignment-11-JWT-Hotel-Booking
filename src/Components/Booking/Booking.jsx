import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../CustomHockes/useAxios";


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [roomData, setRoomsData] = useState([]);

    const [pickup,setPickup]=useState('yes')
    const [startDate, setStartDate] = useState(new Date());
    const defaultEndDate = new Date(startDate);
    defaultEndDate.setDate(defaultEndDate.getDate() + 1); // Update defaultEndDate
    const [endDate, setEndDate] = useState(defaultEndDate);

    const arrDate= startDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    const depDate= endDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });


    useEffect(() => {
        axiosSecure(`/room/${id}`)
            .then((data) => { setRoomsData(data.data) })

    }, [axiosSecure, id])


    const handelForm=(e)=>{
        e.preventDefault()
        const form =e.target 
        const name=form.name.value;
        const email=form.email.value ;
        const userEmail=user?.email;
        const roomId=id

        const bookingData= {name,email,userEmail,arrDate,depDate,pickup,roomId}
        console.log(bookingData);

        axiosSecure.post('/booking',{bookingData})
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))


        axiosSecure.post('/rooms/update',{id})
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))

    }

   console.log(user);

    return (
        <div className="py-20 bg-[#ceccc9  bg-center bg-cover min-h-screen  " style={{ backgroundImage: `url(${roomData?.image})` }}  >
            <div className="max-w flex justify-center"  >


                <div className=" lg:w-6/12 md:w-6/12 relative bg-opacity-10 bg-[#dfdbb494] backdrop-blur-md p-8 rounded-lg shadow-lg">

                    <h1 className=" text-3xl  border-b-2 pb-4  m-auto  border-gray-900" >Booking</h1>
                    <form onSubmit={handelForm} className="my-5 space-y-4" >
                        <div className="flex gap-5 justify-center ">
                            <div>
                                <label htmlFor="name"> Name <span className="text-red-600">*</span></label>
                                <input type="text" name="name" id="name" defaultValue={user?.displayName} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email"> Email <span className="text-red-600">*</span></label>
                                <input type="email" name="email" id="email" defaultValue={user?.email} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            </div>
                        </div>

                        <div className="flex gap-5 justify-center ">
                            <div>
                                <label htmlFor="name"> Arrival Date <span className="text-red-600">*</span></label>
                               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email"> Departure Date <span className="text-red-600">*</span></label>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                           
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email">Free Pickup? <span className="text-red-600">*</span></label>

                            <div className="flex gap-5">
                                <label><input
                                        type="radio"
                                        name="pickupOption"
                                        value="Yes"
                                        checked
                                    // checked={pickupOption === 'Yes'}
                                    onChange={()=>setPickup('yes')}
                                    />Yes-Please </label>
                                <label> <input
                                        type="radio"
                                        name="pickupOption"
                                        value="No"
                                    // checked={pickupOption === 'No'}
                                    onChange={()=>setPickup('no')}
                                    /> No-Thanks</label>
                            </div>


                        </div>

                        <input type="submit" value="Confirm" className=" rounded-md bg-gray-800 w-full my-5 text-white btn hover:text-black font-semibold" />





                    </form>

                </div>


            </div>
        </div>
    );
};

export default Booking;