import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // For phone and email icons

const PromoForm = () => {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Smith',
        phoneNumber: '+880 1757976790',
        email: 'email@domain.com',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center p-4">

            <div className=" p-6 rounded-lg shadow-lg w-full max-w-4xl text-center">

                <h2 className="text-2xl font-bold text-white mb-2">Claim 1 of 100 Free Pro Months</h2>
                <p className="text-sm text-gray-400 mb-6">
                    Join the first 100 users and get exclusive access to all Pro features
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full p-2 rounded-lg border border-[#CBD5E1]  text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full p-2 rounded-lg border border-[#CBD5E1] text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full p-2 pl-10 rounded-lg border border-[#CBD5E1] text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-2 pl-10 rounded-lg border border-[#CBD5E1] text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#66ADD3] text-white rounded-lg hover:bg-[#439bca] transition cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromoForm;
