import { Navigate } from "react-router-dom";

import { useContext } from "react";
import PropTypes from 'prop-types'; // ES6
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";



const PrivetRoute = ({children}) => {
const {user,loading } = useContext(AuthContext);
const location = useLocation();


if(loading){
    return <div className=" flex justify-center p-48"><span className="loading loading-dots loading-lg"></span> </div>
}


if(user){
    return(
       <>{children}</>
    )

}
return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default PrivetRoute;
PrivetRoute.propTypes={
    children: PropTypes.node.isRequired,
}