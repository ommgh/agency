"use client";
import { useState } from "react";

interface FormData {
  services: string[];
  budget: string;
  name: string;
  email: string;
  details: string;
}

export default function CTA() {
  const [formData, setFormData] = useState<FormData>({
    services: [],
    budget: "",
    name: "",
    email: "",
    details: "",
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className="bg-black text-white py-16 md:py-24 tracking-widest">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        <h2 className="text-6xl md:text-8xl font-medium mb-16 md:mb-24">
          Let&apos;s
          <br />
          collaborate
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl">
          {/* Service Selection */}
          <div className="mb-12">
            <label className="block text-xl mb-4">Service</label>
            <div className="flex flex-wrap gap-3">
              {[
                "Interface design",
                "Illustration",
                "Identity",
                "Animation",
                "Webflow",
              ].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`px-6 py-3 rounded-full text-sm transition-colors ${
                    formData.services.includes(service)
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}>
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mb-12">
            <label className="block text-xl mb-4">Budget in USD</label>
            <div className="flex flex-wrap gap-3">
              {["less than 10K", "10K-50K", "more than 50K"].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, budget }))}
                  className={`px-6 py-3 rounded-full text-sm transition-colors ${
                    formData.budget === budget
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}>
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-12">
            <textarea
              placeholder="Project details (optional)"
              value={formData.details}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, details: e.target.value }))
              }
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-xl hover:text-gray-300 transition-colors">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
