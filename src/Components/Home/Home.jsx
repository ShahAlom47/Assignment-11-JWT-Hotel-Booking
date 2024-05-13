
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import LuxuryRooms from "./FeaturedRooms/LuxuryRooms";
import Newsletter from "./Newsletter/Newsletter";
import OurLocation from "./OurLocation/OurLocation";
import UserReview from "./UserReviewPage/UserReview";


const Home = () => {
    const handelColouse=()=>{
        const modal = document.getElementById('my_modal_3');
        modal.close();
    }
    return (
        <div onClick={handelColouse} className="">
             <Helmet>
                <title>KingLion | Home  </title>
            </Helmet>
           
            <Banner></Banner>
            <LuxuryRooms></LuxuryRooms>
            <OurLocation></OurLocation>
            <Newsletter></Newsletter>
            <UserReview></UserReview>
           

        </div>
    );
};

export default Home;