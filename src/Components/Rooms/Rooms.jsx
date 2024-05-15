import {  useEffect, useState } from "react";
import useAxiosSecure from "../CustomHockes/useAxios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();



const Rooms = () => {

    const [rooms, setRoomsData] = useState([])
    const axiosSecure = useAxiosSecure()
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [loadingTime, setLoadingTime] = useState(false)
    const [sortValu, setSortValue] = useState('')
    const [filterValue, setFilterValue] = useState({})

    useEffect(() => {
        axiosSecure.get((`/all-rooms?sort=${sortValu}&max=${filterValue?.maxNo}&min=${filterValue?.minNo}`))
            .then(data => setRoomsData(data?.data))

    }, [axiosSecure, sortValu, filterValue])

  









    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }

    const handelFilter = (e) => {
        e.preventDefault()
        const form = e.target
        const maxNo = form.max.value
        const minNo = form.min.value
        const value = { maxNo, minNo }
        setFilterValue(value)
    }


  
  


    return (
        <div className="py-20 bg-[#ceccc985]">
             <Helmet>
                <title>KingLion | Rooms </title>
            </Helmet>
            <div className=" mb-12 flex justify-center">
                <h1 data-aos="fade-down" className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >Our Available Rooms</h1>

            </div>
         


            <div className="rooms container  max-w ">
                <div className="mb-5 flex justify-end">
                    <div>
                        <form onSubmit={handelFilter} className="flex gap-4 " >

                            <input className="px-2 rounded-sm w-20 border border-slate-800" type="number" name="min" id="" placeholder="Minimum Price" />

                            <input className=" border border-slate-800 px-2 rounded-sm w-20" type="number" name="max" id="" placeholder="Maximum Price" />
                            <input type="submit" value="Filter" className="btn btn-sm mx-1 hover:text-gray-900  text-gray-50  rounded-lg border-none border-b-2 bg-slate-800   " />
                        </form>
                    </div>

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm mx-1 hover:text-gray-900 text-gray-50  rounded-lg border-none border-b-2 bg-slate-800  "
                        >Sort By Price</div>
                        <ul tabIndex={0} className=" text-gray-50 dropdown-content z-[1] menu px-2 shadow rounded-sm w-52">
                            <li><a onClick={() => setSortValue('ase')} className={`border-b-2  ${sortValu === 'ase' ? 'bg-slate-600' : 'bg-slate-800'}`}>Hight To Low</a> </li>
                            <li><a onClick={() => setSortValue('dise')} className={`border-b-2  ${sortValu === 'dise' ? 'bg-slate-600' : 'bg-slate-800'}`}>Low To High</a></li>
                        </ul>
                    </div>


                </div>
                <div>
                    <div>
   
                    </div>
                    {

                        rooms ? <div  className="z-0 max-w grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                            {
                                rooms?.map((data, index) => <div key={data._id}
                                data-aos="zoom-in-up"
                                    className={`  rounded-lg `}>


                                    <div
                                        onMouseOver={() => handleMouseOver(index)}
                                        onMouseOut={handleMouseOut}
                                        className="  w-full  relative  image-full rounded-sm h-60 overflow-hidden  duration-300  bg-none p-0">
                                        <figure className="w-full h-full relative"><img
                                            style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'scale(1.20)' : 'scale(1)' }}

                                            className="rounded-md w-full h-full" src={data.image} alt="Shoes" />
                                            {
                                                data?.special_offers ? <div className="bg-yellow-600 absolute 0 left-2 top-0 p-5   rounded-b-full ">
                                                    <p className="text-3xl font-bold  text-center ">OFFER</p>
                                                    {/* <p className="text-center font-semibold ">{data?.special_offers}</p> */}
                                                </div> : <></>
                                            }
                                        </figure>
                                        <p className="top-1 right-1 absolute">
                                            {

                                                data?.availability ? <p className="bg-green-500 text-center font-semibold w-60 absolute top-5 -right-20 rotate-45 "> Available</p>
                                                    : <p className="bg-yellow-500 text-center font-semibold w-60 absolute top-5 -right-20 rotate-45 "> Booked</p>
                                            }

                                        </p>
                                       
                                        <div className="p-4 flex  flex-col justify-between items-start w-full relative bg-[#ede442bc]  text-gray-800 "
                                            style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'translateY(-100%)' : 'translateY(-0%)' }}>

                                            <h1 className="  text-gray-900 font-semibold text-xl">{data.description}</h1>
                                            <h2 className="  font-semibold text-gray-900 ">$ {data.price_per_night} /NIGHT </h2>
                                            <Link to={`/review/${data._id}`}><button className=' text-gray-700 hover:border-gray-900 btn btn-sm bg-transparent border-none border-b underline '>View Review</button></Link>
                                            <Link to={`/room-details/${data._id}`}>   <button className=" btn-active btn absolute bg-gray-700 hover:text-black pr-16 border rounded-l-full -right-2 bottom-4  text-gray-50 p-3">View Details</button></Link>
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