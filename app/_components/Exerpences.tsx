'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 180 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Color configurations
const colorClasses = {
  cyan: {
    line: "from-transparent via-cyan-500 to-transparent",
    border: "border-cyan-500 hover:border-cyan-400",
    shadow: "hover:shadow-cyan-500/10",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
  },
  blue: {
    line: "from-transparent via-blue-500 to-transparent",
    border: "border-blue-500 hover:border-blue-400",
    shadow: "hover:shadow-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-400",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
  },
  green: {
    line: "from-transparent via-green-500 to-transparent",
    border: "border-green-500 hover:border-green-400",
    shadow: "hover:shadow-green-500/10",
    text: "text-green-400",
    dot: "bg-green-400",
    badge: "bg-green-500/10 border-green-500/30 text-green-300 hover:bg-green-500/20"
  },
  purple: {
    line: "from-transparent via-purple-500 to-transparent",
    border: "border-purple-500 hover:border-purple-400",
    shadow: "hover:shadow-purple-500/10",
    text: "text-purple-400",
    dot: "bg-purple-400",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
  }
};

// Experience Card Component
const ExperienceCard = ({ title, description, technologies, color = "cyan" }) => {
  const currentColor = colorClasses[color];
  
  return (
    <div className={`bg-gray-900/80 rounded-2xl p-8 border-l-4 ${currentColor.border} transition-all duration-300 hover:shadow-2xl ${currentColor.shadow}`}>
      <h2 className={`text-3xl font-bold ${currentColor.text} mb-6 flex items-center`}>
        <span className={`w-3 h-3 ${currentColor.dot} rounded-full mr-3`}></span>
        {title}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.span 
            key={tech}
            className={`px-4 py-2 ${currentColor.badge} rounded-full text-sm font-medium transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Animated Section Component
const AnimatedSection = ({ children, color = "cyan" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentColor = colorClasses[color];

  return (
    <div className="relative mb-20" ref={ref}>
      {/* Animated Line */}
      <motion.div
        className={`absolute top-0 left-0 h-px bg-gradient-to-r ${currentColor.line} opacity-50`}
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />
      
      <motion.div
        className="pt-8"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Experiences = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats Header Section */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12">
            EXPERIENCES
          </h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Years Experience */}
            <motion.div
              className="text-center p-6 bg-gray-900/50 rounded-2xl border border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400">
                <CountUp start={0} end={3} duration={2.5} suffix="+" />
              </div>
              <p className="text-cyan-400 text-lg font-semibold mt-2">Years Experience</p>
              <p className="text-gray-400 text-sm mt-1">Full Stack Development</p>
            </motion.div>

            {/* Projects Delivered */}
            <motion.div
              className="text-center p-6 bg-gray-900/50 rounded-2xl border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400">
                <CountUp start={0} end={50} duration={3} suffix="+" />
              </div>
              <p className="text-purple-400 text-lg font-semibold mt-2">Projects Delivered</p>
              <p className="text-gray-400 text-sm mt-1">Successful Launches</p>
            </motion.div>

            {/* Success Rate */}
            <motion.div
              className="text-center p-6 bg-gray-900/50 rounded-2xl border border-green-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400">
                <CountUp start={0} end={100} duration={2.5} suffix="%" />
              </div>
              <p className="text-green-400 text-lg font-semibold mt-2">Success Rate</p>
              <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Sections Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* MERN Stack Experience */}
          <AnimatedSection color="cyan">
            <ExperienceCard
              title="MERN Stack Development"
              description="With over 3 years of hands-on experience in the MERN stack, I've built scalable web applications from concept to deployment. Specializing in creating responsive user interfaces, robust backend APIs, and real-time features that deliver exceptional user experiences."
              technologies={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Redux', 'Socket.io', 'REST APIs']}
              color="cyan"
            />
          </AnimatedSection>

          {/* Java Development */}
          <AnimatedSection color="blue">
            <ExperienceCard
              title="Java & Backend Systems"
              description="Extensive experience in Java development, building enterprise-level applications, microservices architecture, and robust backend systems. Focused on writing clean, maintainable code and implementing best practices in software engineering."
              technologies={['Java', 'Microservices', 'Apache Kafka']}
              color="blue"
            />
          </AnimatedSection>

          {/* DevOps & Cloud */}
          <AnimatedSection color="green">
            <ExperienceCard
              title="DevOps & Cloud Infrastructure"
              description="Expertise in implementing CI/CD pipelines, containerization, and cloud infrastructure management. Passionate about automating deployment processes, ensuring high availability, and optimizing application performance in cloud environments."
              technologies={['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions', 'Linux']}
              color="green"
            />
          </AnimatedSection>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;