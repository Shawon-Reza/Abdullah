import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import AboutUsSection from './AboutUsSection';

const AboutUs = () => {


  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      <section>
        <NavBar />
      </section>

      <section className='mt-5'>
        <AboutUsSection></AboutUsSection>
      </section>

      <section className="mt-10">
        <FooterComponent />
      </section>
    </div>
  );
};

export default AboutUs;