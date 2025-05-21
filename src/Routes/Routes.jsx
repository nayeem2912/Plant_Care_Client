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
import Loading from "../components/Loading";



 export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    errorElement:<ErrorPage></ErrorPage>,

    children: [
        {
            index:true,
            hydrateFallbackElement: <Loading></Loading>,
            loader: () => fetch('http://localhost:3000/plants/latest'),
            Component:Home,
        },
        {
            path:'/addPlant',
            Component:AddPlant,
        },
        {
            path:'/allPlant',
            hydrateFallbackElement: <Loading></Loading> , 
            loader: () => fetch('http://localhost:3000/plants') ,
            Component:AllPlant,
        },
        {
             path:'/myPlant',
            Component:MyPlants,
        },
        {
            path:'/plantDetails/:id',
            hydrateFallbackElement: <Loading></Loading> ,
            loader: ({params}) => fetch(`http://localhost:3000/plants/${params.id}`) ,
            Component:PlantDetails,
        },
        {
             path:'/updatePlant/:id',
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