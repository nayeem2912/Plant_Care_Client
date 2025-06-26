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
import PrivateRoute from "../Provider/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../components/Statistics";



 export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    errorElement:<ErrorPage></ErrorPage>,

    children: [
        {
            index:true,
            hydrateFallbackElement: <Loading></Loading>,
            loader: () => fetch('https://mango-server-green.vercel.app/plants/latest'),
            Component:Home,
        },
        
        {
            path:'/allPlant',
            hydrateFallbackElement: <Loading></Loading> , 
            loader: () => fetch('https://mango-server-green.vercel.app/plants') ,
            Component:AllPlant,
        },
        
        {
            path:'/plantDetails/:id',
            hydrateFallbackElement: <Loading></Loading> ,
            loader: ({params}) => fetch(`https://mango-server-green.vercel.app/plants/${params.id}`) ,
            element: <PrivateRoute> <PlantDetails></PlantDetails> </PrivateRoute>,
        },
        
    ]
  },
  {
    path:'/login',
    Component: LogIn
  },
  {
   path:'/register',
   Component: Register
  },
   {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading></Loading> , 
        loader: () => fetch('https://mango-server-green.vercel.app/plants') ,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
            path:'addPlant',
            element:(<PrivateRoute><AddPlant></AddPlant> </PrivateRoute>) ,
        },
        {
             path:'myPlant',
            element:<PrivateRoute> <MyPlants></MyPlants> </PrivateRoute>,
        },
        {
             path:'updatePlant/:id',
              hydrateFallbackElement: <Loading></Loading> ,
            loader: ({params}) => fetch(`https://mango-server-green.vercel.app/plants/${params.id}`) ,
            Component:UpdatePlant,
        },
        {
            path:'allPlant',
            Component:AllPlant,
        },
        
      
      
    ],
  },
]);