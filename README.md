# ALLEY Cafe - Modern Cafe Website

A beautiful, modern, and fully responsive website for ALLEY Cafe located in Olmaliq, Uzbekistan. Built with React and Tailwind CSS, featuring a clean design, smooth animations, and comprehensive functionality.

## 🌟 Features

### ✅ Core Features
- **Modern, Minimal UI**: Clean and aesthetic design with warm color palette
- **Fully Responsive**: Perfect display on mobile, tablet, and desktop devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Smooth Animations**: Beautiful hover effects and transitions
- **Hero Section**: Stunning background image with welcome message
- **Menu Categories**: Organized sections for different food types
- **Menu Items**: Detailed cards with images, descriptions, and prices
- **Customer Testimonials**: Interactive slider with customer reviews
- **Reservation Form**: Complete contact form for table reservations
- **Social Media Integration**: Links to social media platforms

### 🎨 Design Elements
- **Color Palette**: Warm beige, brown, cream, and soft orange tones
- **Typography**: Poppins and Inter fonts for modern readability
- **Icons**: Feather icons for consistent visual language
- **Images**: High-quality Unsplash images for food and cafe atmosphere
- **Gradients**: Subtle background gradients and overlays

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Collapsible mobile menu

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd alley-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
alley-cafe/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with dark mode toggle
│   │   ├── Hero.jsx            # Hero section with background
│   │   ├── CategoryCard.jsx    # Menu category cards
│   │   ├── MenuItemCard.jsx    # Individual menu item cards
│   │   ├── TestimonialsSection.jsx # Customer reviews slider
│   │   ├── ContactSection.jsx  # Contact form and info
│   │   └── Footer.jsx          # Footer with links and info
│   ├── pages/
│   │   └── Home.jsx            # Main home page
│   ├── data/
│   │   └── menuData.js         # Menu items and categories data
│   ├── App.js                  # Main app component
│   ├── index.js               # React app entry point
│   └── index.css              # Global styles and Tailwind
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json
└── README.md
```

## 🎯 Menu Categories

The website features the following menu categories:

1. **☕ Coffee & Beverages** - Premium coffee and refreshing drinks
2. **🥐 Breakfast** - Start your day with delicious breakfast options
3. **🍽️ Lunch & Dinner** - Hearty meals for lunch and dinner
4. **🧁 Desserts** - Sweet treats to end your meal perfectly
5. **⭐ Specials** - Chef's seasonal recommendations

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Custom animations and styles

## 🎨 Customization

### Colors
The color palette can be customized in `tailwind.config.js`:
- **Primary**: Warm brown tones (#d68c52)
- **Secondary**: Beige and cream (#a8815c)
- **Accent**: Soft orange (#f97316)

### Menu Data
Update menu items and categories in `src/data/menuData.js`:
- Add new categories
- Update menu items with local pricing
- Change images and descriptions

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom animations and utilities

## 📞 Contact Information

Update the contact information in the components:
- **Address**: 123 Main Street, Olmaliq, Uzbekistan
- **Phone**: +998 90 123 45 67
- **Email**: hello@alleycafe.uz
- **Hours**: Mon-Fri 7AM-10PM, Sat-Sun 8AM-11PM

## 🌐 Deployment

The website can be deployed to various platforms:

### Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add deploy script to package.json
npm run deploy
```

## 📝 License

This project is created for ALLEY Cafe and is proprietary. All rights reserved.

## 🤝 Support

For support or questions about this website, please contact:
- Email: hello@alleycafe.uz
- Phone: +998 90 123 45 67

---

**Built with ❤️ for ALLEY Cafe, Olmaliq, Uzbekistan**
