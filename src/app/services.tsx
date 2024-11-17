"use client";
import React, { useState } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const coolVeticaRegular = localFont({
  src: "./fonts/Coolvetica-Regular.ttf",
  display: "swap",
  variable: "--font-cool-reg",
});

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    { id: 1, name: "UI/UX DESIGN", velocityText: "UI/UX DESIGN → " },
    { id: 2, name: "WEB DEVELOPMENT", velocityText: "WEB DEVELOPMENT →" },
    {
      id: 3,
      name: "MOBILE APP DEVELOPMENT",
      velocityText: "MOBILE APP DEVELOPMENT →",
    },
    { id: 4, name: "SEO MARKETING", velocityText: "SEO MARKETING →" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={`flex items-center justify-center font-semibold text-5xl p-5 ${coolVeticaRegular.className}`}
      >
        Here&apos;s What We Create
      </div>
      <div className="p-5 sm:p-10 border-neutral-100">
        {services.map((service) => (
          <div key={service.id} className="mb-8 relative">
            <motion.div
              className="relative p-5 text-xl cursor-pointer group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              animate={{
                backgroundColor:
                  hoveredService === service.id ? "#fff" : "black",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Name */}
              <motion.div
                className={`flex font-semibold items-center gap-2 ${coolVeticaRegular.className}`}
                animate={{
                  opacity: hoveredService === service.id ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.name}
              </motion.div>

              {/* Velocity Scroll Container */}
              <motion.div
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-black dark:text-white w-full">
                  <VelocityScroll
                    text={service.velocityText}
                    default_velocity={1.5}
                    className="text-lg font-bold"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
