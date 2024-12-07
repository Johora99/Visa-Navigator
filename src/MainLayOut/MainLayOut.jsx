import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext} from "../Pages/ThemeProvider";
import { useContext } from "react";


export default function MainLayOut() {
    const { isDarkMode} = useContext(ThemeContext);

  return (
    <div className={`lato ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
