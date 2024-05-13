
import { Link } from "react-router-dom";
import Slider from "react-slick";



const SpacialOffer = () => {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`abstract0${i + 1}.jpg`} />
                </a>
            );
        },
        // dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className="py-20 bg-[#ffa723]">
            <div className="max-w  ">


                <div className="lg:flex md:flex bg-[#ffffff] rounded-lg ">
                    <div className=" lg:w-4/12 md:w-4/12 h-full ">
                        <div className=" h-20 flex items-center">
                            <h1 className="text-3xl   pb-6 border-gray-700" >Spacial Offer</h1>
                        </div>
                        <div className="slider-container ">
                            <Slider {...settings} className="w-full h-[300px]">
                                <div className="h-full w-full">
                                    <img className="w-full h-[200px]" src="https://i.ibb.co/1qzkJKL/rod-long-2-P-ifaet-Dm0-unsplash-1.jpg" />
                                </div>
                                <div className="h-[200px] w-full">
                                    < img className="w-full h-full" src="https://i.ibb.co/dj8J9qQ/visualsofdana-T5p-L6ci-En-I-unsplash-3.jpg" />
                                </div>
                                <div className="h-[200px] w-full">
                                    <img className="w-full h-full" src="https://i.ibb.co/LP5z7Sb/michel-stockman-s-Mh8-FU25-Zk-E-unsplash.jpg" />
                                </div>


                            </Slider>
                        </div>
                    </div>
                    <div className="flex-1 h-full">
                        <div className="bg-[#d1af5e] h-20 text-white flex justify-between" >
                            <div>
                                <h1 className="text-3xl ml-4">THE SUMMER <br /></h1>
                                <h1 className="text-3xl lg:ml-40">SPACIAL</h1>
                            </div>
                            <div className=" items-center pl-4 bg-yellow-400 my-4 rounded-tl-xl flex justify-end ">
                                <p className="lg:text-4xl md:text-2xl text-lg text-red-600 font-bold">AED 549</p>
                                <p className="bg-black my-2 ml-3 pl-3 rounded-tl-lg">For 2 Day</p>
                            </div>

                        </div>
                        <div className="pb-5">
                            <ul className="space-y-3 p-8">
                                <li>&#8226; Grab our unforgettable special offer for just 2 days!</li>
                                <li>&#8226; Get an uninterrupted stay in a Superior Room for only $549!</li>
                                <li>&#8226;  Grab our unforgettable special offer for just 2 days!</li>
                                <li>&#8226;   And this Superior Room offer is still available for one week.</li>
                                
                             
                            </ul>
                            <Link to={'/room/booking/663d39e8666ac6d884b714e5'}><button  className="btn-sm  btn rounded-sm bg-transparent  border-2 hover:border-black  border-black w-32 hover:text-gray-900 ml-4"> Book Now</button></Link>
                    
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SpacialOffer;