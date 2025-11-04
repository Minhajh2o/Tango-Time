# 🎌 TangoTime - Japanese Vocabulary Learning Platform

A modern, interactive web application designed to help learners master Japanese vocabulary through structured lessons, video tutorials, and engaging user experiences.

## 🌐 Live URLs

- **Firebase Hosting:** [https://tango-time-d7d0c.web.app/](https://tango-time-d7d0c.web.app/)
- **Netlify:** [https://tango-time.netlify.app/](https://tango-time.netlify.app/)

## 🎯 Purpose

TangoTime provides a comprehensive platform for learning Japanese vocabulary, offering:
- Structured vocabulary lessons organized by difficulty levels
- Interactive learning experience with text-to-speech pronunciation
- Video tutorials for alphabet and grammar fundamentals
- User authentication and personalized profile management
- Progress tracking and gamified learning approach

## ✨ Key Features

### 🔐 Authentication System
- **Email/Password Registration & Login** with validation
- **Google Sign-In** (Smart authentication - popup for desktop, redirect for mobile)
- **Password Reset** via email with Firebase
- **Private Routes** for protected content
- **Profile Management** (view and update user information)

### 📚 Learning Features
- **100 Japanese Vocabulary Words** across 10 structured lessons
- **Difficulty Levels:** Easy, Medium, Difficult
- **Text-to-Speech Pronunciation** (Japanese - ja-JP)
- **Interactive Vocabulary Cards** with meanings, usage, and examples
- **Detailed Word Information:** Part of speech, when to use, example sentences
- **9 Curated Video Tutorials** for Japanese learning

### 🎨 User Interface
- **Fully Responsive Design** (Mobile, Tablet, Laptop, Desktop)
- **Modern UI Components** with DaisyUI and Tailwind CSS
- **Dark Theme Compatible**
- **Smooth Animations** and transitions
- **Toast Notifications** for user feedback
- **Animated Statistics** with CountUp effects

### 📊 Additional Features
- **About Page** with team information and impact statistics
- **Success Metrics Display** (10,000+ learners, 250+ lessons, 5,000+ words)
- **Social Media Integration** (Footer with social links)
- **App Download Section** (Google Play, App Store, Microsoft)

## 🛠️ Technologies & NPM Packages

### Core Technologies
- **React** `^19.1.1` - UI library
- **React Router** `^7.9.5` - Client-side routing
- **Vite** `^7.1.7` - Build tool and dev server

### Styling
- **Tailwind CSS** `^4.1.16` - Utility-first CSS framework
- **DaisyUI** `^5.4.2` - Tailwind CSS component library
- **@tailwindcss/vite** `^4.1.16` - Tailwind Vite plugin

### Authentication & Backend
- **Firebase** `^12.5.0` - Authentication, Hosting
  - Firebase Auth (Email/Password, Google Sign-In)
  - Firebase Password Reset
  - Firebase Hosting

### UI Enhancements
- **React Icons** `^5.5.0` - Icon library (Font Awesome icons)
- **React CountUp** `^6.5.3` - Animated number counting
- **React Toastify** `^11.0.5` - Toast notifications

### Development Tools
- **ESLint** `^9.36.0` - Code linting
- **@vitejs/plugin-react** `^5.0.4` - React plugin for Vite
- **eslint-plugin-react-hooks** `^5.2.0` - React Hooks linting rules
- **eslint-plugin-react-refresh** `^0.4.22` - React Fast Refresh plugin

## 📁 Project Structure

```
Tango-Time/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images and media files
│   ├── Components/              # React components
│   │   ├── About.jsx           # About page component
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── VocabularyModal.jsx # Vocabulary detail modal
│   │   └── common/             # Reusable components
│   │       ├── AboutSection.jsx
│   │       ├── Banner.jsx
│   │       ├── FeatureCard.jsx
│   │       ├── HeroSection.jsx
│   │       ├── StatCard.jsx
│   │       ├── SuccessStats.jsx
│   │       ├── TeamMemberCard.jsx
│   │       └── ValueCard.jsx
│   ├── data/                   # JSON data files
│   │   ├── tutorials.json     # Tutorial videos data
│   │   └── vocabularies.json  # 100 vocabulary words
│   ├── Firebase/              # Firebase configuration
│   │   └── firebase.config.js
│   ├── Layout/                # Layout components
│   │   ├── Home.jsx          # Home page layout
│   │   └── Layout.jsx        # Main app layout
│   ├── pages/                 # Page components
│   │   ├── StartLearning.jsx # Lessons overview
│   │   ├── Tutorial.jsx      # Video tutorials page
│   │   └── layout_pages/     # Authentication & profile pages
│   │       ├── ForgotPassword.jsx # Password reset page
│   │       ├── Lesson.jsx        # Individual lesson view
│   │       ├── Login.jsx         # Login page
│   │       ├── MyProfile.jsx     # User profile display
│   │       ├── Register.jsx      # Registration page
│   │       └── UpdateProfile.jsx # Profile update form
│   ├── Provider/             # Context providers
│   │   └── AuthProvider.jsx  # Authentication context
│   ├── Router/               # Routing configuration
│   │   ├── PrivateRoute.jsx # Protected route wrapper
│   │   └── Router.jsx       # Main router setup
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── .env.local               # Environment variables (Firebase config)
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Minhajh2o/Tango-Time.git
   cd Tango-Time
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Small Tablet:** 640px+ (sm)
- **Tablet:** 768px+ (md)
- **Laptop:** 1024px+ (lg)
- **Desktop:** 1280px+ (xl)

## 🔒 Environment Variables

Required Firebase configuration variables:
- `VITE_apiKey` - Firebase API key
- `VITE_authDomain` - Firebase auth domain
- `VITE_projectId` - Firebase project ID
- `VITE_storageBucket` - Firebase storage bucket
- `VITE_messagingSenderId` - Firebase messaging sender ID
- `VITE_appId` - Firebase app ID

## 🌟 Features in Detail

### Authentication Flow
- User registration with name, email, photo URL, and password
- Password validation (uppercase, lowercase, 6+ characters)
- Google OAuth integration with device-specific handling
- Persistent authentication state
- Protected routes for authenticated users only

### Learning Experience
- 10 structured lessons with 10 words each
- Color-coded difficulty levels (Green: Easy, Yellow: Medium, Red: Difficult)
- Click vocabulary cards to view detailed information
- Japanese pronunciation with Web Speech API
- Examples and usage context for each word

### Profile Management
- View user information (name, email, photo)
- Update profile name and photo URL
- Password reset via email
- Account metadata (creation date, last sign-in)

## 📄 License

This project is open-source and available for educational purposes.

## 👨‍💻 Author

**Minhajh2o**
- GitHub: [@Minhajh2o](https://github.com/Minhajh2o)

## 🙏 Acknowledgments

- Japanese vocabulary data curated for beginner to intermediate learners
- Video tutorials sourced from educational content creators
- UI inspiration from modern language learning platforms

---

**Happy Learning! 🎌📚**
