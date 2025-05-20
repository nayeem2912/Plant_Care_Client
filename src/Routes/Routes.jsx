import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

import AddPlant from "../Pages/AddPlant";
import AllPlant from "../Pages/AllPlant";
import MyPlants from "../Pages/MyPlants";
import PlantDetails from "../Pages/PlantDetails";
import UpdatePlant from "../Pages/UpdatePlant";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    errorElement:<ErrorPage></ErrorPage>,

    children: [
        {
            index:true,
            Component:Home,
        },
        {
            path:'/addPlant',
            Component:AddPlant,
        },
        {
            path:'/allPlant',
            Component:AllPlant,
        },
        {
             path:'/myPlant',
            Component:MyPlants,
        },
        {
            path:'/plantDetails',
            Component:PlantDetails,
        },
        {
             path:'/updatePlant',
            Component:UpdatePlant,
        }
    ]
  },
  {
    path:'/login',
    Component: LogIn
  },
  {
   path:'/register',
   Component: Register
  }
]);