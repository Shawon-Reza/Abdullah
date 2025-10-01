import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ServicesSection from './ServicesSection';
import HowItWorksSection from './HowItWorksSection';
import FreeAccessSection from './FreeAccessSection';
import ReviewSection from './ReviewSection';
import TrustSection from './TrustSection';
import ReservationForm from './ReservationForm';
import GlobalTradeComponent from './GlobalTradeComponent';
import FooterComponent from './FooterComponent';
import { useLocation } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const LandingPage = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true); // default true at top
  const [isAtTop, setIsAtTop] = useState(true);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setShowNav(true); // force navbar visible at top
      } else {
        setIsAtTop(false);
        setShowNav(false); // hide until hover
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on route change
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const sections = [
    <HeroSection key="hero" />,
    <FeaturesSection key="features" />,
    <ServicesSection key="services" />,
    <HowItWorksSection id="how-it-works" key="how" />,
    <FreeAccessSection key="freeaccess" />,
    <TrustSection key="trust" />,
    <ReviewSection key="review" />,
    <GlobalTradeComponent key="global" />,
    <ReservationForm key="reservation" />,
    <FooterComponent key="footer" />,
  ];

  return (
    <div className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Hover zone (only works when not at top) */}
      <div
        className="fixed top-0 left-0 w-full h-10 z-50"
        onMouseEnter={() => !isAtTop && setShowNav(true)}
        onMouseLeave={() => !isAtTop && setShowNav(false)}
      >
        {/* Animate NavBar in/out */}
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full"
            >
              <NavBar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page Sections */}
      <div className="pt-5">
        {sections.map((Component, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="w-full"
          >
            {Component}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
