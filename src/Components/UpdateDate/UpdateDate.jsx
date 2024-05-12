
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../CustomHockes/useAxios";


const UpdateDate = () => {
  


    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const axiosSecure= useAxiosSecure()
    const [bookingData, setBookingData] = useState([]);





    useEffect(() => {
        axiosSecure(`/booking/single?userEmail=${user.email}&roomId=${id}`)
            .then((data) => setBookingData(data.data))

    }, [axiosSecure, id,user])




    const handelForm = (e) => {
        e.preventDefault()
        const form = e.target
        const arrDate = form.arrDate.value;
        const depDate = form.depDate.value;
        const formData = {arrDate,depDate};
        console.log(formData)

        axiosSecure.put(`/update-date?userEmail=${user.email}`,{formData})
        .then(res=>console.log(res))



    }

 
console.log(bookingData[0]?.arrDate);

    return (
        <div className="py-20 bg-[#ceccc9  bg-center bg-cover min-h-screen bg-[#51515a]  "   >
            <ToastContainer />
            <div className="max-w flex justify-center"  >


                <div className=" lg:w-6/12 md:w-6/12 relative bg-opacity-10 bg-[#dfdbb494] backdrop-blur-md p-8 rounded-lg shadow-lg">

                    <h1 className=" text-3xl  border-b-2 pb-4  m-auto  border-gray-900" >Update Date</h1>
                    <form onSubmit={handelForm} className="my-5 space-y-4" >
                       
                        <div className="flex gap-5 justify-center ">
                            <div>
                                <label htmlFor="name"> Arrival Date <span className="text-red-600">*</span></label>
                                <input type="text" name="arrDate"  defaultValue={bookingData[0]?.arrDate} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email"> Departure Date <span className="text-red-600">*</span></label>
                                <input type="text" name="depDate"  defaultValue={bookingData[0]?.depDate} className="p-1 px-3 rounded-md borden border-b-2 border-black bg-transparent placeholder-gray-900 outline-none" />

                            </div>
                        </div>

                       

                        <input type="submit" value="Update" className=" rounded-md bg-gray-800 w-full my-5 text-white btn hover:text-black font-semibold" />





                    </form>

                </div>




            </div>


        </div>
    );
};

export default UpdateDate;