import { FiCircle, FiX, FiStar, FiZap, FiShield } from "react-icons/fi"

const TrustSection = ({ trustData }) => {
  // Default data structure for easy backend integration
  const defaultTrustData = {
    title: "Tested by international trading company",
    companies: [
      { name: "Logoipsum", id: 1, icon: "circle" },
      { name: "Logoipsum", id: 2, icon: "x" },
      { name: "Logoipsum", id: 3, icon: "star" },
      { name: "Logoipsum", id: 4, icon: "zap" },
      { name: "Logoipsum", id: 5, icon: "shield" },
      { name: "Logoipsum", id: 6, icon: "circle" },
      { name: "Logoipsum", id: 7, icon: "x" },
      { name: "Logoipsum", id: 8, icon: "star" },
      { name: "Logoipsum", id: 9, icon: "zap" },
      { name: "Logoipsum", id: 10, icon: "zap" },
      { name: "Logoipsum", id: 11, icon: "zap" },

    ],
  }

  const data = trustData || defaultTrustData

  const getIcon = (iconType) => {
    const iconProps = { className: "w-6 h-6 text-slate-400" }

    switch (iconType) {
      case "circle":
        return <FiCircle {...iconProps} />
      case "x":
        return <FiX {...iconProps} />
      case "star":
        return <FiStar {...iconProps} />
      case "zap":
        return <FiZap {...iconProps} />
      case "shield":
        return <FiShield {...iconProps} />
      default:
        return <FiCircle {...iconProps} />
    }
  }

  return (
    <div className=" py-20 ">
      <div className=" mx-auto text-center">
        {/* Trust Title */}
        <p className="text-slate-300 text-sm font-medium mb-8">{data.title}</p>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {data.companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors duration-200 cursor-pointer"
            >
              {getIcon(company.icon)}
              <span className="text-lg font-medium whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustSection
