
import Banner from "./Banner/Banner";
import LuxuryRooms from "./FeaturedRooms/LuxuryRooms";
import Newsletter from "./Newsletter/Newsletter";
import OurLocation from "./OurLocation/OurLocation";
import UserReview from "./UserReviewPage/UserReview";


const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            <LuxuryRooms></LuxuryRooms>
            <OurLocation></OurLocation>
            <Newsletter></Newsletter>
            <UserReview></UserReview>
           

        </div>
    );
};

export default Home;