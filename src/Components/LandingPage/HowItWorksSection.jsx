import { FiUpload, FiSettings, FiDownload } from "react-icons/fi"

const HowItWorksSection = () => {
  // Structured data for easy backend integration
  const sectionData = {
    title: "How It Works",
    subtitle:
      "From input to output in minutes, not hours. Our streamlined process eliminates complexity while ensuring accuracy and compliance.",
  }

  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Input Your Basics",
      icon: FiUpload,
      description:
        "Input key information and we will generate the document, report, and freight indications into a PDF in minutes or less.",
      features: ["Drag & drop documents", "Manual data entry", "Template selection"],
      hasIndicator: true,
    },
    {
      id: 2,
      step: "02",
      title: "AI Processing",
      icon: FiSettings,
      description:
        "Our AI analyzes your data, cross-references global databases, validates compliance, and generates comprehensive insights.",
      features: ["Document analysis", "Compliance checking", "Risk assessment", "Price calculation"],
      hasIndicator: false,
    },
    {
      id: 3,
      step: "03",
      title: "Export & Execute",
      icon: FiDownload,
      description:
        "Download formatted documents, export data to Excel, or integrate directly into your existing trade management systems.",
      features: ["PDF/Word export", "API connectivity", "Email distribution"],
      hasIndicator: false,
    },
  ]

  return (
    <section className="bg-slate-900 py-16 px-4">

      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sectionData.title}</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">{sectionData.subtitle}</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.id}
                className="relative bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors duration-300 text-center"
              >


                {/* Step Number and Icon */}
                <div className="flex items-center justify-between mb-4 ">
                  <span className="text-white bg-[#323e4d] p-2 px-3 rounded-full text-sm font-medium mr-4">{step.step}</span>
                  <div className="bg-[#CBD5E1] p-2 rounded-lg cursor-pointer">
                    <IconComponent className="w-5 h-5 text-[#66ADD3] " />
                  </div>
                  
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>

                {/* Step Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400 text-sm  md:pl-14 lg:pl-20 xl:pl-28 2xl:pl-38">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
