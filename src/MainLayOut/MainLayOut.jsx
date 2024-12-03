import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function MainLayOut() {
  return (
    <div className="lato">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
