import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: '张三',
    position: '首席执行官',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: '李四',
    position: '技术总监',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: '王五',
    position: '设计总监',
    image: 'https://via.placeholder.com/150',
  },
];

const achievements = [
  {
    year: '2023',
    title: '行业创新奖',
    description: '突破性技术解决方案的认可',
  },
  {
    year: '2022',
    title: '全球扩张',
    description: '成功拓展15个新市场',
  },
  {
    year: '2021',
    title: '客户满意度',
    description: '99%的客户满意度评分',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* 公司简介 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 md:mb-20"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">关于我们</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
          我们是一家致力于创新的科技公司，专注于为企业提供数字化转型解决方案，
          助力企业在数字时代蓬勃发展。
        </p>
      </motion.section>

      {/* 核心价值观 */}
      <section className="mb-12 md:mb-20">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12">核心价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {['创新', '诚信', '卓越'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4">{value}</h3>
              <p className="text-gray-600">
                致力于保持最高标准，不断突破创新。
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="mb-12 md:mb-20">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12">我们的团队</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 成就历程 */}
      <section>
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12">发展历程</h2>
        <div className="space-y-6 md:space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row md:items-start md:space-x-4"
            >
              <div className="text-xl md:text-2xl font-bold text-blue-600 md:w-24">
                {achievement.year}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}