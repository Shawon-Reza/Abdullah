import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import ServicesSection from './ServicesSection'
import HowItWorksSection from './HowItWorksSection'
import FreeAccessSection from './FreeAccessSection'
import ReviewSection from './ReviewSection'
import TrustSection from './TrustSection'
import ReservationForm from './ReservationForm'
import GlobalTradeComponent from './GlobalTradeComponent'
import FooterComponent from './FooterComponent'

const LandingPage = () => {
    return (
        <div className='bg-[#0F172A] text-white xl:px-10'>

            <section>
                <NavBar></NavBar>
            </section>
            <section>
                <HeroSection />
            </section>
            <section>
                <FeaturesSection></FeaturesSection>
            </section>
            <section>
                <ServicesSection></ServicesSection>
            </section>
            <section>
                <HowItWorksSection></HowItWorksSection>
            </section>
            <section>
                <FreeAccessSection></FreeAccessSection>
            </section>
            <section>
                <TrustSection></TrustSection>
            </section>

            <section>
                <ReviewSection></ReviewSection>
            </section>
            <section>
                <GlobalTradeComponent></GlobalTradeComponent>
            </section>
            <section>
                <ReservationForm></ReservationForm>
            </section>
            <section>
                <FooterComponent></FooterComponent>
            </section>




        </div>
    )
}

export default LandingPage