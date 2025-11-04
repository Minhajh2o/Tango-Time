import CountUp from 'react-countup';
import { FaUsers, FaBookOpen, FaBook, FaVideo } from 'react-icons/fa';

const SuccessStats = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Success</h2>
        <div className="stats stats-vertical sm:grid-cols-2 lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary text-4xl">
              <FaUsers />
            </div>
            <div className="stat-title">User Count</div>
            <div className="stat-value text-primary">
              <CountUp end={10000} duration={3} separator="," useEasing={false} />+
            </div>
            <div className="stat-desc">Active learners</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaBookOpen />
            </div>
            <div className="stat-title">Lesson Count</div>
            <div className="stat-value text-secondary">
              <CountUp end={250} duration={3} useEasing={false} />+
            </div>
            <div className="stat-desc">Interactive lessons</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent text-4xl">
              <FaBook />
            </div>
            <div className="stat-title">Vocabulary Count</div>
            <div className="stat-value text-accent">
              <CountUp end={5000} duration={3} separator="," useEasing={false} />+
            </div>
            <div className="stat-desc">Japanese words</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-info text-4xl">
              <FaVideo />
            </div>
            <div className="stat-title">Tutorial Count</div>
            <div className="stat-value text-info">
              <CountUp end={180} duration={3} useEasing={false} />+
            </div>
            <div className="stat-desc">Video tutorials</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStats;

