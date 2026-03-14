"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("lead_popup_seen");

    if (!hasSeen) {
      setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("lead_popup_seen", "true");
      }, 1500);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // DUMMY BEHAVIOR: Simulate network request taking 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // DUMMY SUCCESS: Show alert and close modal
      alert("Thank you! We will contact you shortly.");
      setIsOpen(false);
      
      // Optional: Reset form fields if you want them empty next time it opens
      // setFormData({ name: "", city: "", phone: "", service: "" });
      
    } catch (error) {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-sm relative animate-in fade-in zoom-in duration-300">
        
        {/* Container with reduced vertical padding */}
        <div className="bg-white shadow-2xl rounded-2xl p-5 border border-gray-100 relative">
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 text-gray-400 hover:text-yellow-600 transition-colors text-xl font-bold"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Reduced margin-bottom on title and description */}
          <h2 className="text-xl font-bold text-center mb-1 text-gray-900">
            Let’s Grow Your Business 🚀
          </h2>
          <p className="text-center text-xs text-gray-500 mb-4">Fill in the details to get started.</p>

          {/* Tightened space-y and input padding */}
          <form onSubmit={handleSubmit} className="space-y-2 flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-sm"
            />

            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-sm"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-sm"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-600 text-sm"
            >
              <option value="">Select Service</option>
              <option value="Website">Website Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="App Development">App Development</option>
              <option value="Website + Digital Marketing">Website + Marketing</option>
              <option value="Not Sure">Not Sure Yet</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 transition-all text-black rounded-lg font-bold text-sm shadow-md active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}