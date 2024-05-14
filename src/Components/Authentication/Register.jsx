import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaRegCircleUser } from "react-icons/fa6";
import { ImGoogle } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config"
import {  updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../Auth Provider/AuthProbider";
import { Helmet } from "react-helmet";
import login from '../../assets/SUovza6JCR.json'
import Lottie from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Register = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [passError, setPassError] = useState(null)
    const [showPass, setShowPass] = useState(true)
    const navigate = useNavigate();
    const location= useLocation()
    

    const { userRegister, githubLogin, googleLogin } = useContext(AuthContext)

    const handelRegister = (e) => {

        // reset msg 
        setErrorMsg('')
        setSuccessMsg('')
        setPassError('')

        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get('email')
        const name = data.get('name')
        const photo = data.get('photo')
        const password = data.get('password')

        // const FormDatas = { name, email, photo, password }
        // console.log(FormDatas);

        if (password.length < 6) {
            setErrorMsg('Password must be 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMsg('Use an uppercase letter')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setErrorMsg('Use an lowercase letter')
            return
        }


        // createUserWithEmailAndPassword(auth, email, password)
        userRegister(email, password)
            .then(() => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    toast.success('User created successfully ')
                    setSuccessMsg('User created successfully')
                    setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
                  

                }).catch((error) => {
                    setErrorMsg(error.message)
                });      
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setErrorMsg(errorMessage)
                toast.error(errorMessage)

            });

    }

    const googleLoginHandel = () => {
        googleLogin()
            .then(() => {
              

                        toast.success('Login Successfully ')
                        setSuccessMsg('Login Successfully')
                        setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
                 
            })
            .catch((error) => {
                setErrorMsg(error.message)
                toast.error(error.message)
            });

    }
    const githubLoginHandel = () => {
        githubLogin()
        .then(() => {
          
                    toast.success('Login Successfully ')
                    setSuccessMsg('Login Successfully')
                    setTimeout(() => { navigate(location.state ? location.state : '/') }, 1500)
         
        })
        .catch((error) => {
            setErrorMsg(error.message)
                toast.error(error.message)
        });


    }

    return (
        <div className=" pt-20  bg-[#37464f]">
              <Helmet>
                <title>KingLion | Register </title>
            </Helmet>
            <div className=" w-10/12 m-auto py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="my-auto">
                <Lottie animationData={login} className="my-auto" />
                </div>
                <div className="">
                <h1 className=" text-3xl text-white font-bold text-center border-b-4 my-4 py-3">Register</h1>
                <form onSubmit={handelRegister} className="space-y-3">


                    <label className="input  rounded-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input name="name" type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered rounded-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input name="email" type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered rounded-sm flex items-center gap-2">
                        <FaRegCircleUser></FaRegCircleUser>
                        <input name="photo" type="text" className="grow" placeholder="PhotoURL" />
                    </label>
                    <label className="input input-bordered rounded-sm flex items-center gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input name="password" type={showPass ? 'password' : 'text'} className="grow" placeholder="Password" />
                        <h5 onClick={() => setShowPass(!showPass)} className="font-semibold absolute top-4 right-5">{showPass ? <FaEye /> : <FaEyeSlash />} </h5>
                    </label>
                    <p className="text-red-500">{passError}</p>
                    <div>
                        <p className="text-red-400">{errorMsg} </p>
                        <p className="text-green-400">{successMsg} </p>
                    </div>
                    <label className="input input-bordered  flex items-center gap-2 btn btn-s rounded-sm  bg-[#3fb232] border-none ">

                        <input type="submit" className="grow" value="Register" />
                    </label>


                </form>

                <div className="mt-4" >

                    <h1 className="font-semibold text-center text-gray-200">Already have an account?
                        <Link to={'/login'}><button className="btn btn-link text-white">Login</button></Link></h1>
                </div>

                <div className='my-8   '>
                    <hr className='border-t-2 border-gray-400 w-6/12 m-auto' />
                    <p className=' relative -top-3 left-1/2 font-semibold p-1 border-2  border-gray-600 bg-slate-100 rounded-lg inline'>OR</p>
                </div>

                <div className=" md:w-8/12 lg:w-6/12 m-auto px-6 mb-10 flex flex-col gap-3 ">
                    <button onClick={googleLoginHandel} className="btn btn-outline bg-slate-300 px-2 rounded-full"> <ImGoogle className=" text-red-500  w-6 h-6" /> Google </button>
                    <button onClick={githubLoginHandel} className="btn btn-outline bg-slate-300 px-2 rounded-full"> <IoLogoGithub className="  w-8 h-8" />  Google </button>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;