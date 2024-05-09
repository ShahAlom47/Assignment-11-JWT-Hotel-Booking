import { Outlet } from "react-router-dom";
import Navbar from "./SharedComponets/Navbar";
import Footer from "./SharedComponets/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
            
        </div>
    );
};

export default Root;