import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-primary-300 mt-2">ALLEY Cafe</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Experience the perfect blend of exceptional coffee, delicious food, 
              and warm hospitality in the heart of Olmaliq
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-lg">
                <FiMapPin className="text-primary-300" />
                <span>Olmaliq, Uzbekistan</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
              <div className="flex items-center space-x-2 text-lg">
                <FiClock className="text-primary-300" />
                <span>Open Daily 7:00 AM - 10:00 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToMenu}
                className="btn-primary text-lg px-8 py-4 transform hover:scale-105"
              >
                Explore Menu
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4 transform hover:scale-105"
              >
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-secondary-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;