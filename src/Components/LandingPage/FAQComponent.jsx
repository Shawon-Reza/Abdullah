import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQComponent = () => {
    const faqs = [
        {
            question: 'Do I need a credit card?',
            answer: 'No, not for the first 100 users.',
        },
        {
            question: "What does Pro include?",
            answer: 'Unlimited chatbot, documents, and freight calculations (fair-use caps to prevent abuse)',
        },
        {
            question: 'Are prices “Platts”?',
            answer: 'We provide indicative CIF/FOB ladders with transparent sources; Platts requires a license.',
        },
        {
            question: 'Can I edit documents?',
            answer: 'Yes. Download Word/PDF/Excel and edit freely.',
        },
        {
            question: 'Team accounts?',
            answer: 'Business plan includes seats, SSO, and audit logs.',
        },
        {
            question: 'Data privacy?',
            answer: 'Your workspace is isolated; data can be exported and deleted anytime.',
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
        <div className="mt-5 text-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
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