import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import FooterComponent from './FooterComponent';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    const [plans, setPlans] = useState([]);

    // Sample data fetch simulation (replace with actual API call)
    useEffect(() => {
        const fetchPlans = async () => {
            // Simulate API response
            const samplePlans = [
                {
                    name: 'Basic',
                    description: 'Lorem ipsum dolor sit amet consectetur.',
                    price: '$49',
                    per: '/ user',
                    features: [
                        'Chatbot Unlimited',
                        'Docs/mo 10',
                        'Freight calcs/Month 10',
                        'DD reports/mo 5',
                        'Exports PDF/Word/Excel',
                        'Support Email (48h)',
                        'Extras Watermarked trials',
                    ],
                },
                {
                    name: 'Pro',
                    description: 'Lorem ipsum dolor sit amet consectetur.',
                    price: '$149',
                    per: '/ user',
                    features: [
                        'Chatbot Unlimited',
                        'Docs/mo Unlimited',
                        'Freight calcs/Month Unlimited',
                        'DD reports/mo Unlimited',
                        'Exports PDF/Word/Excel',
                        'Support Priority (24h)',
                        'Extras Template library, bulk export',
                    ],
                },
                {
                    name: 'Business',
                    description: 'Lorem ipsum dolor sit amet consectetur.',
                    price: '$859',
                    per: '/ 15 seats (pooled)',
                    features: [
                        'Chatbot Unlimited',
                        'Docs/mo Unlimited',
                        'Freight calcs/Month Unlimited',
                        'DD reports/mo Unlimited',
                        'Exports All + API/Webhooks',
                        'Support SLA (99.5%), Priority (8h)',
                        'Extras Shared templates, sandbox, dedicated success mgr.',
                    ],
                },
            ];
            setPlans(samplePlans);
        };
        fetchPlans();
    }, []);

    return (
        <div className="bg-[#0F172A] text-white">
            <section>
                <NavBar />
            </section>

            <section className='mt-10'>
                <div className="text-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto text-[#CBD5E1]">
                        Choose the plan that works best for you
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 max-w-6xl mx-auto hover:border-[#66ADD3]">
                        {plans.map((plan, index) => (

                            <div key={index} className="bg-[#1E293B] rounded-xl p-4 sm:p-6 flex flex-col w-full md:w-1/3 border-3 border-transparent hover:border-[#66ADD3] hover:shadow-lg transition-all duration-900 hover:scale-101">


                                <h2 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h2>
                                {/* <p className="text-sm sm:text-base text-gray-300 mb-4">{plan.description}</p> */}
                                <p className="text-3xl sm:text-4xl font-bold mb-6">
                                    {plan.price} <span className="text-base sm:text-lg font-normal">{plan.per}</span>
                                </p>
                                <ul className="space-y-3 mb-6 text-sm sm:text-base flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-[#CBD5E1]">
                                            <FaCheck className="text-blue-400 mr-2" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="cursor-pointer bg-[#66ADD3] hover:bg-[#3995c7] transition-colors duration-700 ease-in-out text-white font-semibold py-2 px-4 rounded-xl sm:py-2.5 sm:px-6 " >
                                    Upgrade Now <span className=' inline-block rotate-45 scale-140 ml-2' >↑</span>
                                </button>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <FooterComponent />
            </section>
        </div>
    );
};

export default Pricing;