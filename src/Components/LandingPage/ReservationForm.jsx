"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { FaRocket, FaChevronDown } from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { IoIosLock, IoMdCheckmark } from "react-icons/io"
import Swal from "sweetalert2"
import { toast, ToastContainer } from "react-toastify"

const ReservationForm = ({ formData, onSubmit, isAdmin = false }) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        businessEmail: "",
        companyName: "",
        role: "",
    })
    const [count, setCount] = useState(null)
    useEffect(() => {
        axios.get("https://api.fueldeal.ai/accounts/api/additional-info", {
           
        })
            .then(response => {
                // console.log(response.data); // will log twice in dev (StrictMode)
                setCount(response.data.subscription_count)
                // console.log(response.data)
            })
            .catch(error => {
                // console.error(error);
            });
    }, []); // 👈 empty array ensures it only runs on mount

    console.log(count)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const roleOptions = [
        "Select your role",
        "Trader",
        "Commercial Manager",
        "Chartering/Ops",
        "Broker",
        "Compliance",
        "Other",
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

        try {
            // Send POST request
            const res = await axios.post("https://api.fueldeal.ai/accounts/api/pre-subscribe", {
                first_name: formState.firstName,
                last_name: formState.lastName,
                phone_number: formState.phoneNumber,
                email: formState.businessEmail,
                company_name: formState.companyName,
                role: formState.role,
            })

            // console.log("Form submitted:", res.data)
            Swal.fire({
                title: "Good job!",
                text: "You reserved free pro month",
                icon: "success",
                background: "#1f2937", // dark gray background
                color: "#fff",          // white text
                confirmButtonColor: "#3b82f6" // blue button
            });


            // Call parent onSubmit if provided
            if (onSubmit) {
                onSubmit(formState)
            }

            // Reset form
            setFormState({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                businessEmail: "",
                companyName: "",
                role: "",
            })
        } catch (error) {
            // console.error("Submission failed:", error);
            const message = error?.response?.data?.error_message || error.message || "Unknown error";
            toast.error(`Error: ${message}`, {
                style: {
                    background: '#1f2937', // dark gray (Tailwind slate-800)
                    color: '#fff',          // white text
                    fontWeight: 'bold',
                },
                iconTheme: {
                    primary: '#f87171',    // icon color (red)
                    secondary: '#1f2937',  // icon background
                },
            });
            // console.log(message)
        }
        finally {
            setIsSubmitting(false)
        }
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
            <ToastContainer></ToastContainer>
            <div className="max-w-2xl mx-auto">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-15 h-15 bg-[#1E293B] rounded-lg flex items-center justify-center">
                        <GoRocket className="text-[#66ADD3]" size={32} />
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {data.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{data.subtitle}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                First Name
                            </label>
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
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Last Name
                            </label>
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
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Phone Number
                        </label>
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
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Business Email
                        </label>
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
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Company Name
                        </label>
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
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Your Role
                        </label>
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || count >= 100}
                        className="w-full bg-[#66ADD3] hover:bg-[#3d9bce] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6 cursor-pointer"
                    >
                        {count >= 100
                            ? "Limit Reached"
                            : isSubmitting
                                ? "Reserving..."
                                : data.buttonText}
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
                            <span
                                className="flex gap-1 items-center text-[#38A169]"
                                key={index}
                            >
                                <IoMdCheckmark /> {policy}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReservationForm
