import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaBook, FaLanguage, FaFont } from 'react-icons/fa';
import HeroSection from './common/HeroSection';
import TutorialCard from './common/TutorialCard';

const Tutorial = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: "Hiragana Mastery",
      category: "basics",
      duration: "15 min",
      difficulty: "Beginner",
      description: "Learn all 46 Hiragana characters with proper pronunciation and writing practice.",
      thumbnail: FaLanguage
    },
    {
      id: 2,
      title: "Katakana Essentials",
      category: "basics",
      duration: "20 min",
      difficulty: "Beginner",
      description: "Master Katakana characters used for foreign words and emphasis.",
      thumbnail: FaLanguage
    },
    {
      id: 3,
      title: "Basic Kanji Characters",
      category: "kanji",
      duration: "25 min",
      difficulty: "Intermediate",
      description: "Learn essential Kanji characters with stroke order and meanings.",
      thumbnail: FaFont
    },
    {
      id: 4,
      title: "Common Vocabulary Sets",
      category: "vocabulary",
      duration: "30 min",
      difficulty: "All Levels",
      description: "Essential Japanese words for daily conversations and situations.",
      thumbnail: FaBook
    },
    {
      id: 5,
      title: "Numbers and Counting",
      category: "basics",
      duration: "35 min",
      difficulty: "Beginner",
      description: "Master Japanese number systems and counting methods.",
      thumbnail: FaLanguage
    },
    {
      id: 6,
      title: "Business Vocabulary",
      category: "vocabulary",
      duration: "40 min",
      difficulty: "Advanced",
      description: "Professional Japanese vocabulary for workplace and business contexts.",
      thumbnail: FaBook
    },
    {
      id: 7,
      title: "Advanced Kanji Reading",
      category: "kanji",
      duration: "45 min",
      difficulty: "Advanced",
      description: "Master complex Kanji compounds and their multiple readings.",
      thumbnail: FaFont
    },
    {
      id: 8,
      title: "Idioms and Expressions",
      category: "vocabulary",
      duration: "50 min",
      difficulty: "Advanced",
      description: "Learn Japanese idioms, proverbs, and cultural expressions.",
      thumbnail: FaLanguage
    }
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'basics', label: 'Basics' },
    { value: 'kanji', label: 'Kanji' },
    { value: 'vocabulary', label: 'Vocabulary' }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-base-200">
      <HeroSection
        title="Tutorial Library"
        subtitle="Explore our comprehensive collection of Japanese vocabulary tutorials"
        gradient="from-green-600 to-teal-600"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                className={`btn ${selectedCategory === category.value ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTutorials.map(tutorial => (
            <TutorialCard
              key={tutorial.id}
              title={tutorial.title}
              difficulty={tutorial.difficulty}
              duration={tutorial.duration}
              description={tutorial.description}
              thumbnail={tutorial.thumbnail}
              onWatch={() => console.log(`Watching ${tutorial.title}`)}
            />
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No tutorials found in this category.</p>
          </div>
        )}

        <div className="card bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl">
          <div className="card-body text-center">
            <h3 className="card-title text-2xl justify-center mb-4">Ready to Start Learning?</h3>
            <p className="text-lg mb-4">Begin your Japanese vocabulary journey with our structured learning path</p>
            <div className="card-actions justify-center">
              <Link to="/start-learning" className="btn btn-secondary btn-lg">
                Start Learning Path
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
