"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Orbitron, Bebas_Neue, Anton, Audiowide } from 'next/font/google';
import { ReactNode } from 'react';
import { Variants } from 'framer-motion';

// Initialize fonts
const orbitron = Orbitron({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const anton = Anton({ subsets: ['latin'], weight: ['400'] });
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });

// Define types for AnimatedText props
interface AnimatedTextProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

const AnimatedText = ({ children, direction = 'left', delay = 0 }: AnimatedTextProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-30px 0px',
  });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'left' ? 50 : -50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

function Hero() {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Reverted to original */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover" /* Removed scale-110 */
        >
          <source src="/hero_vedio.mp4" type="video/mp4" /> {/* Original path */}
        </video>
        <div className="absolute inset-0 bg-black/20"></div> {/* Original overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-2 md:space-y-3">
          {containerInView && (
            <>
              <AnimatedText direction="left" delay={0.2}>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-tight leading-none ${audiowide.className}`}>
                  im FULL-STACK
                </h1>
              </AnimatedText>

              <AnimatedText direction="right" delay={0.4}>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white text-right drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-tight leading-none ${audiowide.className}`}>
                  DEVELOPER
                </h1>
              </AnimatedText>

              <AnimatedText direction="left" delay={0.6}>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-tight leading-none ${audiowide.className}`}>
                  Devops
                </h1>
              </AnimatedText>

              <AnimatedText direction="right" delay={0.8}>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white text-right drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-tight leading-none ${audiowide.className}`}>
                  ENGINEER
                </h1>
              </AnimatedText>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/80 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero