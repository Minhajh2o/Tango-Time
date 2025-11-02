import React from 'react';
import { Link } from 'react-router';
import { FaStar, FaGlobe, FaHeart, FaHandshake, FaUsers, FaMapMarkerAlt, FaVideo, FaCheckCircle } from 'react-icons/fa';
import HeroSection from './common/HeroSection';
import TeamMemberCard from './common/TeamMemberCard';
import ValueCard from './common/ValueCard';
import StatCard from './common/StatCard';

const About = () => {
  const teamMembers = [
    {
      name: "Yuki Tanaka",
      role: "Master Instructor",
      bio: "Native Japanese speaker with 15+ years of experience teaching Japanese vocabulary",
      expertise: "JLPT N1, Teaching Methodology"
    },
    {
      name: "Hiroshi Sato",
      role: "Curriculum Director",
      bio: "Expert in Japanese language education and curriculum development",
      expertise: "Linguistics, Curriculum Design"
    },
    {
      name: "Emiko Nakamura",
      role: "Content Creator",
      bio: "Passionate educator creating engaging vocabulary lessons and interactive content",
      expertise: "Content Development, Multimedia"
    },
    {
      name: "Kenji Yamamoto",
      role: "Technology Lead",
      bio: "Develops innovative learning tools and platforms for Japanese vocabulary",
      expertise: "EdTech, Learning Systems"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest quality in all our courses and content.",
      icon: FaStar
    },
    {
      title: "Accessibility",
      description: "Japanese learning should be accessible to everyone, regardless of background.",
      icon: FaGlobe
    },
    {
      title: "Passion",
      description: "Our love for Japanese language and culture drives everything we do.",
      icon: FaHeart
    },
    {
      title: "Community",
      description: "Building a supportive community of learners studying together.",
      icon: FaHandshake
    }
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <HeroSection
        title="About TangoTime"
        subtitle="Dedicated to helping you master Japanese vocabulary"
        gradient="from-indigo-600 to-purple-600"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At TangoTime, we believe that everyone should have the opportunity to master Japanese vocabulary 
                in an effective and engaging way. Our mission is to make high-quality Japanese language education 
                accessible to learners worldwide through comprehensive vocabulary courses, expert instruction, and 
                a supportive learning community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Founded in 2020, we've grown from a small passion project to a leading platform with thousands 
                of students from over 50 countries. Our team of experienced Japanese language educators brings 
                decades of combined experience in both traditional and modern teaching methods.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                expertise={member.expertise}
              />
            ))}
          </div>
        </div>

        <div className="card bg-primary text-primary-content shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-3xl justify-center mb-6">Our Impact</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-primary text-primary-content">
              <StatCard
                icon={FaUsers}
                title="Students Taught"
                value="10,000+"
                description="From beginners to advanced"
              />
              <StatCard
                icon={FaMapMarkerAlt}
                title="Countries"
                value="50+"
                description="Global reach"
              />
              <StatCard
                icon={FaVideo}
                title="Hours of Content"
                value="500+"
                description="Comprehensive lessons"
              />
              <StatCard
                icon={FaCheckCircle}
                title="Success Rate"
                value="98%"
                description="Student satisfaction"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl justify-center mb-4">Join Our Community</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to start your Japanese vocabulary journey? Join thousands of students learning with us today.
              </p>
              <div className="card-actions justify-center">
                <Link to="/start-learning" className="btn btn-primary btn-lg">
                  Start Learning Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
