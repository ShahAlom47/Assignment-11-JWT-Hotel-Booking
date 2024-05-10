import { useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRoomsData] = useState([])
    const axiosSecure = useAxiosSecure()
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [loadingTime, setLoadingTime] = useState(false)

    useEffect(() => {
        axiosSecure.get(('/all-rooms'))
            .then(data => setRoomsData(data?.data))

    }, [axiosSecure])

    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }

    console.log(rooms)
    return (
        <div className="my-16">
            <div className=" mb-16 flex justify-center">
                <h1 className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >Our Available Rooms</h1>

            </div>
            <div className="rooms container  max-w">
                <div className="">

                </div>
                <div>
                    {

                        rooms ? <div className="max-w grid gap-5 md:grid-cols-2 lg:grid-cols-2">
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
                                        <p className="top-1 right-1 absolute">
                                            {

                                                data?.availability ? <p className="bg-green-500 text-center font-semibold w-60 absolute top-5 -right-20 rotate-45 "> Available</p>
                                                    : <p className="bg-yellow-500 text-center font-semibold w-60 absolute top-5 -right-20 rotate-45 "> Booked</p>
                                            }

                                        </p>
                                        {/* <h2 className="card-title mb-8 text-gray-200 font-semibold absolute top-3/4  -left-0 bg-[#000000c3] px-9 py-2 rounded-r-full"
                              
                            >{data.description}</h2> */}
                                        <div className="p-4 flex  flex-col justify-between items-start w-full relative bg-[#ede442bc]  text-gray-800 "
                                            style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'translateY(-100%)' : 'translateY(-0%)' }}>

                                            <h1 className="  text-gray-900 font-semibold text-xl">{data.description}</h1>
                                            <h2 className="  font-semibold text-gray-900 ">$ {data.price_per_night} /NIGHT </h2>
                                            <Link><h1 className="text-gray-100 btn btn-sm bg-gray-800 hover:text-gray-800"> View Review: {data.reviews?.length}</h1></Link>

                                            <button className=" btn-active btn absolute bg-gray-700 hover:text-black pr-16 border rounded-l-full -right-2 bottom-4  text-gray-50 p-3">View Details</button>
                                        </div>
                                    </div>


                                </div>

                                )

                            }

                        </div> : <> {loadingTime ? <div className="  text-center text-4xl text-gray-600"><p>  Data Empty</p></div> : <div className=" flex justify-center p-48"><span className="loading loading-dots loading-lg"></span> </div>}   {setTimeout(() => { setLoadingTime(true) }, 4500)}</>
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;