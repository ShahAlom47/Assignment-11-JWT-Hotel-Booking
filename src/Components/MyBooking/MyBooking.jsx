import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { data } from "autoprefixer";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/booking?email=${user?.email}`)
            .then(data => setMyBooking(data.data))
            .catch(err => console.log(err))

    }, [axiosSecure,user])
    console.log(myBooking);

    return (
        <div>

        </div>
    );
};

export default MyBooking;