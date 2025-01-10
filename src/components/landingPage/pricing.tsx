"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "MVP Development Package",
      highlighted: true,
      price: 1999,
      features: [
        "Complete MVP development in 2-3 weeks",
        "Seamless integrations (payments, auth, etc.)",
        "30 days of free maintenance",
      ],
    },

    {
      name: "Growth Retainer Package",
      price: 2999,
      features: [
        "60 hours of development time per month",
        "Weekly strategy calls",
        "Continuous maintenance & optimization",
        "Flexible hours allocation",
      ],
    },
  ];

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={`bg-black text-white py-16 md:py-24 tracking-wider`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-widest mb-2">
              Pricing
            </h2>
            <p className="text-5xl md:text-6xl italic font-serif">Options</p>
          </div>
        </div>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col md:flex-row justify-between items-start md:items-center p-8 font-bold rounded-2xl ${
                plan.highlighted ? "border border-zinc-800" : ""
              }`}
            >
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-medium mb-6">{plan.name}</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-500">
                      <CheckCircle className="w-6 h-6 inline-block mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-medium">${plan.price}</div>
                </div>
                <Link href={"https://cal.com/ommishra/15min"}>
                  <Button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
