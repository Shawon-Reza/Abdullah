import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { FiBox } from 'react-icons/fi';
import Gradient from '../../Styles/Borders/Gradient';

const GlobalTradeComponent = () => {
  const tradeCards = [
    {
      id: 1,
      title: "Professional Roles",
      icon: <MdOutlinePeopleAlt size={34} className="text-[#E6620F]" />,
      items: ["Trader", "Charterer/Ops/Broker", "Compliance"]
    },
    {
      id: 2,
      title: "Global Regions",
      icon: <SlLocationPin size={34} className="text-[#E6620F]" />,
      items: ["MENA + Africa", "Europe + Asia"]
    },
    {
      id: 3,
      title: "Product Categories",
      icon: <FiBox size={34} className="text-[#E6620F]" />,
      items: ["Crude & Refined", "LNG & LPG", "Bunkers"]
    },
  ];

  return (
    <div className="text-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Built for Global Trade Professionals
      </h1>
      <p className="text-center text-base sm:text-lg mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
        Whether you’re a seasoned trader new to international commerce, our platform adapts to your specific role, region, and product categories.
      </p>

      {/* Grid ensures equal height cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tradeCards.map((card) => (
          <Gradient key={card.id}>
            <div className="bg-[#0F172A] border border-[#FED1B5]/80 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center h-full md:min-h-[260px]  xl:min-h-0 hover:scale-102 transform transition-transform duration-700 ease-in-out">
              <div className="bg-[#1E293B] rounded-xl p-3 mb-6 flex items-center justify-center">
                {card.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4">{card.title}</h2>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-sm sm:text-base text-center flex justify-center flex-wrap gap-2">
                  {card.items.map((item, index) => (
                    <span key={index} className="flex items-center text-secondary">
                      <GoDotFill className="mr-1 text-[0.85rem]" />
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Gradient>
        ))}
      </div>
    </div>
  );
};

export default GlobalTradeComponent;
