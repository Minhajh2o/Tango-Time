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
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Let's Learn Japanese!</h1>
          <p className="text-xl">Master 100 essential vocabulary words through 10 comprehensive lessons</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Lessons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Lesson</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.lesson_no}
                to={`/lesson/${lesson.lesson_no}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary"
              >
                <div className="card-body items-center text-center">
                  <FaBook className="text-5xl text-primary mb-2" />
                  <h3 className="card-title text-2xl">{lesson.title}</h3>
                  <p className="text-sm text-gray-500">10 vocabularies</p>
                  <div className="badge badge-primary badge-outline mt-2">Start Learning</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tutorial Section with YouTube Video */}
        <section className="mb-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-4">
                <FaGraduationCap className="text-primary" />
                Learn Japanese Alphabet
              </h2>
              <p className="text-lg text-gray-500 mb-6">
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

              <div className="card-actions justify-center mt-6">
                <Link to="/tutorial" className="btn btn-primary btn-lg">
                  <FaPlay className="mr-2" />
                  View More Tutorials
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <FaBook />
                100 Vocabularies
              </h3>
              <p>Learn essential Japanese words organized across 10 structured lessons</p>
            </div>
          </div>
          
          <div className="card bg-secondary text-secondary-content shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <FaGraduationCap />
                Beginner Friendly
              </h3>
              <p>Perfect for beginners starting their Japanese learning journey</p>
            </div>
          </div>
          
          <div className="card bg-accent text-accent-content shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <FaPlay />
                Video Tutorials
              </h3>
              <p>Access premium video tutorials to enhance your learning experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
