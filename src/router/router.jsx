import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage";
import LogInPage from "../Pages/LogInPage";
import RegistrationPage from "../Pages/RegistrationPage";
import AddVisaPage from "../Pages/AddVisaPage";
import AllVisaPage from "../Pages/AllVisaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
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
        element:<AddVisaPage></AddVisaPage>
      },
      {
        path:'/allVisa',
        loader:()=>fetch('http://localhost:5000/visaApplication'),
        element:<AllVisaPage></AllVisaPage>
      }
    ]
  },
]);

export default router;
