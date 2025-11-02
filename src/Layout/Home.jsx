import React from 'react';
import { Link } from 'react-router';
import { FaBullseye, FaChalkboardTeacher, FaBook, FaClock, FaAward, FaLightbulb } from 'react-icons/fa';
import BannerSlider from '../Components/common/BannerSlider';
import AboutSection from '../Components/common/AboutSection';
import SuccessStats from '../Components/common/SuccessStats';
import FeatureCard from '../Components/common/FeatureCard';

const Home = () => {
  const features = [
    {
      title: "Learn at Your Pace",
      description: "Our flexible learning system allows you to progress at your own speed, whether you're a beginner or advanced learner.",
      icon: FaBullseye
    },
    {
      title: "Expert Instructors",
      description: "Learn from world-class Japanese language instructors with years of experience and passion for teaching.",
      icon: FaChalkboardTeacher
    },
    {
      title: "Comprehensive Vocabulary",
      description: "Access thousands of Japanese words with detailed explanations, examples, and audio pronunciations.",
      icon: FaBook
    },
    {
      title: "Practice Anytime",
      description: "Practice whenever and wherever you want with our online resources and interactive exercises.",
      icon: FaClock
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Banner/Slider Section */}
      <BannerSlider />

      {/* About Section */}
      <AboutSection />

      {/* Features Section - Extra Section 1 */}
      <div className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose TangoTime?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Section with CountUp */}
      <SuccessStats />

      {/* Extra Section 2 - Learning Paths */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-lg text-gray-600">Choose the path that suits your current level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-xl">
            <div className="card-body">
              <div className="text-4xl mb-4">
                <FaAward />
              </div>
              <h3 className="card-title text-2xl mb-2">Beginner (N5)</h3>
              <p className="mb-4">Start with the basics - Hiragana, Katakana, and essential daily vocabulary.</p>
              <div className="card-actions">
                <Link to="/start-learning" className="btn btn-secondary">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-linear-to-br from-purple-500 to-purple-600 text-white shadow-xl">
            <div className="card-body">
              <div className="text-4xl mb-4">
                <FaChalkboardTeacher />
              </div>
              <h3 className="card-title text-2xl mb-2">Intermediate (N4-N3)</h3>
              <p className="mb-4">Expand your vocabulary and master Kanji characters with structured lessons.</p>
              <div className="card-actions">
                <Link to="/start-learning" className="btn btn-secondary">
                  Continue Learning
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-linear-to-br from-pink-500 to-pink-600 text-white shadow-xl">
            <div className="card-body">
              <div className="text-4xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="card-title text-2xl mb-2">Advanced (N2-N1)</h3>
              <p className="mb-4">Achieve fluency with advanced vocabulary and complex expressions.</p>
              <div className="card-actions">
                <Link to="/start-learning" className="btn btn-secondary">
                  Master Level
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Extra Section 3 */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-primary text-primary-content shadow-2xl border-2 border-white">
            <div className="card-body text-center">
              <h2 className="card-title text-4xl justify-center mb-4">Ready to Start Your Japanese Learning Journey?</h2>
              <p className="text-xl mb-6">Join thousands of students who are mastering Japanese vocabulary</p>
              <div className="card-actions justify-center">
                <Link to="/start-learning" className="btn btn-secondary btn-lg">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
