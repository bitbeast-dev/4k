import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Lock } from 'lucide-react';

const ServicesTab = () => {
  return (
    <section id='our-services'>
      <div className=" py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold px-4 sm:px-6 lg:px-10 mb-4 sm:mb-6">
              Comprehensive 
              <span className="block sm:inline"> IT Solutions</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              From cybersecurity to custom software development, we provide end-to-end technology solutions 
              that drive business growth and digital transformation.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <div className="bg-[#202b44] rounded-2xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-center">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 text-center leading-relaxed">
                  Let's discuss how our solutions can address your specific needs
                </p>
                
                {/* Responsive Button Container */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#202b44] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
                    Get Free Consultation
                  </button>
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#202b44] transition-colors duration-200 text-sm sm:text-base">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

const ServicesPro = () => {
  return (
    <div>
      <ServicesTab />
    </div>
  );
};

export default ServicesPro;