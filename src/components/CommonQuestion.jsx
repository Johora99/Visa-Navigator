
import starIcon from '../assets/icons8-star-50.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import Img from '../assets/ques.jpg'
export default function CommonQuestion() {
     AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    const [activeIndex, setActiveIndex] = useState(null);
const faqs = [
  {
    question: "What types of visas do you offer?",
    answer: "We offer a variety of visa types, including tourist, student, work, and business visas. Please check our visa page for specific details."
  },
  {
    question: "How long does it take to process a visa application?",
    answer: "Processing times vary depending on the visa type and country of application. Typically, it takes between 5-15 business days."
  },
  {
    question: "Do I need an interview for my visa application?",
    answer: "Some visa types require an interview as part of the application process. This depends on your nationality and the type of visa you’re applying for."
  },
  {
    question: "Can I track the status of my visa application?",
    answer: "Yes, you can track the status of your visa application through our online portal. You will need your reference number to check the progress."
  },
  {
    question: "What documents are required to apply for a visa?",
    answer: "The documents required vary by visa type. Generally, you’ll need a valid passport, proof of funds, travel itinerary, and a visa application form. Please refer to our visa requirements page for more details."
  },
];

const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };
  return (
    <div>
      <div className="text-center pt-20">
            <div className='flex items-center justify-center gap-3'>
              <img src={starIcon} alt="" className='w-10'/>
                <h4 data-aos="zoom-in" className="text-Tangerine text-xl font-semibold uppercase">asked questions</h4>
              <img src={starIcon} alt="" className='w-10'/>
            </div>
            <div className='px-5'>
              <h2 data-aos="zoom-in" className="text-4xl lg:text-7xl font-bold leading-[50x] lg:leading-[100px] mb-20">Frequently Asked <br className='hidden lg:block'/>
              <span className="text-Tangerine">Questions</span></h2>
            </div>
            </div>
      

<section className=" py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Side Image */}
        <div data-aos="fade-right" className="w-full lg:w-1/2 flex justify-center relative group">
  {/* Container for Image */}
  <div className="relative">
    {/* Main Image */}
    <img
      src={Img}
      alt="FAQ Illustration"
      className="w-full max-w-md rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
    />

    {/* Multi-Layer Gradient Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-Tangerine via-red-500 to-pink-500 rounded-3xl -z-10 blur-lg opacity-80 transition duration-500 group-hover:scale-110 group-hover:blur-xl"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl -z-20 blur-3xl opacity-50"></div>

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <h3 className="text-2xl lg:text-3xl font-extrabold mb-3 uppercase tracking-wider drop-shadow-lg">
        Didn't Find What You Need?
      </h3>
      <p className="text-lg lg:text-xl mb-6 drop-shadow-md">
        Call Us Now!
      </p>
      <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text animate-pulse">
        (+32) 123-456-890
      </p>
    </div>
  </div>

  {/* Floating Decorative Shapes */}
  <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 shadow-xl animate-spin-slow group-hover:animate-pulse"></div>
  <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-gradient-to-bl from-purple-500 to-blue-500 shadow-2xl opacity-70 animate-bounce group-hover:animate-none"></div>
</div>


        {/* Right Side FAQ Section */}
        <div data-aos="fade-left" className="w-full lg:w-1/2">
    <h2
  className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-8 relative 
             inline-block overflow-hidden whitespace-nowrap bg-gradient-to-r from-Tangerine via-black to-Tangerine
             bg-clip-text text-transparent animate-gradientEffect"
>
  <span className="inline-block animate-typingEffect border-r-2 border-blue-500 ">
    Frequently Asked Questions
  </span>
</h2>


          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white p-5 rounded-lg shadow-md transition duration-300 hover:shadow-lg border-[1px] border-Tangerine relative"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-semibold text-Tangerine">
                    {faq.question}
                  </h3>
                  <div className="text-Tangerine text-2xl font-bold">
                    {activeIndex === index ? "-" : "+"}
                  </div>
                </div>
                {/* Answer Section */}
                <div
                  className={`mt-3 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-2xl">
    
    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



    </div>
  )
}
