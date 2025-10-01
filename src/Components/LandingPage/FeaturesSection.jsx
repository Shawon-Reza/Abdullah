import { FaShieldAlt, FaFileAlt, FaShip, FaBolt } from "react-icons/fa"

const FeaturesSection = () => {
  // Structured data for easy backend integration
  const features = [
    {
      id: 1,
      icon: FaShieldAlt,
      title: "KYC/DD that takes days → minutes",
      description: "(sanctions, registries, WHOIS).",
    },
    {
      id: 2,
      icon: FaFileAlt,
      title: "Messy CIF/FOB math → transparent ladders",
      description: "demurrage flags.",
    },
    {
      id: 3,
      icon: FaShip,
      title: "ICPO/FCO/SPA mistakes → error-checked docs",
      description: "export-ready.",
    },
    {
      id: 4,
      icon: FaBolt,
      title: "Instant Platt price indications",
      description: "with margin of error less than or equal to 5%",
    },
  ]

  return (
    <section className="py-16 px-5 lg:px-10 xl:15 2xl:px-20">
      <div className=" mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 bg-[#0F172A]">
          {features.map((feature) => {
            const IconComponent = feature.icon

            return (
              <div
                key={feature.id}
                className="border border-[#FED1B5] bg-[#0F172A]  rounded-lg p-6 text-center space-y-8  text-secondary"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent size={52} className="text-orange-500  bg-[#1E293B] p-3 rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="text-base leading-relaxed">
                    <span className="font-medium text-[#CBD5E1]">{feature.title}</span>
                    {feature.description && (
                      <>
                        <br />
                        <span className="text-slate-300">{feature.description}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
