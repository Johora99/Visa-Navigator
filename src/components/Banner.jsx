
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img1 from '../assets/slid1.jpg'
import Img2 from '../assets/slid2.jpg'
import Img4 from '../assets/slid4.jpg'
import Img5 from '../assets/slid5.jpg'
import Img6 from '../assets/slid6.webp'
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
        className="mySwiper w-full h-[400px] lg:h-[750px] transition-all ease-in-out"
      >
        <SwiperSlide>
                <img src={Img1} alt="" className='w-full  h-[400px] lg:h-[750px] object-cover'/>
        </SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" className='w-full  h-[400px] lg:h-[750px] object-cover'/>
        </SwiperSlide>
        <SwiperSlide><img src={Img4} alt="" className='w-full h-[400px] lg:h-[750px]  object-cover'/></SwiperSlide>
        <SwiperSlide><img src={Img5} alt="" className='w-full  h-[400px] lg:h-[750px] object-cover'/></SwiperSlide>
        <SwiperSlide><img src={Img6} alt="" className='w-full  h-[400px] lg:h-[750px] object-cover'/></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  )
}
