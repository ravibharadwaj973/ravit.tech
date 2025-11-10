"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experiences from "./_components/Exerpences";
import Navbar from "./_components/Navbar";
import WhyHireMe from "./_components/whyme";
import Hero from "./_components/hero";
import Sayhello from "./_components/sayhello";
import Footer from "./_components/footer";
import LoadingPage from "./_components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingPage />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative"
          >
            <Navbar/>
            <Hero/>
            <Experiences/>
            <WhyHireMe/>
            <Sayhello/>
            <Footer/>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}