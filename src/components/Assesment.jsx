
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Assesment() {
      AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
   <div className="bg-Tangerine py-5">
        <div className="container w-11/12 mx-auto">
           <div className="flex flex-col lg:flex-row items-center justify-between">
              <div data-aos="fade-right">
                <h3 className="text-white text-xl font-medium uppercase mb-3">Start Your Journey with Our Free Online Assessment</h3>
              <p className="text-base font-normal">
                Take the first step toward achieving your dreams with our <span className="text-white font-medium"> Free Online Assessment. </span> <br className="hidden lg:block"/>Whether you're planning to travel, study, or work abroad.
              </p>
              </div>
              <div data-aos="fade-left">
                <button className="border-[1px] border-white py-2 lg:py-3 px-5 text-white text-lg lg:text-xl font-semibold">Free Assessment</button>
              </div>
           </div>
        </div>
       </div>
  )
}
