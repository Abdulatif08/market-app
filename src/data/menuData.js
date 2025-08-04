export const menuCategories = [
  {
    id: 'coffee',
    name: 'Coffee & Beverages',
    description: 'Premium coffee and refreshing drinks',
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day with our delicious breakfast options',
    icon: '🥐',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'lunch-dinner',
    name: 'Lunch & Dinner',
    description: 'Hearty meals for lunch and dinner',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to end your meal perfectly',
    icon: '🧁',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'specials',
    name: 'Specials',
    description: 'Chef\'s seasonal recommendations',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export const menuItems = {
  coffee: [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold espresso shot',
      price: '12,000',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Perfect blend of espresso, steamed milk and foam',
      price: '18,000',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: '20,000',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    },
    {
      id: 4,
      name: 'Americano',
      description: 'Espresso with hot water',
      price: '15,000',
      image: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    },
    {
      id: 5,
      name: 'Iced Coffee',
      description: 'Cold brew coffee with ice',
      price: '16,000',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    },
    {
      id: 6,
      name: 'Hot Chocolate',
      description: 'Rich and creamy hot chocolate',
      price: '22,000',
      image: 'https://images.unsplash.com/photo-1542990253-0b8febedfa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'coffee'
    }
  ],
  breakfast: [
    {
      id: 7,
      name: 'Croissant',
      description: 'Buttery, flaky French croissant',
      price: '8,000',
      image: 'https://images.unsplash.com/photo-1555507036-ab794f27d1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'breakfast'
    },
    {
      id: 8,
      name: 'Avocado Toast',
      description: 'Fresh avocado on artisan bread',
      price: '25,000',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'breakfast'
    },
    {
      id: 9,
      name: 'Pancakes',
      description: 'Fluffy pancakes with maple syrup',
      price: '28,000',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'breakfast'
    },
    {
      id: 10,
      name: 'Eggs Benedict',
      description: 'Poached eggs with hollandaise sauce',
      price: '32,000',
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'breakfast'
    }
  ],
  'lunch-dinner': [
    {
      id: 11,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing',
      price: '35,000',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'lunch-dinner'
    },
    {
      id: 12,
      name: 'Grilled Salmon',
      description: 'Fresh salmon with seasonal vegetables',
      price: '65,000',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'lunch-dinner'
    },
    {
      id: 13,
      name: 'Beef Burger',
      description: 'Juicy beef patty with fresh toppings',
      price: '45,000',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'lunch-dinner'
    },
    {
      id: 14,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan',
      price: '38,000',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'lunch-dinner'
    }
  ],
  desserts: [
    {
      id: 15,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee',
      price: '28,000',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'desserts'
    },
    {
      id: 16,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with ganache',
      price: '25,000',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'desserts'
    },
    {
      id: 17,
      name: 'Cheesecake',
      description: 'Creamy New York style cheesecake',
      price: '30,000',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'desserts'
    },
    {
      id: 18,
      name: 'Ice Cream',
      description: 'Artisan ice cream, various flavors',
      price: '15,000',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'desserts'
    }
  ],
  specials: [
    {
      id: 19,
      name: 'ALLEY Special Blend',
      description: 'Our signature coffee blend',
      price: '24,000',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'specials'
    },
    {
      id: 20,
      name: 'Seasonal Soup',
      description: 'Chef\'s daily soup creation',
      price: '18,000',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'specials'
    },
    {
      id: 21,
      name: 'Weekend Brunch',
      description: 'Special weekend brunch platter',
      price: '42,000',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      category: 'specials'
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Amazing coffee and atmosphere! The ALLEY Cafe has become my favorite spot in Olmaliq.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Mike Chen',
    text: 'Best breakfast in town! The avocado toast is absolutely delicious.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Emma Davis',
    text: 'Love the cozy atmosphere and friendly staff. Perfect place for meetings or just relaxing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];