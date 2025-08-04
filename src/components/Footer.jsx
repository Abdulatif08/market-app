import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">ALLEY</h2>
                  <p className="text-primary-300 -mt-1">Cafe</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Experience the perfect blend of exceptional coffee, delicious food, 
                and warm hospitality in the heart of Olmaliq. Your neighborhood cafe 
                where every visit feels like home.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  <FiFacebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  <FiInstagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  <FiTwitter size={18} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary-300">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300">123 Main Street</p>
                    <p className="text-gray-300">Olmaliq, Uzbekistan</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-primary-400 flex-shrink-0" size={18} />
                  <p className="text-gray-300">+998 90 123 45 67</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FiMail className="text-primary-400 flex-shrink-0" size={18} />
                  <p className="text-gray-300">hello@alleycafe.uz</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary-300">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiClock className="text-primary-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300 font-medium">Monday - Friday</p>
                    <p className="text-gray-400 text-sm">7:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FiClock className="text-primary-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300 font-medium">Saturday - Sunday</p>
                    <p className="text-gray-400 text-sm">8:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="text-md font-semibold mb-4 text-primary-300">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#menu" className="block text-gray-300 hover:text-primary-400 transition-colors duration-200">Menu</a>
                  <a href="#about" className="block text-gray-300 hover:text-primary-400 transition-colors duration-200">About Us</a>
                  <a href="#contact" className="block text-gray-300 hover:text-primary-400 transition-colors duration-200">Contact</a>
                  <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors duration-200">Reservations</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} ALLEY Cafe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;