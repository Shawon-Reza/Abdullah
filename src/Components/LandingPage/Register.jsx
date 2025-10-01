import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import PromoForm from './PromoForm'
import ReservationForm from './ReservationForm'

const Register = () => {
    return (
        <div className='bg-[#0F172A]'>
            <section>
                <NavBar></NavBar>
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

export default Register