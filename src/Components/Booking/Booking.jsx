import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../CustomHockes/useAxios";


import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";




const Booking = () => {
    const navigate =useNavigate()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [roomData, setRoomsData] = useState([]);


    const [pickup, setPickup] = useState('yes')
    const [startDate, setStartDate] = useState(new Date());
    const defaultEndDate = new Date(startDate);
    defaultEndDate.setDate(defaultEndDate.getDate() + 1); // Update defaultEndDate
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [formDatas, setFormDatas] = useState({})



    const arrDate = startDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const depDate = endDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    useEffect(() => {
        axiosSecure(`/room/${id}`)
            .then((data) => { setRoomsData(data.data) })

    }, [axiosSecure, id])



    const handelForm = (e) => {
        e.preventDefault()


        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const userEmail = user?.email;
        const roomName= roomData?.description;
        const roomPhoto= roomData?.image;
        const roomPrice= roomData?.price_per_night
        const roomSize= roomData?.room_size

        ;
        const roomId = id

        const bookingData = { name, email, userEmail, arrDate, depDate, pickup, roomId,roomName,roomPhoto,roomPrice,roomSize }
        setFormDatas(bookingData)


        document.getElementById('my_modal_5').showModal()






    }

    const handelConfirm = () => {

        console.log(formDatas);
        const modal = document.getElementById('my_modal_5');
        modal.close();


        axiosSecure.post('/booking', { formDatas })
            .then((res) => {
                toast.success('Booking Confirmed')
                setTimeout(() => {
                    navigate(`/room-details/${id}`)
                }, 1500);
            })
            .catch(err => console.log(err))

        console.log(formDatas);

        axiosSecure.post('/rooms/update', { id })
            .then((res) => console.log(res))
            .catch(err => console.log(err))

    }


    // console.log(roomData);

    return (
        <div className="py-20 bg-[#ceccc9  bg-center bg-cover min-h-screen  " style={{ backgroundImage: `url(${roomData?.image})` }}  >
            <ToastContainer />
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
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email"> Departure Date <span className="text-red-600">*</span></label>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />

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
                                    onChange={() => setPickup('yes')}
                                />Yes-Please </label>
                                <label> <input
                                    type="radio"
                                    name="pickupOption"
                                    value="No"
                                    // checked={pickupOption === 'No'}
                                    onChange={() => setPickup('no')}
                                /> No-Thanks</label>
                            </div>


                        </div>

                        <input type="submit" value="Confirm" className=" rounded-md bg-gray-800 w-full my-5 text-white btn hover:text-black font-semibold" />





                    </form>

                </div>




            </div>

            <div className="modal">

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="card card-side bg-base-100 ">
                            <div className="card-body">
                                <h2 className="card-title">{roomData?.description}</h2>
                                <p className="text-gray-800"> <span className="text-lg font-semibold">Price:</span> <span className="text-2xl text-yellow-600">${roomData?.price_per_night}</span> /NIGHT</p>
                            <p className="text-gray-800"> <span className="text-lg font-semibold">Room Size:</span> ${roomData?.room_size}</p>
                        <hr />
                          <div>
                            
                            <p className="text-gray-800"> <span className="text-lg font-semibold">Name: </span> {formDatas?.name}</p>
                            <p className="text-gray-800"> <span className="text-lg font-semibold">Email: </span> {formDatas?.email}</p>
                            <p className="text-gray-800"> <span className="text-lg font-semibold">Departure Date: </span> {formDatas?.depDate}</p>
                            <p className="text-gray-800"> <span className="text-lg font-semibold">Arrival Date: </span> {formDatas?.arrDate}</p>
                            
                            
                          </div>
                                
                            </div>
                        </div>

                        <div className="modal-action">
                            <div className="flex gap-2">
                                <button onClick={() => handelConfirm()} className="btn-sm  btn rounded-sm bg-black text-white  border-2 hover:border-black  border-black w-32 hover:text-gray-900"> Confirm</button>
                                <form method="dialog">
                                    <button className="btn-sm  btn rounded-sm bg-transparent  border-2 hover:border-black  border-black w-32 hover:text-gray-900">Close</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Booking;