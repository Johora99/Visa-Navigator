import bgImg from '../assets/bg-img.jpg'
import starIcon from '../assets/icons8-star-50.png'
import Img1 from '../assets/USA.jpg'
import usaImg from '../assets/Flag_of_the_United_States.png'
import Img2 from '../assets/Canada.webp'
import canadaFlag from '../assets/Flag_of_Canada.png'
import Img3 from '../assets/UK.jpg'
import ukFlag from '../assets/Flag_of_the_United_Kingdom.png'
import Img4 from '../assets/city-skyline-of-Sydney-Australia.webp'
import australianFlag from '../assets/Flag_of_Australia.svg.png'

export default function OurDestination() {
    const bgStyle = {
   backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    height: '500px',
    
  };
   
  return (
    <div>
      <div className="text-center pt-20">
      <div className='flex items-center justify-center gap-3'>
        <img src={starIcon} alt="" className='w-10'/>
          <h4 className="text-Tangerine text-xl font-semibold uppercase">Our Destinations</h4>
        <img src={starIcon} alt="" className='w-10'/>
      </div>
        <h2 className="text-7xl font-bold leading-[100px] mb-20">Visa Services for These  <br className='hidden lg:block'/>
        <span className="text-Tangerine">Destinations</span></h2>
      </div>
    <div className='w-full my-20' style={bgStyle}>
       <div className='container w-11/12 mx-auto relative'>
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 absolute top-80'>
            <div style={{backgroundImage:`url(${Img1})`}} className='bg-no-repeat bg-cover w-full p-5 rounded-xl'>
              <div className=' w-full bg-black bg-opacity-[0.3] p-5'>
                <img src={usaImg} alt="" className='w-14 h-14 rounded-3xl  right-0 top-5'/>
                <h4 className='my-5 text-xl font-semibold'>USA</h4>
                <p className='text-base'>Embark on your dream journey with ease! At Our Destinations, we specialize in providing a seamless travel experience by offering comprehensive visa assistance services. Whether you're planning a relaxing vacation, a business trip, or an adventurous getaway, our team is here to guide you through the visa application process.</p>
              </div>
            </div>
            <div style={{backgroundImage:`url(${Img2})`}} className='bg-no-repeat bg-cover w-full p-5 rounded-xl'>
              <div className=' w-full bg-black bg-opacity-[0.3] p-5'>
                <img src={canadaFlag} alt="" className='w-14 h-14 rounded-3xl  right-0 top-5'/>
                <h4 className='my-5 text-xl font-semibold'>Canada</h4>
                <p className='text-base'>Embark on your dream journey with ease! At Our Destinations, we specialize in providing a seamless travel experience by offering comprehensive visa assistance services. Whether you're planning a relaxing vacation, a business trip, or an adventurous getaway, our team is here to guide you through the visa application process.</p>
              </div>
            </div>
            <div style={{backgroundImage:`url(${Img3})`}} className='bg-no-repeat bg-cover w-full p-5 rounded-xl'>
              <div className=' w-full bg-black bg-opacity-[0.3] p-5'>
                <img src={ukFlag} alt="" className='w-14 h-14 rounded-3xl  right-0 top-5'/>
                <h4 className='my-5 text-xl font-semibold'>Australia</h4>
                <p className='text-base'>Embark on your dream journey with ease! At Our Destinations, we specialize in providing a seamless travel experience by offering comprehensive visa assistance services. Whether you're planning a relaxing vacation, a business trip, or an adventurous getaway, our team is here to guide you through the visa application process.</p>
              </div>
            </div>
            <div style={{backgroundImage:`url(${Img4})`}} className='bg-no-repeat bg-cover w-full p-5 rounded-xl'>
              <div className=' w-full'>
                <img src={australianFlag} alt="" className='w-14 h-14 rounded-3xl  right-0 top-5'/>
                <h4 className='my-5 text-xl font-semibold'>USA</h4>
                <p className='text-base'>Embark on your dream journey with ease! At Our Destinations, we specialize in providing a seamless travel experience by offering comprehensive visa assistance services. Whether you're planning a relaxing vacation, a business trip, or an adventurous getaway, our team is here to guide you through the visa application process.</p>
              </div>
            </div>
         </div>
       </div>
    </div>
         <div className='text-center mt-72 mb-20'>
          <button className='bg-Tangerine py-3 px-10 text-white text-xl font-semibold'>See More</button>
         </div>
    </div>
  )
}
