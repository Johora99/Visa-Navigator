import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage";
import LogInPage from "../Pages/LogInPage";
import RegistrationPage from "../Pages/RegistrationPage";
import AddVisaPage from "../Pages/AddVisaPage";

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
      }
    ]
  },
]);

export default router;
