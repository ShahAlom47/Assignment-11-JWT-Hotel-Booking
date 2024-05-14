import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,userLogOut}=useContext(AuthContext)
    const [theme, setTheme] = useState(true);
    const [themData,setThemeData]=useState(null)
   



const [visible, setVisible] = useState(true);

useEffect(() => {
    let prevSPos = window.pageYOffset;

    const handleScroll = () => {
        const currentSPos = window.pageYOffset;
        const isVisible = prevSPos > currentSPos;

        setVisible(isVisible);
        prevSPos = currentSPos;

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [visible]);


const logoutHandel = () => {

    userLogOut()
        .then()
        .catch()

}


useEffect(()=>{
    const themeData=  localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',JSON.parse(themeData) )
    setThemeData(JSON.parse(themeData))
},[theme])

const themeControl = () => {      
    setTheme(!theme)
theme ?  localStorage.setItem('theme',JSON.stringify('dark')):localStorage.setItem('theme',JSON.stringify('light'))

}


const nav = <>
<NavLink><li><a>Home</a></li></NavLink>
<NavLink to={'/rooms'}><li><a>Rooms</a></li></NavLink>
<NavLink to={'/my-booking'}><li><a>My Bookings</a></li></NavLink>
<NavLink to={'/about-us'}><li><a>About Us</a></li></NavLink>
<NavLink to={'/contact-us'}><li><a>Contact Us</a></li></NavLink>

<label onClick={themeControl} className="flex cursor-pointer gap-2 items-center ml-3">

{
   themData==='light'? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
   
 :  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    
}

</label>


</>

const btn=<>
{
    user?<> <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full border">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL}/>
      </div>
    </div>
    <ul tabIndex={0} className=" text-gray-700 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between border-b-2">{user?.displayName}</a>
        <a className="justify-between  border-b-2">{user?.email}</a>
      </li>

      <li><a className=" border-b-2 bg-gray-200"><button onClick={logoutHandel} className="" >LogOut</button></a></li>
    </ul>
  </div></>:<><Link to={'/login'}> <button className="btn-pry">SignIn</button></Link>
    <Link to={'/register'}> <button className="btn-pry">SignUp</button></Link></>
}


 



</>
    return (
        <div className={` border-b- shadow-md shadow-white  bg-gradient-to-t from-[#00000000] to-[#0000004f]  w-full m-auto" p-0  z-50 fixed  ${visible ? 'top-0 transition-all' : '-top-20 transition-all'} duration-1000`} >
        
            <div className="navbar  max-w m-auto  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-40">
                            {nav}
                        </ul>
                    </div>
                   <Link><h1 className="text-lg text-white font-semibold"> <span className="text-2xl text-yellow-600">K</span>ING<span className="text-2xl text-yellow-600">L</span>ION</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 navBar">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end ">
                   {
                    btn
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;