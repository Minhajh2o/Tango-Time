import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaChevronLeft, FaChevronRight, FaBook, FaPlayCircle } from 'react-icons/fa';

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Master Japanese Vocabulary",
      subtitle: "Learn thousands of Japanese words with interactive lessons",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
      buttonText: "Start Learning",
      buttonLink: "/start-learning"
    },
    {
      id: 2,
      title: "Expert-Led Tutorials",
      subtitle: "Learn from native Japanese speakers and language experts",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      buttonText: "View Tutorials",
      buttonLink: "/tutorial"
    },
    {
      id: 3,
      title: "Practice Anytime, Anywhere",
      subtitle: "Access your lessons on any device and learn at your own pace",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop",
      buttonText: "Get Started",
      buttonLink: "/start-learning"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel w-full h-[600px] relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${index}`}
          className={`carousel-item relative w-full ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
          } transition-opacity duration-500`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white relative z-10">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl md:text-6xl font-bold">{slide.title}</h1>
                <p className="mb-8 text-xl md:text-2xl">{slide.subtitle}</p>
                <div className="flex gap-4 justify-center">
                  <Link to={slide.buttonLink} className="btn btn-secondary btn-lg">
                    <FaBook className="mr-2" />
                    {slide.buttonText}
                  </Link>
                  <Link to="/tutorial" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-purple-600">
                    <FaPlayCircle className="mr-2" />
                    View Tutorials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary opacity-70 hover:opacity-100"
        onClick={goToPrevious}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary opacity-70 hover:opacity-100"
        onClick={goToNext}
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

