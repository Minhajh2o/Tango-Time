import { Link } from 'react-router';
import { FaBook, FaPlay, FaGraduationCap } from 'react-icons/fa';

const StartLearning = () => {
  // Generate 10 lessons
  const lessons = Array.from({ length: 10 }, (_, i) => ({
    lesson_no: i + 1,
    title: `Lesson ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-base-200">
      {/* Page Title */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Let's Learn Japanese!</h1>
          <p className="text-base sm:text-lg md:text-xl px-4">Master 100 essential vocabulary words through 10 comprehensive lessons</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Lessons Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8">Choose Your Lesson</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.lesson_no}
                to={`/lesson/${lesson.lesson_no}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary"
              >
                <div className="card-body items-center text-center p-4 md:p-6">
                  <FaBook className="text-3xl sm:text-4xl md:text-5xl text-primary mb-2" />
                  <h3 className="card-title text-lg sm:text-xl md:text-2xl">{lesson.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">10 vocabularies</p>
                  <div className="badge badge-primary badge-outline mt-2 text-xs sm:text-sm">Start Learning</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tutorial Section with YouTube Video */}
        <section className="mb-8 md:mb-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-4 md:p-6 lg:p-8">
              <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4">
                <FaGraduationCap className="text-primary" />
                Learn Japanese Alphabet
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 md:mb-6">
                Master Hiragana and Katakana - the foundation of Japanese writing system
              </p>
              
              {/* YouTube Embedded Video */}
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6p9Il_j0zjc"
                  title="Learn Japanese Alphabet"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="card-actions justify-center mt-4 md:mt-6">
                <Link to="/tutorial" className="btn btn-primary btn-sm sm:btn-md lg:btn-lg">
                  <FaPlay className="mr-1 sm:mr-2" />
                  View More Tutorials
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body p-5 md:p-6">
              <h3 className="card-title text-base sm:text-lg">
                <FaBook />
                100 Vocabularies
              </h3>
              <p className="text-sm md:text-base">Learn essential Japanese words organized across 10 structured lessons</p>
            </div>
          </div>
          
          <div className="card bg-secondary text-secondary-content shadow-xl">
            <div className="card-body p-5 md:p-6">
              <h3 className="card-title text-base sm:text-lg">
                <FaGraduationCap />
                Beginner Friendly
              </h3>
              <p className="text-sm md:text-base">Perfect for beginners starting their Japanese learning journey</p>
            </div>
          </div>
          
          <div className="card bg-accent text-accent-content shadow-xl">
            <div className="card-body p-5 md:p-6">
              <h3 className="card-title text-base sm:text-lg">
                <FaPlay />
                Video Tutorials
              </h3>
              <p className="text-sm md:text-base">Access premium video tutorials to enhance your learning experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
