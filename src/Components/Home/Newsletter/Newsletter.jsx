

const Newsletter = () => {
    const handelNewsLetter = (e) => {
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        console.log(email);
        form.reset()
    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 py-20 "style={{ 
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,4,4,20)), url('https://i.ibb.co/4V87fDt/ee.jpg')" 
        }}>
            <div className="col-span-1">
                {/* <img className="w-full h-full" src="https://i.ibb.co/JjWzVZm/email.jpg" alt="" /> */}
            </div>
            <div className="bg-[#f8f5f073] rounded-l-xl col-span- flex justify-start items-center ">

                <div className="lg:w-8/12 md:w-10/12  py-6 pl-16 max-w-96">
                    <p className="text-2xl font-semibold my-4">JOIN OUR NEWSLETTER</p>
                    <p className="">Subscribe our newsletter to receive the latest news and exclusive offers every week.</p>
                    <form onSubmit={handelNewsLetter} className=" my-4" >

                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full  mb-2" />
                        <input type="submit" className=" btn hover:text-gray-800 font-semibold input input-bordered w-full  text-gray-100 bg-[#151414]" value="Submit" />
                    </form>

                    <p className=" border-b-2 border-b-gray-700 text-center my-5">No Thanks</p>
                </div>


            </div>

        </div>
    );
};

export default Newsletter;