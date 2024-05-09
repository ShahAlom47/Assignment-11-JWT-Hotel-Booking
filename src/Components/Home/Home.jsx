
import Banner from "./Banner/Banner";
import LuxuryRooms from "./FeaturedRooms/LuxuryRooms";
import Newsletter from "./Newsletter/Newsletter";
import OurLocation from "./OurLocation/OurLocation";


const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            {/* <OurLocation></OurLocation> */}
            <Newsletter></Newsletter>
            <LuxuryRooms></LuxuryRooms>

        </div>
    );
};

export default Home;