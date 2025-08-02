import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="border-t border-gray-300 text-white bg-[#202b44] p-6 md:p-10 rounded-tr-full md:rounded-tr-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
            <img src="logo.png" alt="Company Logo" className="w-32 mb-4" />
            <p className="hidden md:block text-center md:text-left mt-5">
              Leading IT company specializing in security solutions and technology services.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition duration-300">CCTV Systems</li>
              <li className="hover:text-blue-400 transition duration-300">Access Control</li>
              <li className="hover:text-blue-400 transition duration-300">Network Solutions</li>
              <li className="hover:text-blue-400 transition duration-300">Mobile Development</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition duration-300">About Us</li>
              <li className="hover:text-blue-400 transition duration-300">Our Team</li>
              <li className="hover:text-blue-400 transition duration-300">Careers</li>
              <li className="hover:text-blue-400 transition duration-300">Contact</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="" />{" "}
                <a href="#" className="ml-3 transition duration-300">
                  Kigali Rwanda (near Makuza Peace Plaza)
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="" />{" "}
                <a href="mailto:4kvisions22@gmail.com" className="ml-3  transition duration-300">
                  4kvisions22@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="" />{" "}
                <a href="tel:+250781823341" className="ml-3  transition duration-300">
                  +250 781 823 341 / +250 788 689 309
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="" />{" "}
                <a href="#" className="ml-3 transition duration-300">
                  4K Vision
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">© 2025 4K Vision. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
