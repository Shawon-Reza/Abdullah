import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import FAQComponent from './FAQComponent'

const FAQ = () => {
    return (
        <div className='bg-[#0F172A] text-white'>
            <section className=''>
                <NavBar></NavBar>
            </section>



            <section className='mt-10'>
                <FAQComponent></FAQComponent>
            </section>



            <section className='mt-10'>
                <FooterComponent></FooterComponent>
            </section>

        </div>
    )
}

export default FAQ