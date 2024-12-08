
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Img1 from '../assets/slid1.jpg'
import Img2 from '../assets/slid2.jpg'
import Img4 from '../assets/slid4.jpg'
import Img5 from '../assets/slid5.jpg'
import Img6 from '../assets/slid6.webp'
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Typewriter } from "react-simple-typewriter";
export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    

  return (
    

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[300px] lg:h-[750px] transition-all ease-in-out relative"
      >
        <div className='absolute bg-Tangerine w-full h-full left-0 z-[10]'>

        <SwiperSlide>
          <div className='relative'>
                <img src={Img1} alt="" className='absolute w-full  h-[300px] lg:h-[750px] object-cover'/>
                <div className='absolute left-0 z-[10] pt-10 pl-10 lg:pt-20 lg:pl-20'>
              <h2 className='text-3xl lg:text-7xl text-white font-extrabold lg:leading-[100px]'>
  <span  style={{ display: 'block' }}>
    <Typewriter
      words={["Visa Immigration"]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["For A Brighter"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Your Future..."]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>

                <button className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 lg:py-3 px-5 lg:px-8 flex items-center gap-2 mt-5 lg:mt-10 hover:bg-transparent hover:border-[2px] hover:border-Tangerine'>Learn More <IoArrowForwardCircleOutline className='text-2xl'/></button>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
                <img src={Img2} alt="" className='absolute w-full  h-[400px] lg:h-[750px] object-cover'/>
                <div className='absolute right-0 z-[10] pt-10 pr-10 lg:pt-20 lg:pr-20'>
                <h2 className='text-3xl lg:text-7xl text-white font-extrabold lg:leading-[100px]'>
                  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Trusted Immigration"]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Visa Consulting"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Here ..."]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
                    </h2>
                <button className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-3 px-8 flex items-center gap-2 mt-5 lg:mt-10 hover:bg-transparent hover:border-[2px] hover:border-Tangerine'>Learn More <IoArrowForwardCircleOutline className='text-2xl'/></button>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
                <img src={Img4} alt="" className='absolute w-full  h-[400px] lg:h-[750px] object-cover'/>
                <div className='absolute left-0 z-[10] pt-10 pl-10 lg:pt-20 lg:pl-20'>
                <h2 className='text-3xl lg:text-7xl text-white font-extrabold lg:leading-[100px]'>
                    <span style={{ display: 'block' }}>
    <Typewriter
      words={["Visa Immigration"]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["For A Brighter"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["You Future ..."]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
                   </h2>
                <button className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-3 px-8 flex items-center gap-2 mt-5 lg:mt-10 hover:bg-transparent hover:border-[2px] hover:border-Tangerine'>Learn More <IoArrowForwardCircleOutline className='text-2xl'/></button>
                </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
                <img src={Img5} alt="" className='absolute w-full  h-[400px] lg:h-[750px] object-cover'/>
                <div className='absolute left-0 z-[10] pt-10 pl-10 lg:pt-20 lg:pl-20'>
                <h2 className='text-3xl lg:text-7xl text-white font-extrabold  lg:leading-[100px]'><span style={{ display: 'block' }}>
    <Typewriter
      words={["Trusted Immigration"]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Visa Consulting"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Here ..."]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span></h2>
                <button className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-3 px-8 flex items-center gap-2 mt-5 lg:mt-10 hover:bg-transparent hover:border-[2px] hover:border-Tangerine'>Learn More <IoArrowForwardCircleOutline className='text-2xl'/></button>
                </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
                <img src={Img6} alt="" className='absolute w-full  h-[400px] lg:h-[750px] object-cover'/>
                <div className='absolute left-0 z-[10] pt-10 pl-10 lg:pt-20 lg:pl-20'>
                <h2 className='text-3xl lg:text-7xl text-white font-extrabold  lg:leading-[100px]'>  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Visa Immigration"]}
      loop={true}
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["For A Brighter"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <span style={{ display: 'block' }}>
    <Typewriter
      words={["Your Future..."]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span></h2>
                <button className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-3 px-8 flex items-center gap-2 mt-5 lg:mt-10 hover:bg-transparent hover:border-[2px] hover:border-Tangerine'>Learn More <IoArrowForwardCircleOutline className='text-2xl'/></button>
                </div>
          </div>
          </SwiperSlide>
        </div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  
  )
}
