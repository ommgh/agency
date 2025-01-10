"use client";
import React, { useState } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";

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
  ];

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={`bg-black text-white py-8 sm:py-16 md:py-24 overflow-hidden tracking-wider`}
    >
      <div className="w-full h-full flex flex-col">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-0 px-10 text-center">
          Here&apos;s What We Create
        </h2>
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
                  style={{ fontFamily: "var(--font-cool-reg)" }}
                  className={`flex font-semibold items-center gap-2`}
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
    </section>
  );
}
