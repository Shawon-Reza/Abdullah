"use client"
import { FaComments, FaFileAlt, FaShip, FaSearch } from "react-icons/fa"
import { TbReportSearch } from "react-icons/tb"

const ServicesSection = () => {
  // Service data structure for easy backend integration
  const servicesData = {
    title: "Our Core Services",
    subtitle:
      "AI-powered solutions that streamline fuel trading, handling due diligence, documentation, pricing, and deal execution with speed and precision.",
    services: [
      {
        id: 1,
        title: "AI Chatbot (Oil & Gas)",
        description:
          "Real pricing indication (5% error margin), market trends, expert projections, and Oil & Gas international news.",
        icon: FaComments,
        buttonText: "See a sample",
      },
      {
        id: 2,
        title: "Document Generator (ICPO/LOI/SPA, etc.)",
        description: "Drafts ICPO, LOI, FCO, SPA, NCNDA with ICPO/LOI problems checks; export to Whatsapp.",
        icon: FaFileAlt,
        buttonText: "See a sample",
      },
      {
        id: 3,
        title: "Vessel & Freight Calculator",
        description: "Shipping cost calculation for Oil & Gas international, freight, insurance, and demurrage risk.",
        icon: FaShip,
        buttonText: "See a sample",
      },
      {
        id: 4,
        title: "Due Diligence Reports",
        description:
          "Company data in a PDF with sanctions/PEP hits, registry records, ownership red flags, sanctions/ban forensics.",
        icon: TbReportSearch,
        buttonText: "See a sample",
      },
    ],
  }

  const handleSampleClick = (serviceTitle) => {
    // This function can be connected to backend API later
    console.log(`Viewing sample for: ${serviceTitle}`)
  }

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="lg:px-20 xl:px-34 2xl:px-52 3xl:px-60 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{servicesData.title}</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">{servicesData.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.services.map((service) => {
            const IconComponent = service.icon
            return (

              <div
                key={service.id}
                className="bg-slate-800 rounded-lg p-6  border-3 border-slate-700 hover:border-[#66ADD3] hover:shadow-lg transition-all duration-700 ease-in-out hover:scale-101"
              >

                {/* Icon */}
                <div className="mb-4">
                  <IconComponent size={42} className=" text-[#66ADD3] bg-[#66ADD3]/20 rounded-lg p-2" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Button */}
                <button
                  onClick={() => handleSampleClick(service.title)}
                  className="text-white cursor-pointer hover:text-blue-300 font-medium transition-colors duration-200 border border-[#94A3B8] hover:border-[#6c7581] px-4 py-2 rounded-xl"
                >
                  {service.buttonText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
