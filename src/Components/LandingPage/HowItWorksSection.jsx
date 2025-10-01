import { FiUpload, FiSettings, FiDownload } from "react-icons/fi"

const HowItWorksSection = ({ id }) => {

console.log(id)

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
    },
    {
      id: 2,
      step: "02",
      title: "AI Processing",
      icon: FiSettings,
      description:
        "Our AI analyzes your data, cross-references global databases, validates compliance, and generates comprehensive insights.",
      features: ["Document analysis", "Compliance checking", "Risk assessment", "Price calculation"],
    },
    {
      id: 3,
      step: "03",
      title: "Export & Execute",
      icon: FiDownload,
      description:
        "Download formatted documents, export data to Excel, or integrate directly into your existing trade management systems.",
      features: ["PDF/Word export", "API connectivity", "Email distribution"],
    },
  ]

  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `

  return (
    <section id={id} className="bg-slate-900 py-16 px-5 lg:px-15 xl:15 2xl:px-36">
      <style>{customCss}</style>

      <div className="mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{sectionData.title}</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">{sectionData.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step) => {
          const IconComponent = step.icon
          return (
            <div key={step.id} className="relative group">
              {/* Animated Border */}
              <div
                className="absolute -inset-1 rounded-lg pointer-events-none "
                style={{
                  background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
                  animation: 'shimmer-spin 7.5s linear infinite'
                }}
              ></div>

              {/* Card Content */}
              <div className="relative bg-slate-800 border border-slate-700 rounded-lg p-6 text-center group-hover:border-slate-600 hover:scale-103 transform transition-transform duration-700 ease-in-out
                              flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white bg-[#323e4d] p-2 px-3 rounded-full text-sm font-medium mr-4">{step.step}</span>
                    <div className="bg-[#66ADD3]/30 p-2 rounded-lg cursor-pointer">
                      <IconComponent className="w-5 h-5 text-[#66ADD3]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>
                </div>

                <ul className="mt-auto flex flex-col items-center">
                  <div className="w-full max-w-[180px]"> {/* optional: control ul width */}
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400 text-sm mb-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </div>
                </ul>


              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorksSection
