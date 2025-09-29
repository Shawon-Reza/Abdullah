import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQComponent = () => {
    const faqs = [
        {
            question: 'Do I need a credit card to start my free Pro month?',
            answer: 'No, you do not need a credit card to start your free Pro month. Simply sign up with your email.',
        },
        {
            question: "What's included in the Pro features that I won't get in the basic plan?",
            answer: 'Pro features include advanced AI tools, unlimited document generation, and priority support.',
        },
        {
            question: 'What will the pricing be after the free month?',
            answer: 'After the free month, pricing starts at $29/month for the Pro plan. Check our pricing page for details.',
        },
        {
            question: 'Can I edit and customize the generated documents?',
            answer: 'Yes, all generated documents are fully editable and customizable to fit your needs.',
        },
        {
            question: 'Is this suitable for teams, or just individual users?',
            answer: 'Our platform is suitable for both individual users and teams, with collaboration features available in higher plans.',
        },
        {
            question: 'How do you handle data privacy and security?',
            answer: 'We use industry-standard encryption and comply with GDPR and other regulations to ensure your data is secure.',
        },
    ];

    const [openIndices, setOpenIndices] = useState(new Set());

    const toggleFAQ = (index) => {
        const newOpenIndices = new Set(openIndices);
        if (newOpenIndices.has(index)) {
            newOpenIndices.delete(index);
        } else {
            newOpenIndices.add(index);
        }
        setOpenIndices(newOpenIndices);
    };

    return (
        <div className=" text-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-center text-[#CBD5E1] sm:text-lg mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto">
                Everything you need to know about getting started with our platform
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-[#E2E8F0] rounded-md overflow-hidden text-[#CBD5E1] ">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 sm:p-5 text-left text-sm sm:text-base font-medium transition-colors cursor-pointer"
                        >
                            <span>{faq.question}</span>
                            <FaChevronDown
                                className={`text-gray-400 transition-transform duration-300 ${openIndices.has(index) ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {openIndices.has(index) && (
                            <div className="p-4 sm:p-5 shadow-2xl text-sm sm:text-base">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQComponent;