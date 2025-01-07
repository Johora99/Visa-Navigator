
import { Link } from 'react-router-dom';
import { BorderBeam } from './ui/border-beam';
import AnimatedGradientText from './ui/animated-gradient-text';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function LatestVisa({ visa }) {
  const {
    _id,
    image,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true, 
  });
}, []);
  return (
    <div data-aos="zoom-in" className="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
      {/* Card Content */}
      <div className="relative">
        <div className="px-8 pt-20 pb-8 text-center">
          {/* Image with Rotation Animation */}
          <div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-tr from-orange-400 to-gray-200 border-4 border-white shadow-lg overflow-hidden card-image"
          >
            <img
              src={image}
              alt="Visa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title with Gradient Animation */}
          <AnimatedGradientText>
          <h3 className="mb-3">{countryName}</h3>
          </AnimatedGradientText>
          <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-orange-400 mb-6">
            Visa Type: <span className="font-medium">{visaType}</span>
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p>Processing Time:</p>
            <p className="font-medium text-right text-gray-800">{processingTime}</p>
            <p>Fee:</p>
            <p className="font-medium text-right text-gray-800">${fee}</p>
            <p>Validity:</p>
            <p className="font-medium text-right text-gray-800">{validity}</p>
            <p>Application:</p>
            <p className="font-medium text-right text-gray-800">{applicationMethod}</p>
          </div>

          {/* Call-to-Action Button with Gradient Animation */}
          <div className="mt-6">
            <Link
              to={`/visaApplication/${_id}`}
              className="inline-block py-2 px-8 shadow-md text-lg font-semibold text-white card-button transform transition-all duration-500 hover:scale-110"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
      <BorderBeam size={350} duration={12} delay={9} />
    </div>
  );
}
