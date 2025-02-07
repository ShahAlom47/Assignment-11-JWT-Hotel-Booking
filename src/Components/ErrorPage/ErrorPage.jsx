import { Helmet } from "react-helmet";
import { useNavigate, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const navigate =useNavigate()
    const error = useRouteError();
    console.error(error);



    return (
        <div id="error-page" className="w-full  flex flex-col justify-center items-center ">
         <Helmet>
                <title>KingLion | Error </title>
            </Helmet>
<div className="w-3/6 h-3/6 relative flex flex-col justify-center items-center ">
<img className="w-3/6 h-3/6" src='https://i.ibb.co/PT02ykL/Pngtree-error-404-page-not-found-6681621.png' alt="" /> 

<div className="text-center w-4/6 h-3/6">
          
          <h1 className=" text-4xl font-bold">Oops!</h1>
           <p>Sorry, an unexpected error has occurred.</p>
           <p>
               <i>{error?.statusText || error?.message}</i>
           </p>
          <button onClick={()=> navigate('/') } className="btn btn-primary my-3 "> Back To Home</button>
          </div>
</div>
        
           
          
        </div>
    );
}