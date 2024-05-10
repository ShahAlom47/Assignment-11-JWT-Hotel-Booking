import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Rooms from "../Rooms/Rooms";
import RoomDetails from "../RoomDetails/RoomDetails";




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
      ],
    },
  ]);


export default router