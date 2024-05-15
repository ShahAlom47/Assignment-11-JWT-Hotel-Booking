import { useState } from "react";
import useAxiosSecure from "../../CustomHockes/useAxios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Typewriter from 'typewriter-effect';


const LuxuryRooms = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [loadingTime, setLoadingTime] = useState(false)

    const axiosSecure = useAxiosSecure()

    const { data, isLoading, error } = useQuery({
        queryKey: ['homeRooms'],
        queryFn: async () => {
            const response = await axiosSecure.get('/rooms');
            return response.data

        }
    })

    // useEffect(() => {
    //     axiosSecure.get(('/rooms'))
    //         .then(data => setRooms(data?.data))
    // }, [axiosSecure])






    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }


    if (isLoading) return <div className=" flex justify-center p-48"><span className="loading loading-dots loading-lg"></span> </div>;
    if (error) return <div className="w-10/12 m-auto"> <ErrorPage></ErrorPage></div>;

    return (
        <div className="py-20 my-1">
            <div className=" mb-16 flex justify-center text-4xl">
                {/* <h1 className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >Luxury Rooms & Suites</h1> */}
                <Typewriter
                className='type-Writer'
                options={{
                    strings: ['Luxury Rooms & Suites'],
                    autoStart: true,
                    loop: true,
                    cursor: ''
                  }}
                />
            </div>
            {

                data ? <div className="max-w grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                    {
                        data?.map((data, index) => <div key={data._id}
                            className={`  rounded-lg `}>

                            <div
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={handleMouseOut}
                                className="  w-full  relative  image-full rounded-sm h-60 overflow-hidden  duration-300  bg-none p-0">
                                <figure className="w-full h-full relative">
                                    {
                                        data?.special_offers ? <div className="bg-yellow-600 absolute  z-10 top-0 right-3 lg:pt-6 md:pt-5  w-3/12  rounded-b-full lg:h-24  ">
                                            <p className="lg:text-3xl md:text-2xl text-xl font-bold  text-center "> OFFER</p>
                                            {/* <p className="text-center font-semibold ">{data?.special_offers}</p> */}
                                        </div> : <></>
                                    }
                                    <img
                                        style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'scale(1.20)' : 'scale(1)' }}

                                        className="rounded-md w-full h-full" src={data.image} alt="Shoes" /></figure>
                                <h2 className=" mb-8 text-gray-200 font-semibold absolute top-3/4  -left-0 bg-[#000000c3] lg:px-9 px-4 py-2 rounded-r-full"
                                    style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-125%)' : 'translateY(-0%)' }}
                                >{data.description}</h2>
                                <Link to={`/room-details/${data._id}`}> <h2 className=" mb-8 btn-active text-gray-200 font-semibold absolute top-3/4  -right-1 bg-[#000000c3] hover:bg-[#000000dc] px-8  py-2 rounded-l-full"
                                    style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-125%)' : 'translateY(-0%)' }}
                                >Details</h2></Link>
                                <div className="p-4 flex justify-between items-start w-full relative  bg-[#00000080]  text-gray-800 "
                                    style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'translateY(-70%)' : 'translateY(-0%)' }}>

                                    <h2 className=" text-xl py-1 mb-8 font-semibold text-gray-100 ">$ {data.price_per_night} /NIGHT </h2>

                                    <Link to={`/room/booking/${data?._id}`}> <button className=" btn-active btn absolute bg-gray-700 hover:text-black pr-10 border-none rounded-l-full -right-2 bottom-10  text-gray-50 pl-4">Book Now</button></Link>
                                </div>
                            </div>


                        </div>

                        )

                    }

                </div> : <> {loadingTime ? <div className="  text-center text-4xl text-gray-600"><p>  Data Empty</p></div> : <div className=" flex justify-center p-48"><span className="loading loading-dots loading-lg"></span> </div>}   {setTimeout(() => { setLoadingTime(true) }, 4500)}</>
            }
            <div className="flex justify-center my-7">
                <Link to={'/rooms'}><button className=" btn btn-sm bg-gray-900 text-white hover:bg-gray-600">View More Rooms</button></Link>
            </div>
        </div>
    );
};

export default LuxuryRooms;