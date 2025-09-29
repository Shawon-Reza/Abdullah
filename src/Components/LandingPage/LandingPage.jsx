import React from 'react';
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
import DotGrid from '../../Styles/background/DotGrid';

const LandingPage = () => {
  return (
    <div className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Background Dot Grid */}

      {/* Page Content */}
      <div className="relative z-10 px-5 md:px-10 xl:px-15">
        <section className='py-5'>
          <NavBar />
        </section>

        <section>
          <HeroSection />
        </section>

        <section>
          <FeaturesSection />
        </section>

        <section>
          <ServicesSection />
        </section>

        <section>
          <HowItWorksSection />
        </section>

        <section>
          <FreeAccessSection />
        </section>

        <section>
          <TrustSection />
        </section>

        <section>
          <ReviewSection />
        </section>

        <section>
          <GlobalTradeComponent />
        </section>

        <section>
          <ReservationForm />
        </section>
      </div>

      {/* Footer */}
      <section className="relative z-10">
        <FooterComponent />
      </section>
    </div>
  );
};

export default LandingPage;
