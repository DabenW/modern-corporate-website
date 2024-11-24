import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Mike Johnson',
    position: 'Head of Design',
    image: 'https://via.placeholder.com/150',
  },
];

const achievements = [
  {
    year: '2023',
    title: 'Industry Innovation Award',
    description: 'Recognized for breakthrough technology solutions',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Successfully expanded to 15 new markets',
  },
  {
    year: '2021',
    title: 'Customer Excellence',
    description: '99% customer satisfaction rating',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We are a forward-thinking technology company dedicated to creating innovative solutions
          that empower businesses to thrive in the digital age.
        </p>
      </motion.section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Innovation', 'Integrity', 'Excellence'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">{value}</h3>
              <p className="text-gray-600">
                Committed to maintaining the highest standards and pushing boundaries.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="text-2xl font-bold text-blue-600 w-24">
                {achievement.year}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}