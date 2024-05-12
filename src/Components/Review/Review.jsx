import { useNavigate, useParams } from "react-router-dom";
import ReviewPage from "./ReviewPage";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const Review = () => {
const {id}=useParams()
const navigate =useNavigate()
console.log(id);
    return (
        <div className="py-20 bg-[#e9e6e3]">
      <div className="max-w ">
      <div className="  border-b-2 border-black py-4  flex gap-5 justify-start items-center  ">
        <FaArrowAltCircleLeft onClick={()=>navigate(-1)} className="text-xl btn btn-circle w-8 h-8" />
            <h1 className="text-2xl    border-gray-700" >Reviews</h1>
        </div>

           <div className="max-w">
           <ReviewPage roomId={id}></ReviewPage>
           </div>
      </div>
           
            
        </div>
    );
};

export default Review;