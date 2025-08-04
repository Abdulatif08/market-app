import React from 'react';
import { FiPlus, FiStar } from 'react-icons/fi';

const MenuItemCard = ({ item }) => {
  return (
    <div className="card overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Add Button */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer hover:bg-primary-600 hover:text-white">
          <FiPlus size={18} />
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded-full flex items-center space-x-1 text-xs font-medium">
          <FiStar size={12} fill="currentColor" />
          <span>4.8</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {item.name}
          </h3>
          <div className="text-right">
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              {item.price}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              UZS
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Action Button */}
        <button className="w-full bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
          Add to Order
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default MenuItemCard;