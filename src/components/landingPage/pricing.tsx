"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const plans = [
    {
      name: "Beginner",
      price: billingPeriod === "monthly" ? 9.99 : 99.99,
      features: [
        "10+ videos courses",
        "PDF lessons",
        "Limited access to the Slack",
      ],
    },
    {
      name: "Intermediate",
      price: billingPeriod === "monthly" ? 29.99 : 299.99,
      features: [
        "All videos courses",
        "Everything from Beginner",
        "Full Slack Access",
      ],
      highlighted: true,
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? 44.99 : 449.99,
      features: ["Everything from", "Intermediate", "Private Zoom Calls"],
    },
  ];

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={`bg-black text-white py-16 md:py-24 tracking-wider`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-widest mb-2">
              Pricing
            </h2>
            <p className="text-5xl md:text-6xl italic font-serif">Options</p>
          </div>

          {/* Toggle Switch */}
          <div className="mt-8 md:mt-0 bg-zinc-900 p-1 rounded-full flex items-center">
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-white text-black"
                  : "text-gray-400"
              }`}>
              Yearly
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-white text-black"
                  : "text-gray-400"
              }`}>
              Monthly
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col md:flex-row justify-between items-start md:items-center p-8 font-bold rounded-2xl ${
                plan.highlighted ? "border border-zinc-800" : ""
              }`}>
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-medium mb-6">{plan.name}</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-medium">
                    ${plan.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    per {billingPeriod === "monthly" ? "month" : "year"}
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors">
                  <Plus className="w-4 h-4" />
                  Get Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
