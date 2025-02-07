import { useEffect, useState } from "react";
import useAxiosSecure from "../../CustomHockes/useAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const UserReview = () => {
    const axiosSecure = useAxiosSecure()
    const [userReview, setUserReview] = useState();
    const [slides, setSlides] = useState(1);
    const [sortValu, setSortValue] = useState('')


    useEffect(() => {
        axiosSecure.get(`/reviews?value=${sortValu}`)
            .then(res => setUserReview(res.data))

    }, [axiosSecure, sortValu])



    // console.log(sortValu);





    useEffect(() => {
        const updateSlides = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1100) {
                setSlides(3);
            }
            else if (screenWidth >= 860) {
                setSlides(2);
            }
            else {
                setSlides(1);
            }
        };

        window.addEventListener('resize', updateSlides);
        updateSlides();

        return () => {
            window.removeEventListener('resize', updateSlides);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    // console.log(userReview);

    return (

        <div className=" py-10 w-full my-10 bg-cover bg-center " style={{
            backgroundImage: "linear-gradient(to left, rgba(74,74,74,0.3), rgb(0 0 0 / 99%)), url('https://i.ibb.co/CJ1fy8G/the-anam-twi-Ic-Isp2s-unsplash-1.jpg')"
        }}>
            <div className="max-w flex justify-end items-center">
                <div className="Lg:w-full md:w-full w-11/12 flex justify-start items-start flex-col ">
                    <div className="text-start px-5 lg:pr-7 flex justify-between items-center w-full">

                        <h1 className="text-white text-3xl mb-4">What Client`s Say?</h1>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-sm mx-1 hover:text-gray-900 text-gray-900  rounded-sm border-none border-b-2 bg-[#ffffff76]  "
                            >Sort By Date</div>
                            <ul tabIndex={0} className=" text-gray-50 dropdown-content z-[1] menu px-2 shadow rounded-sm w-52">
                                <li><a onClick={() => setSortValue('recently')} className={`border-b-2  ${sortValu === 'recently' ? 'bg-slate-600' : 'bg-slate-800'}`}>Recently</a> </li>
                                <li><a onClick={() => setSortValue('random')} className={`border-b-2  ${sortValu === 'random' ? 'bg-slate-600' : 'bg-slate-800'}`}>Random</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full  ">
                       
                        {
                            userReview ? <>
                                <div className="slider-containe w-full">
                                    <Slider {...settings} className=" w-full items-center flex justify-end rounded-lg">
                                        {
                                            userReview.map(data => <div key={data._id}>
                                                <div className="card rounded-md  bg-[#f8efefdd] shadow-lg shadow-gray-500 m-4 overflow-hidden h-[250px]">
                                                    <div className="  p-3">

                                                        <div className=" flex items-center gap-2 border-b-2 border-black pb-2">
                                                            <div className="h-10 w-10 border rounded-full border-black">
                                                                <img className="h-full w-full rounded-full" src={data.photoURL} alt="" />
                                                            </div>
                                                            <div>
                                                                <h1 className="text-lg text-black   ">{data.userName}</h1>
                                                                <p className=" text-xs ">{data.time}</p>
                                                            </div>

                                                        </div>
                                                        <p>{data.rating && Array(parseInt(data.rating)).fill().map((_, index) => <span className="text-xs text-red-700 pl-2" key={index}>&#9733;</span>)}</p>
                                                        <p className="py-3 text-sm text-black">{data.comment}</p>

                                                    </div>
                                                </div>
                                            </div>)
                                        }


                                    </Slider>
                                </div>


                            </> : <>Data Not Available</>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserReview;