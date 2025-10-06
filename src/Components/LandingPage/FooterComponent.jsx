import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import websitelogo from '../../assets/websitelogo.png';
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#002137] border border-[#0000001A] text-white py-6 px-10 sm:px-24">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-6">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-3 gap-2">
                            <img src={websitelogo} alt="FuelDeal.ai Logo" className="w-8 h-8" />
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">FuelDeal.ai</h2>
                        </div>
                        <div className="p-3 rounded-md text-sm sm:text-base mb-4 max-w-xs text-[#E2E8F0]">
                            AI-powered Trade Intelligence for Global Commerce. Transforming International Trade Operations with Automation and Insights.
                        </div>
                        <div className="flex space-x-4 text-xl">
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Grid section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 w-full lg:w-[65%]">
                        <div>
                            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2">Product</h3>
                            <ul className="space-y-1 text-sm sm:text-base text-[#E2E8F0]">
                                <li><a href="#">AI Chatbot</a></li>
                                <li><a href="#">Document Generator</a></li>
                                <li><a href="#">Vessel & Freight Calculator</a></li>
                                <li><a href="#">Due Diligence Reports</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2">Company</h3>
                            <ul className="space-y-1 text-sm sm:text-base text-[#E2E8F0]">
                                <li><a href="">How It Works</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/faq">FAQ</a></li>
                            </ul>
                        </div>
                        {/* <div>
                            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2">Support</h3>
                            <ul className="space-y-1 text-sm sm:text-base text-[#E2E8F0]">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">API Docs</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                <hr className="border-gray-600 mb-4" />

                <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300">
                    <p>© {new Date().getFullYear()} FuelDeal.ai All rights reserved.</p>
                    <p>Built with AI for the Future of Trade.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
