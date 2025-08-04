import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="card p-6 cursor-pointer group overflow-hidden relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white h-48 flex flex-col justify-end">
        <div className="mb-4">
          <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {category.description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            View Items
          </span>
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
    </div>
  );
};

export default CategoryCard;