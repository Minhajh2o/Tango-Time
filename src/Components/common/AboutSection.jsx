import { Link } from 'react-router';
import { FaGraduationCap, FaBook, FaHeadphones, FaUserFriends } from 'react-icons/fa';

const AboutSection = () => {
  const learningMethods = [
    {
      icon: FaBook,
      title: "Comprehensive Vocabulary",
      description: "Access thousands of Japanese words organized by JLPT levels from N5 to N1"
    },
    {
      icon: FaHeadphones,
      title: "Audio Pronunciations",
      description: "Learn correct pronunciation with native speaker audio for every word"
    },
    {
      icon: FaGraduationCap,
      title: "Structured Learning",
      description: "Follow our step-by-step curriculum designed by language experts"
    },
    {
      icon: FaUserFriends,
      title: "Community Support",
      description: "Join a community of learners and practice with fellow students"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About TangoTime</h2>
        <div className="divider"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At TangoTime, our mission is to make Japanese vocabulary learning accessible, 
            engaging, and effective for everyone. We believe that mastering vocabulary is 
            the foundation of language fluency, and we're here to guide you through every step.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're preparing for the JLPT exam, planning to visit Japan, or simply 
            passionate about the Japanese language and culture, TangoTime provides you with 
            the tools and resources you need to succeed.
          </p>
          <Link to="/about" className="btn btn-primary btn-lg">
            Learn More About Us
          </Link>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">How You Can Learn Vocabulary</h3>
            <div className="space-y-4">
              {learningMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl text-primary">
                    <method.icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                    <p className="text-gray-500">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

