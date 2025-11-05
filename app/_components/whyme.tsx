'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const WhyHireMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const benefits = [
    {
      title: "🚀 Faster Time to Market",
      description: "I deliver projects <u>30-40% faster</u> than industry standards by using modern development practices and reusable code components."
    },
    {
      title: "💰 Cost-Effective Solutions",
      description: "Save up to <u>50% on development costs</u> with optimized code, efficient architecture, and right technology choices from day one."
    },
    {
      title: "🛡️ Bug-Free Production",
      description: "<u>Zero critical bugs</u> in production deployments. My rigorous testing approach ensures stable, reliable applications."
    },
    {
      title: "📈 Business-First Mindset",
      description: "I don't just write code - I <u>solve business problems</u>. Every line of code serves a clear business objective."
    },
    {
      title: "🌐 Full-Stack Expertise",
      description: "From UI/UX to deployment - <u>single point of responsibility</u>. No coordination headaches between multiple specialists."
    },
    {
      title: "🔧 Future-Proof Code",
      description: "Clean, maintainable code that <u>scales with your business</u>. Easy for other developers to understand and extend."
    }
  ];

  const uniqueSkills = [
    "Transforming complex requirements into simple solutions",
    "Building applications that handle millions of users",
    "Creating developer-friendly documentation",
    "Mentoring team members and improving code quality",
    "Staying updated with latest industry trends",
    "Quick adaptation to new technologies and frameworks"
  ];

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Loading skeleton */}
          <div className="animate-pulse">
            <div className="h-16 bg-gray-800 rounded-lg mb-16 mx-auto max-w-md"></div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800/50 rounded-2xl p-8 h-48"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            WHY HIRE ME?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Because I don't just <u>write code</u> - I <u>deliver results</u> that directly impact your <u>business success</u>.
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {benefit.title}
              </h3>
              <p 
                className="text-lg text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </motion.div>
          ))}
        </div>

        {/* What Makes Me Different */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-500/30 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            What Makes Me <u>Different</u>?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {uniqueSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 text-lg text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Section */}
        <motion.div 
          className="text-center bg-gray-800/30 rounded-2xl p-8 border border-yellow-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Your Return on Investment is <u>Guaranteed</u>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3x</div>
              <p className="text-gray-300">Faster development cycles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <p className="text-gray-300">Reduced maintenance costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <p className="text-gray-300">Project success rate</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          suppressHydrationWarning
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to <u>transform</u> your digital presence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build something <u>amazing</u> together. I'm ready to start delivering <u>value</u> from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" suppressHydrationWarning>
            <a href="/contact">
            <button 
            
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              suppressHydrationWarning
            >
              Schedule a Free Consultation
            </button>
            </a>
            <a href="/projects">
            <button 
              
              className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 text-blue-300 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              suppressHydrationWarning
              >
              View My Projects
            </button>
              </a>
          </div>
        </motion.div>

        {/* Final Impact Statement */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-2xl font-bold text-white">
            "Hiring me means getting a <u>strategic partner</u>, not just a developer. 
            I'm committed to your <u>success</u> as much as you are."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyHireMe;