import { FiGift, FiUsers, FiClock } from "react-icons/fi"

const FreeAccessSection = () => {
  // This data structure makes it easy to integrate with backend later
  const offerData = {
    badge: {
      icon: FiGift,
      text: "Limited Launch Offer",
    },
    headline: {
      main: "First 100 Users Get 1 Month",
      highlight: "Pro Access FREE",
    },
    description: "Unlimited chatbot conversations, document generations, and freight calculations (fair-use applies).",
    stats: {
      spotsUsed: 87,
      totalSpots: 100,
      daysLeft: 12,
    },
    cta: {
      text: "Claim Your Free Pro Month",
      disclaimer: "Your free month starts on launch day after your first action within 72 hours",
    },
  }

  

  return (
    <div className="">
      {/* Main Offer Section */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full text-center">
          {/* Limited Launch Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8 cursor-pointer">
            <offerData.badge.icon className="w-4 h-4 text-slate-300" />
            <span className="text-slate-300 text-sm font-medium">{offerData.badge.text}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {offerData.headline.main}
            <br />
            <span className="text-white">{offerData.headline.highlight}</span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            {offerData.description}
          </p>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            {/* Spots Taken */}
            <div className="flex items-center gap-2 bg-slate-800/30 border border-slate-700 rounded-lg px-4 py-2 text-white/90">
              <FiUsers className="w-4 h-4 " />
              <span className=" text-sm">
                {offerData.stats.spotsUsed} of {offerData.stats.totalSpots} spots taken
              </span>
            </div>

            {/* Time Left */}
            <div className="flex items-center gap-2 bg-slate-800/30 border border-slate-700 rounded-lg px-4 py-2">
              <FiClock className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300 text-sm">Offer expires in {offerData.stats.daysLeft} days</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-6">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-transform duration-600 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 ">
              {offerData.cta.text}
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">{offerData.cta.disclaimer}</p>
        </div>
      </div>

   
    </div>
  )
}

export default FreeAccessSection
