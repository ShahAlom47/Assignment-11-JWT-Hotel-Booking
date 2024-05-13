import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
import { FaFacebook, FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";


const ContactUs = () => {
    return (
        <div className="py-20 bg-[#373636] min-h-screen">
            <div className="max-w">

                <Helmet>
                    <title>KingLion | Contact Us  </title>
                </Helmet>

                <div className="  flex justify-start  ">
                    <h1 className=" text-3xl  max-w-6xl mb-4  mx-4 inline border-b pb-1 border-gray-100 text-gray-50   " >Contact Us</h1>
                </div>
                <div className="border-b-2 border-gray-100 mx-4">
                    <p className="text-gray-50 py-2">Get in touch with us for any assistance or inquiries related to hotel bookings. <br /> Our team is here to help you with your travel needs.</p>
                </div>

                <div className="lg:flex md:flex my-7">
                    <div className="lg:w-6/12 md:w-6/12 p-6 space-y-5">

                        <div className=" flex items-start gap-3">
                            <div className=" w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl">
                                < FaHome /></div>
                            <div className="">
                                <p className="font-bold text-[#01bcd4]"> Address:</p>
                                <p className=" text-white text-sm"> KingLion Complex, Bishwa Rd, Sylhet 3100, <br /> Bangladesh</p>
                            </div>
                        </div>
                        <div className=" flex items-start gap-3">
                            <div className=" w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl">
                                < FaMobile /></div>
                            <div className="">
                                <p className="font-bold text-[#01bcd4]"> Phone:</p>
                                <p className=" text-white text-sm">+880175463354</p>
                            </div>
                        </div>

                        <div className=" flex items-start gap-3">
                            <div className=" w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl">
                                <MdEmail /></div>
                            <div className="">
                                <p className="font-bold text-[#01bcd4]"> Email:</p>
                                <p className=" text-white text-sm">kinglion47gamil.com</p>
                            </div>
                        </div>

                        <div className=" flex items-start gap-3">
                            <div className=" w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl">
                                < FaFacebook /></div>
                            <div className="">
                                <p className="font-bold text-[#01bcd4]"> FaceBook:</p>

                                <a href="https://www.facebook.com/lionkinghotel.hoian" target="blank"> <p className=" text-white text-sm underline">FaceBook</p></a>
                            </div>
                        </div>




                    </div>
                    <div className=" flex-1 bg-slate-50 rounded-sm flex justify-center">
                        <div className="card shrink-0 w-full max-w-sm  ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="Name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type Your Message</span>
                                    </label>
                                  <textarea name="message" className="border rounded-lg input-bordered" id=""></textarea>
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={()=>toast.success('Send your message successfully')} className="btn border-none text-white hover:text-gray-900 bg-[#01bcd4]">Sand</button>
                                </div>
                            </form>
                            <ToastContainer></ToastContainer>
                        </div>
                    



                </div>
            </div>
        </div>

        </div >
    );
};

export default ContactUs;