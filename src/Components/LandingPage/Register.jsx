import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import PromoForm from './PromoForm'

const Register = () => {
    return (
        <div className='bg-[#0F172A]'>
            <section>
                <NavBar></NavBar>
            </section>
            <section>
                <PromoForm></PromoForm>
            </section>
            <section>
                <FooterComponent></FooterComponent>
            </section>
        </div>
    )
}

export default Register