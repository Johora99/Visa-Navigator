import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import './index.css'
import AuthProvider from "./AuthProvider/AuthProvider";
import { ThemeProvider } from "./Pages/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
  </ThemeProvider>
);
