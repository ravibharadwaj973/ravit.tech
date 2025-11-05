'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Footer from '../_components/footer';
import Navbar from '../_components/Navbar';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Food Delivery Application",
      description: "A full-stack food delivery platform with real-time order tracking, payment integration, and restaurant management system.",
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Razorpay'],
      stats: { users: '50K+', orders: '100K+', rating: '4.8' },
      color: 'from-orange-500 to-red-500',
      icon: '🚚'
    },
    {
      title: "Real-time Chat Application",
      description: "Modern messaging platform with group chats, file sharing, video calls, and end-to-end encryption for secure communication.",
      technologies: ['React.js', 'Socket.io', 'WebRTC', 'Firebase', 'Tailwind CSS'],
      stats: { users: '25K+', messages: '1M+', uptime: '99.9%' },
      color: 'from-blue-500 to-cyan-500',
      icon: '💬'
    },
    {
      title: "E-commerce Platform",
      description: "Scalable e-commerce solution with advanced search, recommendation engine, multi-vendor support, and analytics dashboard.",
      technologies: ['Next.js', 'Stripe', 'Elasticsearch', 'Redis', 'AWS'],
      stats: { products: '10K+', sales: '$2M+', vendors: '500+' },
      color: 'from-green-500 to-emerald-500',
      icon: '🛒'
    },
    {
      title: "Business Management System",
      description: "Comprehensive ERP solution for inventory management, HR, accounting, CRM, and business intelligence reporting.",
      technologies: ['React.js', 'Python', 'PostgreSQL', 'Django', 'Chart.js'],
      stats: { clients: '200+', modules: '15+', efficiency: '40%' },
      color: 'from-purple-500 to-pink-500',
      icon: '📊'
    }
  ];

  const devopsProjects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline with Jenkins, Docker, and Kubernetes for zero-downtime deployments.",
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
      color: 'from-yellow-500 to-orange-500',
      icon: '⚙️'
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture on AWS with auto-scaling, load balancing, and disaster recovery solutions.",
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'EC2', 'S3'],
      color: 'from-gray-500 to-blue-500',
      icon: '☁️'
    },
    {
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring system with Prometheus, Grafana, and ELK stack for real-time insights.",
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'New Relic'],
      color: 'from-teal-500 to-green-500',
      icon: '📈'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  // ProjectCard component
  const ProjectCard = ({ project, index }) => {
    const [animationRef, animationInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const direction = index % 2 === 0 ? fadeInLeft : fadeInRight;
    
    return (
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={animationInView ? "visible" : "hidden"}
        variants={direction}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 rounded-3xl`} />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-3xl mb-2">{project.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
            </div>
            <div className="text-2xl opacity-70">
              🔗
            </div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-white">
                  {value}
                </div>
                <div className="text-gray-400 text-xs capitalize">
                  {key.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // DevOpsCard component
  const DevOpsCard = ({ project, index }) => {
    const [animationRef, animationInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={animationInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500/50"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="text-2xl">{project.icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            ref={ref}
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 text-left">
                  PROJECTS
                </h1>
                <p className="text-xl text-gray-300 text-left mb-8 leading-relaxed">
                  Showcasing innovative solutions that solve real-world problems and deliver exceptional user experiences
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="text-left">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                      <CountUp start={0} end={50} duration={2} suffix="+" />
                    </div>
                    <p className="text-gray-400 text-sm">Projects</p>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400">
                      <CountUp start={0} end={100} duration={2} suffix="K+" />
                    </div>
                    <p className="text-gray-400 text-sm">Users</p>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl md:text-4xl font-bold text-green-400">
                      <CountUp start={0} end={99} duration={2} suffix=".9%" />
                    </div>
                    <p className="text-gray-400 text-sm">Uptime</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/picture1.jpg" 
                  alt="Projects Showcase"
                  className="w-full max-w-md h-70 object-cover rounded-2xl border border-cyan-500/30 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Projects Section */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-left text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* DevOps Section */}
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-left text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              DevOps & <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Infrastructure</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devopsProjects.map((project, index) => (
                <DevOpsCard 
                  key={project.title} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;