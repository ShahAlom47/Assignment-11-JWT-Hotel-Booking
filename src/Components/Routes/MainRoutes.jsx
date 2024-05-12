import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Rooms from "../Rooms/Rooms";
import RoomDetails from "../RoomDetails/RoomDetails";
import Booking from "../Booking/Booking";
import PrivetRoute from "./PrivetRoutes";
import MyBooking from "../MyBooking/MyBooking";
import Review from "../Review/Review";
import UpdateDate from "../UpdateDate/UpdateDate";
import SpacialOffer from "../Home/SpacialOffer/SpacialOffer";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/rooms",
          element:<Rooms></Rooms>,
        },
        {
          path: "/spacial-offer",
          element:<SpacialOffer></SpacialOffer>,
        },
        {
          path: "/room-details/:id",
          element:<RoomDetails></RoomDetails>,
          
        },
        {
          path: "/review/:id",
          element:<Review></Review>,
          
        },
        {
          path: "/room/booking/:id",
          element:<PrivetRoute><Booking></Booking></PrivetRoute>,
          
        },
        {
          path: "/my-booking",
          element:<PrivetRoute><MyBooking></MyBooking></PrivetRoute>,
          
        },
        {
          path: "/update-date/:id",
          element:<PrivetRoute><UpdateDate></UpdateDate></PrivetRoute>,
          
        },
      ],
    },
  ]);


export default router