import PropTypes from 'prop-types';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from '../CustomHockes/useAxios';



const ReviewPage = ({ roomId }) => {
    const axiosSecure= useAxiosSecure()
    const { user } = useContext(AuthContext);
    const dates= new Date()
    const day= dates.getDate()
    const month= dates.getMonth()
    const year= dates.getFullYear()
    const hours= dates.getHours()
    const minutes= dates.getMinutes()

    const time = `${day}/${month+1}/${year} ${hours}:${minutes}`;
    const userName=user.displayName



    const reviewHandel = (e) => {
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value;
        const rating = form.rating.value;
        const reviewData={comment,rating,time, userName,roomId}
        
        
        console.log(reviewData);

        axiosSecure.post('/review',{reviewData})
        .then()
        .catch(err=>console.log(err))
    }


   
    return (


        <div>
            {/* <div className=' space-y-6'>
                {
                    reviews?.length > 0 ? <>
                        {
                            reviews.map((data, index) => <div key={index} className='my-3'>
                                <div className="  flex  items-center gap-4 bg-slate-50 p-2">
                                    <div className="w-10 rounded-full  ">
                                        {
                                            data?.image ? <><img src={data?.image} alt="" /></>
                                                : <img className=" rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                    <div className=" ">
                                        <div className='flex gap-7'>
                                            <p className='text-lg font-semibold'>{data?.user}</p>
                                            <p>Rating:{data?.rating}</p>
                                        </div>
                                        <div>
                                            <p className='text-sm'>time and Date{data?.timeDate}</p>

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


            </div> */}
            <hr />
         

            <form onSubmit={reviewHandel} className='flex items-end w-full'>
                <div className='border-2 flex flex-col w-full' >
                    <input type="number" name="rating" max={5} min={1} placeholder='Rating' id="" />
                    <textarea className='border-t-2 w-full' name="comment" id="" cols="30" rows='4' placeholder='Write your own opinion here'></textarea>
                </div>
                <input type="submit" className='btn-pry' value="Review" />

            </form>
        </div>
    );
};

export default ReviewPage;
ReviewPage.propTypes = {
    roomId: PropTypes.object.isRequired
};
