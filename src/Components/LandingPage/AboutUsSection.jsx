import React from "react";
import abdullahAvater from "../../assets/abdullah.png"
import olfiAvater from "../../assets/olfi.png"

// Example data
const teamMembers = [
  {
    id: 1,
    name: "Abdullah Mahmood",
    role: "Founder, Commercial Manager",
    bio: "Oil & gas trading professional focused on refined products (EN590, Jet A-1, gasoil). Experience across commercial negotiations, KYC/DD, SPA/LOI/ICPO drafting, CIF/FOB pricing, and chartering/demurrage risk control. Built FuelDeal.ai to standardize what good desks already do—then make it instant and exportable.",
    image: abdullahAvater,
  },
  {
    id: 2,
    name: "Olfi Mohammed",
    role: "Managing Director, ENGSL MINERALS DMCC",
    bio: "Over 30 years’ experience in oil & gas and carbon capture technology. Provides strategic guidance on trading best practices, risk management, and energy-transition capabilities that inform FuelDeal.ai’s product roadmap.",
    image: olfiAvater,
  },
];

const AboutUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-secondary sm:text-lg max-w-2xl mx-auto leading-relaxed">
          FuelDeal.ai is the AI co-pilot for oil & fuel trading—turning due diligence, trade documents, and CIF/FOB pricing into clean, send-ready exports in minutes.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-[40%] flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 md:w-64 md:h-64  rounded-tl-[90px] rounded-tr-[90px] rounded-bl-[150px] rounded-br-[70px] object-cover border-4 border-[#66ADD3]              "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[70%] text-center md:text-left">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-sm sm:text-base text-secondary mb-4">{member.role}</p>
              <p className="text-sm sm:text-base leading-relaxed text-secondary">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
