"use client";

import React, { useEffect, ReactNode } from "react";
let stylesInjected = false;
const injectGlobalStyles = () => {
    if (stylesInjected) return;
    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes move-gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
    document.head.appendChild(style);
    stylesInjected = true;
};
const Gradient = ({
    children,
    className = ""
}) => {
    useEffect(() => {
        injectGlobalStyles();
    }, []);
    return <div className={`relative group ${className}`}>
      {/* Animated glowing border */}
      <div
        className="absolute -inset-2 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
        style={{
          background: "#E6620F",
          animation: "move-glow 4s linear infinite",
        }}
      ></div>

      {/* Foreground container */}
      <div className="relative rounded-xl p-0.5">
        {children}
      </div>
    </div>
};
export default Gradient;