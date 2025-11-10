'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Footer from '../_components/footer';
import Navbar from '../_components/Navbar';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend Development",
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: "Backend Development", 
      technologies: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: "DevOps & Cloud",
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
      icon: '☁️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: "Mobile & Tools",
      technologies: ['React Native', 'Git', 'Jenkins', 'Firebase', 'Socket.io', 'WebRTC'],
      icon: '📱',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Started Journey', description: 'Began my career in full-stack development' },
    { year: '2022', title: 'First Major Project', description: 'Led development of a large-scale e-commerce platform' },
    { year: '2023', title: 'DevOps Mastery', description: 'Mastered cloud infrastructure and deployment pipelines' },
    { year: '2024', title: 'Senior Level', description: 'Leading teams and architecting complex systems' }
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', color: 'text-cyan-400' },
    { number: 3, suffix: '+', label: 'Years Experience', color: 'text-purple-400' },
    { number: 100, suffix: '%', label: 'Client Satisfaction', color: 'text-green-400' },
    { number: 99.9, suffix: '%', label: 'System Uptime', color: 'text-orange-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  
  

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      
      {/* Hero Section with Photo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={ref}
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Left Side - Photo */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Photo Container */}
              <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
  <img 
    src="/about.jpg" 
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💻
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-2xl"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🚀
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  About Me
                </h1>
                <p className="text-2xl text-gray-300 mb-4 leading-relaxed">
                  Full Stack Developer & DevOps Engineer
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate software engineer with over <span className="text-cyan-400 font-semibold">3 years of experience</span> in building scalable web applications and robust cloud infrastructure. I specialize in the MERN stack and have extensive expertise in DevOps practices.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey began with a curiosity for how things work, which evolved into a love for creating digital solutions that make a real impact. I believe in writing clean, maintainable code and building systems that are both efficient and enjoyable to use.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                      <CountUp start={0} end={stat.number} duration={2.5} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              variants={itemVariants}
            >
              Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="group bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/30 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-3xl">{skill.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              variants={itemVariants}
            >
              My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-black z-10"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Development <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I believe in <span className="text-cyan-400 font-semibold">writing code that matters</span> - solutions that are not just functional, but elegant, scalable, and maintainable. Every line of code should tell a story of careful consideration and best practices.
              </p>
              
              <p>
                My approach combines <span className="text-purple-400 font-semibold">technical excellence</span> with <span className="text-green-400 font-semibold">user-centric design</span>. I strive to create applications that are both powerful under the hood and delightful to use.
              </p>
              
              <p>
                Continuous learning and adaptation are at the core of my work. In the fast-evolving tech landscape, staying curious and embracing new challenges is what drives innovation and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;