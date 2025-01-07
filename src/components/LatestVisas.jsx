import { useContext, useEffect, useState } from "react"
import LatestVisa from "./LatestVisa"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from "@emotion/react";
import ShimmerButton from "./ui/shimmer-button";
import AnimatedShinyText from "./ui/animated-shiny-text";

export default function LatestVisas() {
  const [visas,setVisas] = useState([])
    const { isDarkMode} = useContext(ThemeContext);
  useEffect(()=>{
    fetch('https://server-side-tawny.vercel.app/newVisas')
    .then(res => res.json())
    .then(data => setVisas(data))
  },[])
      AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center my-20">
        <AnimatedShinyText>
        <h2 data-aos="fade-right" className="text-4xl lg:text-7xl font-bold"><span className="text-Tangerine">Latest</span> Visa </h2>
        </AnimatedShinyText>
        <p data-aos="fade-right" className="text-base text-Gray font-medium mt-5">Explore the most recent visa opportunities! Below are the latest visa options available for various countries. <br className="hidden lg:block"/> Each visa card provides essential information .</p>
        <div className="w-[30%] border-b-[2px] border-Tangerine mx-auto mt-5"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-20">
          {
            visas.map(visa => <LatestVisa key={visa._id} visa={visa}></LatestVisa>)
          }
      </div>
      <div data-aos="zoom-in" className=" mb-20 flex items-center justify-center">
        
      <Link
  to="/allVisa"
  className="relative inline-block text-white text-lg lg:text-xl font-semibold py-3 px-10 rounded-lg bg-gradient-to-r from-Tangerine to-orange-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-2 hover:shadow-xl"
>
  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-Tangerine opacity-0 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-100"></span>
  <span className="relative z-10">See All Visas</span>
</Link>


      
      </div>
    </div>
  )
} 