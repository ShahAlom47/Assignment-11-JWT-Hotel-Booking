import axios from "axios";

import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { LogOutUser } = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {

    axiosSecure.interceptors.response.use((config) => {

      return config;
    },
    
    (error) => {
      console.log(error.response);
      if (error.response?.status === 401 || error.response.status === 403) {

        LogOutUser()
          .then(() => {
            navigate('/login')
            //    alert(error.response?.data?.message,)


          })
          .catch((error) => {
            console.log(error);
          });
      }


      return Promise.reject(error);
    }
    );
  }, [navigate,LogOutUser])
  return axiosSecure
};

export default useAxiosSecure;