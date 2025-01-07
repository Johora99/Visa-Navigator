
import { Link } from 'react-router-dom'
import logo from '../assets/icons8-world-50.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from 'react';
import { ThemeContext } from '../Pages/ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Footer() {
    const { isDarkMode} = useContext(ThemeContext);
        AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    <div className="w-full">
      
       <div className="w-full bg-Tangerine bg-opacity-[0.2]">

       <footer className="footer text-base-content container py-10 lg:py-20 w-11/12 mx-auto">
      

  <aside data-aos="fade-right">
    <img src={logo} alt="" />
    <h3 className={`text-xl lg:text-4xl font-semibold ${isDarkMode ? " text-white" : " text-black"}`}>Swift<span className='text-Tangerine'>Visa</span></h3>
  <ul className="flex items-center gap-5 mt-5">
  <li>
    <Link
      to="https://www.facebook.com/zowriya.zara.9/" target='_blank'
      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-Tangerine to-orange-500 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <FaFacebookF className="text-xl text-white group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
    </Link>
  </li>
  <li>
    <Link
      to="https://www.instagram.com/rrozalin_roza/" target='_blank'
      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-Tangerine to-orange-500 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <FaInstagram className="text-xl text-white group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
    </Link>
  </li>
  <li>
    <Link
      to="https://x.com/JohoraTuz99" target='_blank'
      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-Tangerine to-orange-500 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <FaXTwitter className="text-xl text-white group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
    </Link>
  </li>
</ul>

  </aside>
  <nav data-aos="fade-up">
    <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? " text-white" : " text-black"}`}>Quick Exes</h6>
    <Link to='/' className="text-base text-Gray font-medium hover:text-Tangerine">Home</Link>
    <Link to='/allVisa' className="text-base text-Gray font-medium hover:text-Tangerine">All visas</Link>
    <Link to='/addVisa' className="text-base text-Gray font-medium hover:text-Tangerine">Add Visa</Link>
    <Link to='/myAddedVisa' className="text-base text-Gray font-medium hover:text-Tangerine">My added visas</Link>
    <Link to='/myAppliedVisa' className="text-base text-Gray font-medium hover:text-Tangerine">My Visa applications</Link>
  </nav>
  <nav data-aos="fade-up">
    <h6 className={`text-2xl font-semibold mb-3 ${isDarkMode ? " text-white" : " text-black"}`}>Company</h6>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">About us</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Contact</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Jobs</a>
    <a className="text-base text-Gray font-medium hover:text-Tangerine">Press kit</a>
  </nav>
  <nav data-aos="fade-left">
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
