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
          path: "/room-details/:id",
          element:<RoomDetails></RoomDetails>,
          
        },
        {
          path: "/room/booking/:id",
          element:<PrivetRoute><Booking></Booking></PrivetRoute>,
          
        },
      ],
    },
  ]);


export default router