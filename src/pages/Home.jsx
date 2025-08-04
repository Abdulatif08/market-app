import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import MenuItemCard from '../components/MenuItemCard';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import { menuCategories, menuItems } from '../data/menuData';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Scroll to menu items section
    setTimeout(() => {
      const element = document.querySelector('#menu-items');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getFilteredMenuItems = () => {
    if (selectedCategory === 'all') {
      return Object.values(menuItems).flat();
    }
    return menuItems[selectedCategory] || [];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                About ALLEY Cafe
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Located in the heart of Olmaliq, ALLEY Cafe is more than just a place to grab coffee. 
                We are a community hub where friends meet, business deals are made, and memories are created.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our passionate team sources the finest ingredients and crafts each dish with love and attention to detail. 
                From our signature coffee blends to our fresh pastries and hearty meals, every item on our menu 
                tells a story of quality and care.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
                  <p className="text-gray-600 dark:text-gray-300">Menu Items</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5★</div>
                  <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
                  <p className="text-gray-600 dark:text-gray-300">Fresh Ingredients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="ALLEY Cafe Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">2019</div>
                  <div className="text-sm">Est.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section id="menu" className="section-padding bg-primary-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Menu Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our carefully curated selection of delicious food and beverages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button
              onClick={() => handleCategoryClick('all')}
              className="btn-primary text-lg px-8 py-4"
            >
              View All Menu Items
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section id="menu-items" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {selectedCategory === 'all' 
                ? 'All Menu Items' 
                : menuCategories.find(cat => cat.id === selectedCategory)?.name || 'Menu Items'
              }
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {selectedCategory === 'all'
                ? 'Browse our complete menu selection'
                : menuCategories.find(cat => cat.id === selectedCategory)?.description || ''
              }
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
              }`}
            >
              All Items
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getFilteredMenuItems().map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {getFilteredMenuItems().length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;