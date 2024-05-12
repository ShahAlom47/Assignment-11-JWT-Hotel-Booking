import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import { Typewriter } from 'react-simple-typewriter'

import 'animate.css';
import { Link } from 'react-router-dom';

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(()=>{
        document.getElementById('my_modal_3').showModal()

    },[])


    return (
        <div className=' relative bg-gradient-to-br from-black to-gray-900 mb-10'>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal  " >
                <div className="modal-box   h-96 p-0  ">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                   
                   <Link to={'/spacial-offer'}> <img className='w-full btn p-0 border-none h-full  ' src="https://i.ibb.co/myWXt0C/offer-big.jpg" alt="" /></Link>
                   
                </div>
            </dialog>


            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5700,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                speed={1500}
                className="mySwiper relative  "
            >


                <SwiperSlide>
                    <div className='relative bg-gradient-to-t from-[#00000000] to-[#000000c1]'>
                        <img className='h-[600px] gradient-overlay w-full rounded-lg' src="https://i.ibb.co/VNZGwCK/rod-long-2-P-ifaet-Dm0-unsplash.jpg" alt="" />
                        <div className="bg-gradient-to-t from-[#00000000] to-[#000000a0] overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                            <div className="animate__animated animate__fadeInUp text-center animate__delay-1s  flex flex-col items-center h-full w-full absolute top-1/4 ">
                                <p className=" uppercase  font-mont text-white"> Unique Place with Comfort Zone</p>
                                <h1 className='lg:text-4xl uppercase text-2xl font-mont font-bold text-yellow-600 mb-2'>Experience Comfort <br /> at Its Finest </h1>
                                <Link to={'/rooms'} > <button className=" btn-pry  ">Explore Now</button></Link>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-gradient-to-t from-[#00000000] to-[#000000c1]'>
                        <img className='h-[600px] gradient-overlay w-full rounded-lg' src="https://i.ibb.co/WfVYrZb/jean-estrella-hvk-AKCt1-So0-unsplash-1.jpg" alt="" />
                        <div className="bg-gradient-to-t from-[#00000000] to-[#000000a0] overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                            <div className="animate__animated animate__fadeInUp text-center animate__delay-1s  flex flex-col items-center h-full w-full absolute top-1/4 ">
                                <p className=" uppercase  font-mont text-white"> Unique Place with Comfort Zone</p>
                                <h1 className='lg:text-4xl uppercase text-2xl font-mont font-bold text-yellow-600 mb-2'>Your Oasis of <br /> Relaxation Awaits </h1>
                                <Link to={'/rooms'} > <button className=" btn-pry  ">Explore Now</button></Link>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-gradient-to-t from-[#00000000] to-[#000000c1]'>
                        <img className='h-[600px] gradient-overlay w-full rounded-lg' src="https://i.ibb.co/dj8J9qQ/visualsofdana-T5p-L6ci-En-I-unsplash-3.jpg" alt="" />
                        <div className="bg-gradient-to-t from-[#00000000] to-[#000000a0] overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                            <div className="animate__animated animate__fadeInUp animate__delay-1s text-center  flex flex-col items-center h-full w-full absolute top-1/4 ">
                                <p className=" uppercase  font-mont text-white"> Unique Place with Comfort Zone</p>
                                <h1 className='lg:text-4xl uppercase text-2xl font-mont font-bold text-yellow-600 mb-2'>Immerse Yourself in <br />Unmatched Hotel Excellence </h1>
                                <Link to={'/rooms'} > <button className=" btn-pry  ">Explore Now</button></Link>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>






                <div className="autoplay-progress w-40 absolute " slot="container-end ">

                    <svg viewBox="0 0 48 48" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>


        </div>
    );
};

export default Banner;