import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage";
import LogInPage from "../Pages/LogInPage";
import RegistrationPage from "../Pages/RegistrationPage";
import AddVisaPage from "../Pages/AddVisaPage";
import AllVisaPage from "../Pages/AllVisaPage";
import ErrorPage from "../Pages/ErrorPage";
import VisaDetailsPage from "../Pages/VisaDetailsPage";
import MyAddedVisaPage from "../Pages/MyAddedVisaPage";
import MyAppliedVisas from "../Pages/MyAppliedVisas";
import PrivatePage from "../Pages/PrivatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/logIn',
        element:<LogInPage></LogInPage>
      },
      {
        path:'/register',
        element:<RegistrationPage></RegistrationPage>
      },
      {
        path:'/addVisa',
        element:<PrivatePage><AddVisaPage></AddVisaPage></PrivatePage>
      },
      {
        path:'/allVisa',
        loader:()=>fetch('http://localhost:5000/visaApplication'),
        element:<AllVisaPage></AllVisaPage>
      },
      {
        path:'/visaApplication/:id',
        loader:({params})=>fetch(`http://localhost:5000/visaApplication/byId/${params.id}`),
        element:<PrivatePage><VisaDetailsPage></VisaDetailsPage></PrivatePage>
      },
      {
        path:'/myAddedVisa',
        element:<PrivatePage><MyAddedVisaPage></MyAddedVisaPage></PrivatePage>
      },
      {
        path:'/myAppliedVisa',
        loader:()=>fetch('http://localhost:5000/myAppliedVisa'),
        element:<PrivatePage><MyAppliedVisas></MyAppliedVisas></PrivatePage>
      }
    ]
  },
]);

export default router;
