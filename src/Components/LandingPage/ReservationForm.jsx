"use client"

import { useState } from "react"
import { FaRocket, FaChevronDown } from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { IoIosLock, IoMdCheckmark } from "react-icons/io"

const ReservationForm = ({ formData, onSubmit, isAdmin = false }) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        businessEmail: "",
        companyName: "",
        role: "",
        agreeToUpdates: false,
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const roleOptions = [
        "Select your role",
        "Trader",
        "Clearing/Operations",
        "Broker",
        "Compliance Officer",
        "Finance Director",
        "Senior Trader",
        "VP of Operations",
    ]

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormState((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            if (onSubmit) {
                onSubmit(formState)
            }
            console.log("Form submitted:", formState)
            setIsSubmitting(false)
            // Reset form after successful submission
            setFormState({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                businessEmail: "",
                companyName: "",
                role: "",
                agreeToUpdates: false,
            })
        }, 1000)
    }

    const defaultData = {
        title: "Reserve Your Free Pro Month",
        subtitle: "Join the first 100 users and get exclusive access to all Pro features",
        buttonText: "Reserve My Seat",
        disclaimer: "Your data is secure and will never be shared with third parties",
        policies: ["No spam", "No credit card", "Cancel anytime"],
    }

    const data = formData || defaultData

    return (
        <section className="py-16 px-4 bg-slate-900">
            <div className="max-w-2xl mx-auto">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-15 h-15 bg-[#1E293B] rounded-lg flex items-center justify-center">
                        <GoRocket className="text-[#66ADD3]" size={32} />
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{data.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{data.subtitle}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                                className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleInputChange}
                                placeholder="Smith"
                                className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formState.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="+1 880 1570767890"
                            className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            required
                        />
                    </div>

                    {/* Business Email */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Business Email</label>
                        <input
                            type="email"
                            name="businessEmail"
                            value={formState.businessEmail}
                            onChange={handleInputChange}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            required
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formState.companyName}
                            onChange={handleInputChange}
                            placeholder="Your Company Ltd"
                            className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            required
                        />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Your Role</label>
                        <div className="relative">
                            <select
                                name="role"
                                value={formState.role}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-800 border border-[#CBD5E1] rounded-lg text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                                required
                            >
                                {roleOptions.map((option, index) => (
                                    <option
                                        key={index}
                                        value={index === 0 ? "" : option}
                                        disabled={index === 0}
                                        className="bg-slate-800 text-white"
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start space-x-3 pt-2">
                        <input
                            type="checkbox"
                            name="agreeToUpdates"
                            checked={formState.agreeToUpdates}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 bg-slate-800 border border-[#CBD5E1] rounded focus:ring-blue-500 focus:ring-2"
                            required
                        />
                        <label className="text-gray-300 text-sm leading-relaxed">I agree to receive launch updates</label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#66ADD3] hover:bg-[#3d9bce] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6 cursor-pointer"
                    >
                        {isSubmitting ? "Reserving..." : data.buttonText}
                    </button>
                </form>

                {/* Disclaimer */}
                <div className="text-center mt-6">
                    <div className="flex items-center justify-center mb-2 gap-2">
                        <IoIosLock className="text-green-500" />
                        <p className="text-gray-400 text-xs">{data.disclaimer}</p>
                    </div>
                    <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        {data.policies.map((policy, index) => (
                            <span className="flex gap-1 items-center text-[#38A169]" key={index}><IoMdCheckmark /> {policy}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReservationForm
