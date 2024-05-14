import { Helmet } from "react-helmet";


const AboutUs = () => {
    return (
        <div className="py-20 bg-[#ceccc9]">
            <Helmet>
                <title>KingLion |About Us  </title>
            </Helmet>
            <div className=" mb-12 flex justify-center">
                <h1 className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >About Us</h1>
            </div>
            <div className="max-w ">
                <div className="px-10 ">
                   <div className="lg:flex md:flex ">
                     <div className="flex items-center justify-center lg:w-4/12 md:w-4/12 mb-5 rounded-full">
                        <img
                            src="https://i.ibb.co/nR60MHy/king-Logo-photoaidcom-cropped-1.png"
                            alt="About Us"
                            className=" shadow-md rounded-full"
                        />
                    </div>
                    <p className="text-lg mb-4 flex-1">
                            KingLion is a hospitality company that goes beyond the basics of just simple accommodations. We pride ourselves in focusing on long-term stays with emphasis on the right level of simplicity and functionality. To ensure we make quality connections with each one of our guests, we are determined to hire the right kind of people who have a desire to do great work, and ensure our values are passed on to you.
                        </p></div>
                    <div>
                        
                        <p className="text-lg mb-4">

                            When you choose any one of our  KingLion, we guarantee you’ll find unmatched comfort and relaxation in the smallest details. Our spacious suites are designed with safety, health and comfort in mind. Our spacious environments allow you to feel at home, featuring fully equipped kitchens, free wi-fi, on-site guest laundry and pet-friendly accommodations.

                        </p>
                        <p className="text-lg mb-4">
                        We are fully dedicated in providing the highest quality experience to each and every one of our guests. Because loyalty is a staple of our commitment and service, we want to pass on the savings to you, in the way of our Extended Perks rewards program. Joining our Extended Perks rewards program is an easy way to access exclusive deals and savings. When you create a profile, you`ll get an instant discount on your next booking. Once a member, you`ll enjoy discounts at thousands of local and national brands, special promotions, faster booking and much more.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default AboutUs;