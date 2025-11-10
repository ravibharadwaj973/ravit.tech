'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Sayhello from './sayhello';

// Define specific variant types
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Define TypeScript interface for contact info
interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}

const Call = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      title: 'Email',
      value: 'jharavi0605@gmail.com',
      link: 'mailto:jharavi0605@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9311891503',
      link: 'tel:+919311891503',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/ravibharadwaj',
      link: 'https://www.linkedin.com/in/ravi-jha-999905390/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/ravibharadwaj973',
      link: 'https://github.com/ravibharadwaj973',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '📸',
      title: 'Instagram',
      value: '@ravi_bharadwaj_',
      link: 'https://www.instagram.com/_ravi_.307/_',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@RaviBharadwaj_',
      link: 'https://x.com/RaviJha28520095_',
      color: 'from-sky-500 to-blue-500'
    }
  ];

  const skills = [
    'Full Stack Development',
    'MERN Stack',
    'DevOps & Cloud',
    'React.js & Next.js',
    'Node.js & Express',
    'MongoDB & Databases',
    'AWS & Cloud Services',
    'Docker & Kubernetes',
    'CI/CD Pipelines',
    'REST APIs',
    'Microservices',
    'System Design'
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            LET&apos;S CONNECT
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s collaborate and create something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 overflow-hidden transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                </div>
                <p className="text-gray-300 text-lg">{contact.value}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↗
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
         <Sayhello/>

        {/* Skills & Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/30 mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Technologies & Expertise
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium hover:border-cyan-400/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Availability Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gray-900/50 rounded-2xl p-8 border border-green-500/30 mb-20"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Currently Available for Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">🚀</div>
              <p className="text-gray-300">Immediate Start</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">⏱️</div>
              <p className="text-gray-300">Flexible Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">🌍</div>
              <p className="text-gray-300">Remote Work</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Let&apos;s Build Your Next Big Project
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a complete web application, DevOps setup, or technical consultation, I&apos;m here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:jharavi0605@gmail.com">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </Link>
            <Link href="tel:+919311891503">
              <motion.button
                className="px-8 py-4 border-2 border-green-400 hover:bg-green-400/10 text-green-300 font-bold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Quick Response Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/30"
        >
          <p className="text-lg text-yellow-300">
            ⚡ <span className="font-bold">Quick Response:</span> I typically reply within 2 hours during business hours
          </p>
        </motion.div>

        {/* Social Media Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Follow me on social media</p>
          <div className="flex justify-center space-x-6">
            {contactInfo.slice(2).map((social, index) => (
              <motion.a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Call;