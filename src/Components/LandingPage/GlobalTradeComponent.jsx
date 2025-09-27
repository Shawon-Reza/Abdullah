import React from 'react';
import { FaUserTie, FaGlobeAmericas, FaBoxes } from 'react-icons/fa';

const GlobalTradeComponent = () => {
  return (
    <div className="bg-blue-950 text-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Built for Global Trade Professionals</h1>
      <p className="text-center text-base sm:text-lg mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
        Whether you’re a seasoned trader new to international commerce, our platform adapts to your specific role, region, and product categories.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6">
        <div className="bg-blue-900 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center w-full md:w-1/3">
          <div className="bg-blue-800 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
            <FaUserTie className="text-xl sm:text-2xl" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Professional Roles</h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
            <li>Trader</li>
            <li>Charterer/Ops/Broker</li>
            <li>Compliance</li>
          </ul>
        </div>
        <div className="bg-blue-900 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center w-full md:w-1/3">
          <div className="bg-blue-800 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
            <FaGlobeAmericas className="text-xl sm:text-2xl" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Global Regions</h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
            <li>MENA + Africa</li>
            <li>Europe + Asia</li>
          </ul>
        </div>
        <div className="bg-blue-900 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center w-full md:w-1/3">
          <div className="bg-blue-800 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
            <FaBoxes className="text-xl sm:text-2xl" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Product Categories</h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
            <li>Crude & Refined</li>
            <li>LNG & LPG</li>
            <li>Bunkers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalTradeComponent;