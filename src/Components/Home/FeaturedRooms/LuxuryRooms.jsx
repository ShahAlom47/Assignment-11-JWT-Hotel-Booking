import { useEffect, useState } from "react";
import useAxiosSecure from "../../CustomHockes/useAxios";
import ErrorPage from "../../ErrorPage/ErrorPage";
import { ImCross } from "react-icons/im";


const LuxuryRooms = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [loadingTime,setLoadingTime]=useState(false)

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(('/room'))
            .then(data => setRooms(data?.data))
    }, [axiosSecure])

    console.log(rooms);

    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }

    // console.log(rooms.length);

    const bg = {
        backgroundImage: "url('https://i.ibb.co/9nXGtdZ/epty.jpg')",
    
      };

    return (
        <div className="bg-[#f8f5f0] py-20 my-10">
            <div className=" mb-16">
                <h1 className="text-center text-3xl " >Luxury Rooms & Suites</h1>
            </div>
            {
               
               rooms?   <div className="max-w grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                {
                    rooms?.map((data, index) => <div key={data._id}
                     className={`  rounded-lg `}>

                        <div
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                            className="  w-full  relative  image-full rounded-sm h-60 overflow-hidden  duration-300  bg-none p-0">
                            <figure className="w-full h-full"><img
                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'scale(1.20)' : 'scale(1)' }}

                                className="rounded-md w-full h-full" src={data.image} alt="Shoes" /></figure>
                            <h2 className="card-title mb-8 text-gray-200 font-semibold absolute top-3/4  -left-0 bg-[#000000c3] px-9 py-2 rounded-r-full"
                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-108%)' : 'translateY(-0%)' }}
                            >{data.description}</h2>
                            <div className="p-4 flex justify-between items-start w-full relative bg-[#00000080]  text-gray-800 "
                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'translateY(-70%)' : 'translateY(-0%)' }}>
                                 
                                <h2 className="card-title mb-8 font-semibold text-gray-100 ">$ {data.price_per_night} /NIGHT </h2>

                                <button className=" btn-active btn absolute bg-gray-700 hover:text-black pr-16 border-none rounded-l-full -right-2 bottom-10  text-gray-50 p-3">Book Now</button>
                            </div>
                        </div>
                    </div>

                    )

                }

            </div>:<> {loadingTime?<div  className="  text-center text-4xl text-gray-600"><p>  Data Empty</p></div>:  <div className=" flex justify-center p-48"><span className="loading loading-dots loading-lg"></span> </div> }   { setTimeout(() => { setLoadingTime(true)}, 4500)}</> 
            }

        </div>
    );
};

export default LuxuryRooms;