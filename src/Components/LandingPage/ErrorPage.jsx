import Lottie from 'lottie-react'
import React from 'react'
import errorPage from '../../assets/404.json'
import errorPagedark from '../../assets/404dark.json'

const ErrorPage = () => {
    return (
        <div className='h-screen bg-[#081228] flex items-center justify-center'>
            <section className='w-screen h-full'>
                <Lottie
                    animationData={errorPagedark}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                />
            </section>

        </div>
    )
}

export default ErrorPage