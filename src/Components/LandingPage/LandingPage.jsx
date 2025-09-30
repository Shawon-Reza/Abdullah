import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const location = useLocation()

  
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) {
          const offset = 100
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  const sections = [
    <NavBar key="navbar" />,
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
  );
};

export default LandingPage;
