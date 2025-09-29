import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import FAQComponent from './FAQComponent'

const FAQ = () => {
    return (
        <div className='bg-[#0F172A] text-white'>
            <section>
                <NavBar></NavBar>
            </section>



            <section>
                <FAQComponent></FAQComponent>
            </section>



            <section className='mt-10'>
                <FooterComponent></FooterComponent>
            </section>

        </div>
    )
}

export default FAQ