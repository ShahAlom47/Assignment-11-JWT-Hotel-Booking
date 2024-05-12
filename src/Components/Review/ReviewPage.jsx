import PropTypes from 'prop-types';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../CustomHockes/useAxios';



const ReviewPage = ({ roomId }) => {
    const [reviews, setReviewData] = useState([]);
    const [myBooking, setMyBooking] = useState([]);
    const [isBooked, setBooked] = useState(false)
    const [rData, setRdata] = useState({})
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const dates = new Date()
    const day = dates.getDate()
    const month = dates.getMonth()
    const year = dates.getFullYear()
    const hours = dates.getHours()
    const minutes = dates.getMinutes()

    const time = `${day}/${month + 1}/${year} ${hours}:${minutes}`;
    const userName = user?.displayName
    const photoURL = user?.photoURL


    useEffect(() => {

        axiosSecure(`reviews/${roomId}`)
            .then((data) => { setReviewData(data?.data) })
    }, [axiosSecure, roomId, user,rData])


    useEffect(() => {
        axiosSecure.get(`/booking?email=${user?.email}`)
            .then(data => setMyBooking(data.data))
            .catch(err => console.log(err))
    }, [axiosSecure, user,])

    console.log(myBooking);


    // Found valid users for review
    useEffect(() => {
        const IsBook = myBooking.find(data => data.roomId === roomId)
        if (IsBook) {
            setBooked(true)
        }
    }, [myBooking, roomId])




    const reviewHandel = (e) => {
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value;
        const rating = form.rating.value;
        const reviewData = { comment, rating, time, userName, roomId, photoURL }

        axiosSecure.post('/review', { reviewData })
            .then((res) => {
                setRdata(reviewData)
                form.reset()
            })
            .catch(err => console.log(err))
    }



    return (


        <div>
            <div className=' space-y-6'>
                {
                    reviews?.length > 0 ? <>
                        {
                            reviews.map((data, index) => <div key={index} className='my-3'>
                                <div className="  flex  items-center gap-4 bg-slate-50 p-2">
                                    <div className="w-10 h-10 rounded-full  ">
                                        {
                                            data?.photoURL ? <><img className='rounded-full w-full h-full' src={data?.photoURL} alt="" /></>
                                                : <img className=" rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                    <div className=" ">
                                        <div className='flex gap-7'>
                                            <p className='text-lg font-semibold'>{data?.userName}</p>

                                            <p>{data.rating && Array(parseInt(data.rating)).fill().map((_, index) => <span key={index}>&#9733;</span>)}</p>
                                        </div>
                                        <div>
                                            <p className='text-xs'>{data?.time}</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className=' py-3 border-b'>{data?.comment}</p>
                                </div>
                            </div>)
                        }

                    </> : <><p className='text-gray-500 italic'>Review Not Available</p></>
                }


            </div>
            <hr />


            <form onSubmit={reviewHandel} className={`flex items-end mt-10 w-full `}>
                <div className='border-2 flex flex-col w-full' >
                    <input type="number" name="rating" max={5} min={1} placeholder='Rating' id="" required />
                    <textarea className='border-t-2 w-full' name="comment" id="" cols="30" rows='4' placeholder='Write your own opinion here' required></textarea>
                </div>
                <input type="submit" className={`btn-pry  `} value="Review" disabled={isBooked ? false : true} />

            </form>
            {
                !isBooked && <p className='text-red-500'>!!! Rom booking will be required for review</p>
            }
        </div>
    );
};

export default ReviewPage;
ReviewPage.propTypes = {
    roomId: PropTypes.object.isRequired
};
