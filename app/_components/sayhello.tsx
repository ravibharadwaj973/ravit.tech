"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Sayhello = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const interests = [
    "Web Development",
    "Mobile Development",
    "DevOps & Cloud",
    "Full Stack Project",
    "Technical Consultation",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset status after 5 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Don't render form until client-side to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden py-8 mb-16">
            <div className="flex">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mx-4">
                SAY HELLO! 👋 •
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Loading skeleton for form */}
            <div className="space-y-6">
              <div className="h-12 bg-gray-800/50 rounded-lg"></div>
              <div className="h-24 bg-gray-800/50 rounded-lg"></div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-800/30 rounded-xl"></div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-700/50 rounded-lg"></div>
                ))}
                <div className="h-12 bg-cyan-500/50 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Fixed Animated "Say Hello!" Text - Only animate after mount */}
        <div className="relative overflow-hidden py-8 mb-16">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mx-4">
              SAY HELLO! 👋 •
            </h1>
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mx-4">
              SAY HELLO! 👋 •
            </h1>
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mx-4">
              SAY HELLO! 👋 •
            </h1>
          </motion.div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">
                Ready to elevate your code base to new heights?
              </span>{" "}
              Experience the exceptional expertise of a skilled mentor who
              effortlessly propels projects to the next level. Let's partner
              with your needs to{" "}
              <span className="text-purple-400 font-semibold">
                maximize your code's potential
              </span>
              . Don't miss out on this opportunity!
            </p>

            {/* Stats with CountUp */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <motion.div
                className="text-center p-4 bg-gray-800/30 rounded-xl border border-cyan-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-cyan-400">
                  <CountUp start={0} end={50} duration={2.5} suffix="+" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-gray-800/30 rounded-xl border border-purple-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-purple-400">
                  <CountUp start={0} end={100} duration={2.5} suffix="%" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Success Rate</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-gray-800/30 rounded-xl border border-green-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Start the Conversation
            </h3>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
              >
                ❌ Failed to send message. Please try again or contact directly.
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              suppressHydrationWarning
            >
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 peer"
                  suppressHydrationWarning
                />
                <label className="absolute left-4 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm pointer-events-none">
                  Your Name
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 peer-focus:w-full"></div>
              </motion.div>

              {/* Phone Input */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-400 transition-all duration-300 peer"
                  suppressHydrationWarning
                />
                <label className="absolute left-4 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-cyan-400 peer-focus:text-sm pointer-events-none">
                  Phone Number
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 peer-focus:w-full"></div>
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 px-4 py-3 text-white text-lg focus:outline-none focus:border-purple-400 transition-all duration-300 peer"
                  suppressHydrationWarning
                />
                <label className="absolute left-4 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-purple-400 peer-focus:text-sm pointer-events-none">
                  Email Address
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 peer-focus:w-full"></div>
              </motion.div>

              {/* Interest Select */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative"
              >
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 px-4 py-3 text-white text-lg focus:outline-none focus:border-green-400 transition-all duration-300 appearance-none peer"
                  suppressHydrationWarning
                >
                  <option value="" disabled className="bg-gray-800">
                    What are you interested in?
                  </option>
                  {interests.map((interest, index) => (
                    <option
                      key={index}
                      value={interest}
                      className="bg-gray-800"
                    >
                      {interest}
                    </option>
                  ))}
                </select>
                <label className="absolute left-4 top-3 text-gray-400 text-lg transition-all duration-300 peer-focus:top-0 peer-focus:text-green-400 peer-focus:text-sm pointer-events-none">
                  Interested In
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-500 peer-focus:w-full"></div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  ▼
                </div>
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative"
              >
                <textarea
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 px-4 py-3 text-white text-lg focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none peer min-h-[100px]"
                  suppressHydrationWarning
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-yellow-400 peer-focus:text-sm pointer-events-none">
                  Tell me about your project (in few words)
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 peer-focus:w-full"></div>
              </motion.div>

              {/* Let's Talk Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        ⏳
                      </motion.span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Let's Talk</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💬
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Typically reply within{" "}
            <span className="text-cyan-400 font-semibold">2 hours</span> during
            business hours
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sayhello;
