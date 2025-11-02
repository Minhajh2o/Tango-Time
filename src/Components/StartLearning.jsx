import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaQuestionCircle, FaBook } from 'react-icons/fa';
import HeroSection from './common/HeroSection';
import LevelSelector from './common/LevelSelector';
import CourseCard from './common/CourseCard';

const StartLearning = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  const levels = [
    { value: 'beginner', label: 'Beginner (N5)' },
    { value: 'intermediate', label: 'Intermediate (N4-N3)' },
    { value: 'advanced', label: 'Advanced (N2-N1)' }
  ];

  const learningPaths = {
    beginner: {
      title: "Beginner Path (JLPT N5)",
      description: "Start your Japanese vocabulary journey with fundamental words and phrases",
      courses: [
        {
          name: "Hiragana & Katakana Basics",
          duration: "2 hours",
          lessons: 8,
          description: "Learn the basic Japanese writing systems - Hiragana and Katakana characters"
        },
        {
          name: "Essential Daily Vocabulary",
          duration: "3 hours",
          lessons: 12,
          description: "Master fundamental words for everyday conversations and situations"
        },
        {
          name: "Basic Grammar Patterns",
          duration: "2.5 hours",
          lessons: 10,
          description: "Understand basic sentence structures and grammar fundamentals"
        }
      ]
    },
    intermediate: {
      title: "Intermediate Path (JLPT N4-N3)",
      description: "Expand your vocabulary and understanding of Japanese language patterns",
      courses: [
        {
          name: "Intermediate Vocabulary Sets",
          duration: "4 hours",
          lessons: 15,
          description: "Learn 500+ intermediate words covering various topics and contexts"
        },
        {
          name: "Kanji Reading & Writing",
          duration: "3.5 hours",
          lessons: 14,
          description: "Master common Kanji characters and their readings"
        },
        {
          name: "Complex Sentence Structures",
          duration: "3 hours",
          lessons: 12,
          description: "Understand advanced grammar patterns and sentence formations"
        }
      ]
    },
    advanced: {
      title: "Advanced Path (JLPT N2-N1)",
      description: "Master advanced vocabulary and achieve fluency in Japanese",
      courses: [
        {
          name: "Advanced Vocabulary Mastery",
          duration: "5 hours",
          lessons: 20,
          description: "Learn 1000+ advanced words for academic and professional contexts"
        },
        {
          name: "Advanced Kanji Proficiency",
          duration: "4 hours",
          lessons: 16,
          description: "Master complex Kanji characters and their nuanced meanings"
        },
        {
          name: "Idiomatic Expressions",
          duration: "4.5 hours",
          lessons: 18,
          description: "Learn Japanese idioms, proverbs, and colloquial expressions"
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedLevel];

  return (
    <div className="min-h-screen bg-base-200">
      <HeroSection
        title="Start Your Learning Journey"
        subtitle="Choose your level and begin mastering Japanese vocabulary"
        gradient="from-blue-600 to-purple-600"
      />

      <div className="container mx-auto px-4 py-12">
        <LevelSelector
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          levels={levels}
        />

        <div className="mb-8">
          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h3 className="card-title text-2xl">{currentPath.title}</h3>
              <p className="text-lg text-gray-600">{currentPath.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPath.courses.map((course, index) => (
              <CourseCard
                key={index}
                name={course.name}
                duration={course.duration}
                lessons={course.lessons}
                description={course.description}
                onStart={() => console.log(`Starting ${course.name}`)}
              />
            ))}
          </div>
        </div>

        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <div className="flex items-start gap-4">
              <FaQuestionCircle className="text-4xl shrink-0" />
              <div>
                <h3 className="card-title text-2xl mb-4">Need Help Choosing?</h3>
                <p className="text-lg mb-4">
                  Not sure which level is right for you? Take our free assessment quiz to determine your current skill level.
                </p>
                <div className="card-actions">
                  <button className="btn btn-secondary">
                    <FaQuestionCircle className="mr-2" />
                    Take Assessment
                  </button>
                  <Link to="/tutorial" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                    <FaBook className="mr-2" />
                    Browse Tutorials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
