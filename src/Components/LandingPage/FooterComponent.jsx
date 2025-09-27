import React from 'react';
import { FaTint, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <footer className="bg-blue-950 text-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-6">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-3">
                            <FaTint className="text-blue-400 text-2xl sm:text-3xl mr-2" />
                            <h2 className="text-xl sm:text-2xl font-bold">FuelDeal.ai</h2>
                        </div>
                        <div className="bg-blue-800 p-3 rounded-md text-sm sm:text-base mb-4 max-w-xs">
                            AI-powered Trade Intelligence for Global Commerce. Transforming International Trade Operations with Automation and Insights.
                        </div>
                        <div className="flex space-x-4 text-xl">
                            <FaTwitter />
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 w-full md:w-auto">
                        <div>
                            <h3 className="font-bold text-base sm:text-lg mb-2">Product</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                                <li>AI Chatbot</li>
                                <li>Document Generator</li>
                                <li>Vessel & Freight Calculator</li>
                                <li>Due Diligence Reports</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-base sm:text-lg mb-2">Company</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                                <li>How It Works</li>
                                <li>Modules</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-base sm:text-lg mb-2">Support</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                                <li>Help Center</li>
                                <li>API Docs</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-600 mb-4" />
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300">
                    <p>© 2025 FuelDeal.ai All rights reserved.</p>
                    <p>Built with AI for the Future of Trade.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;