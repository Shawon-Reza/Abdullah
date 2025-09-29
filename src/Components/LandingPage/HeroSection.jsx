import { FaPlay } from "react-icons/fa"
import Simplification from '../../assets/Simplification.png'
import DotGrid from "../../Styles/background/DotGrid"

const HeroSection = () => {
    const heroData = {
        cta: {
            text: "Claim 1 of 100 Free Pro Months",
            href: "#claim-free",
        },
        promoText: "First 100 users get 1 month of Pro free • Seats left: 100",
        video: {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            alt: "FuelDeal.ai demo video",
        },
    }

    return (
        <section className="relative py-12 lg:py-20  flex items-center overflow-hidden">
            
            {/* DotGrid background */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#1E1E20"
                    activeColor="#66ADD3"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
                    
                    {/* Left Column */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            FuelDeal.ai- <span className="text-primary">AI </span>
                            for <span className="text-primary">Oil & Fuel</span> trading
                        </h1>
                        <p className="text-lg sm:text-xl text-[#CBD5E1] mb-8 leading-relaxed">
                            Instant due diligence, clean trade docs, and CIF/FOB pricing in minutes.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-15 text-[#66ADD3]">
                            <div className="flex items-center justify-center gap-3 px-4 py-2 rounded-full border border-[#66ADD3]">
                                <img src={Simplification} alt="" /> Built by Traders, For Traders
                            </div>
                        </div>

                        <div className="mb-4">
                            <button className="inline-block hover:bg-[#309cd6] text-black px-15 py-3 rounded-2xl text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl bg-[#66ADD3] cursor-pointer">
                                {heroData.cta.text}
                            </button>
                        </div>
                        <p className="text-base text-secondary">{heroData.promoText}</p>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-slate-900   w-full   lg:min-h-0">
                            <video
                                src={heroData.video.src}
                                controls
                                className="min-h-[200px] max-h-[400px] w-full h-full object-cover rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 border-6 border-[#66ADD3]  lg:min-h-[450px] xl:min-h-[480px]"
                                poster=""
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
