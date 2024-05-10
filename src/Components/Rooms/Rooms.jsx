import { useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";

const Rooms = () => {
    const [roomsData,setRoomsData]=useState([])
    const axiosSecure=useAxiosSecure()

    useEffect(()=>{
        axiosSecure.get(('/all-rooms'))
        .then(data=>setRoomsData(data?.data))

    },[axiosSecure])


    return (
        <div className="my-16">
           {roomsData?.length}
        </div>
    );
};

export default Rooms;