import React from "react";
import { FiCircle, FiX, FiStar, FiZap, FiShield } from "react-icons/fi";
import Marquee from "./marquee";

const TrustSection = ({ trustData }) => {
  const defaultTrustData = {
    title: "Tested by international trading company",
    companies: [
      { name: " ENGSL MINERALS DMCC", id: 1, icon: "circle" },
      { name: " ENGSL MINERALS DMCC", id: 2, icon: "x" },
      { name: " ENGSL MINERALS DMCC", id: 3, icon: "star" },
      { name: " ENGSL MINERALS DMCC", id: 4, icon: "zap" },
      { name: " ENGSL MINERALS DMCC", id: 5, icon: "shield" },
      { name: " ENGSL MINERALS DMCC", id: 6, icon: "circle" },
      { name: " ENGSL MINERALS DMCC", id: 7, icon: "x" },
      { name: " ENGSL MINERALS DMCC", id: 8, icon: "star" },
      { name: " ENGSL MINERALS DMCC", id: 9, icon: "zap" },
      { name: " ENGSL MINERALS DMCC", id: 10, icon: "zap" },
      { name: " ENGSL MINERALS DMCC", id: 11, icon: "zap" },
    ],
  };

  const data = trustData || defaultTrustData;

  const getIcon = (iconType) => {
    const iconProps = { className: "w-6 h-6 text-slate-400" };
    switch (iconType) {
      case "circle": return <FiCircle {...iconProps} />;
      case "x": return <FiX {...iconProps} />;
      case "star": return <FiStar {...iconProps} />;
      case "zap": return <FiZap {...iconProps} />;
      case "shield": return <FiShield {...iconProps} />;
      default: return <FiCircle {...iconProps} />;
    }
  };

  // Split the companies into two halves for two lines
  const midIndex = Math.ceil(data.companies.length / 2);
  const firstLine = data.companies.slice(0, midIndex);
  const secondLine = data.companies.slice(midIndex);

  

  return (
    <div className="py-20 bg-[#0F172A]">
      <div className="mx-auto text-center mb-8">
        <p className="text-slate-300 text-lg font-medium">{data.title}</p>
      </div>

      {/* First marquee line */}
      <Marquee speed={40} pauseOnHover={true} repeat={3}>
        {firstLine.map((company) => (
          <div
            key={company.id}
            className="flex items-center gap-3 text-slate-400 hover:text-slate-300 cursor-pointer px-4 hover:scale-103 transform transition-transform duration-700 ease-in-out"
          >
            {getIcon(company.icon)}
            <span className="text-lg font-medium whitespace-nowrap">{company.name}</span>
          </div>
        ))}
      </Marquee>

      {/* Second marquee line */}
      <Marquee speed={40} reverse pauseOnHover={true} repeat={3} className="mt-4">
        {secondLine.map((company) => (
          <div
            key={company.id}
            className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors duration-200 cursor-pointer px-4"
          >
            {getIcon(company.icon)}
            <span className="text-lg font-medium whitespace-nowrap">{company.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustSection;
