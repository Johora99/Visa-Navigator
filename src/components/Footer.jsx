
import { Link } from 'react-router-dom'
import logo from '../assets/icons8-world-50.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from 'react';
import { ThemeContext } from '../Pages/ThemeProvider';
export default function Footer() {
    const { isDarkMode} = useContext(ThemeContext);
  return (
    <div className="w-full">
      
       <div className="w-full bg-Tangerine bg-opacity-[0.2]">

       <footer className="footer text-base-content container py-10 lg:py-20 w-11/12 mx-auto">
      

  <aside>
    <img src={logo} alt="" />
    <h3 className={`text-xl lg:text-4xl font-semibold ${isDarkMode ? " text-white" : " text-black"}`}>Swift<span className='text-Tangerine'>Visa</span></h3>
    <ul className='flex items-center gap-5 mt-5'>
      <li>
        <Link><FaFacebookF className='text-xl text-Tangerine'/></Link>
      </li>
      <li>
        <Link><FaInstagram className='text-xl text-Tangerine'/></Link>
      </li>
      <li>
        <Link><FaXTwitter className='text-xl text-Tangerine'/></Link>
      </li>
    </ul>
  </aside>
  <nav>
    <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? " text-white" : " text-black"}`}>Services</h6>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Work Visa</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Student Visa</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Business Visa</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Tour Visa</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Family Visa</a>
  </nav>
  <nav>
    <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? " text-white" : " text-black"}`}>Company</h6>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">About us</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Contact</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Jobs</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Press kit</a>
  </nav>
  <nav>
    <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? " text-white" : " text-black"}`}>Legal</h6>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Terms of use</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Privacy policy</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Cookie policy</a>
  </nav>
      </footer>
      <div className="w-full border-b-[1px] border-Tangerine mx-auto"></div>
      <div className='text-center py-5'>
        <p className='text-base font-normal'>Copyright 2024 Consultvisa, All rights reserved.</p>
      </div>
       </div>
    </div>
  )
}
