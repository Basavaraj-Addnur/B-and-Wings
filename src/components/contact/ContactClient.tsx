"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer/footer";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, XCircle, X } from "lucide-react";
import { useState } from "react";

// --- Custom Popup Component ---
const StatusModal = ({ 
  isOpen, 
  onClose, 
  type,
  customMessage // Added to show validation errors
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  type: "success" | "error" | null;
  customMessage?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[32px] p-8 shadow-2xl max-w-sm w-full text-center border border-gray-100"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-6">
              {type === "success" ? (
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-500 shadow-inner">
                  <XCircle size={40} />
                </div>
              )}
            </div>

            <h3 className="text-2xl font-black tracking-tight mb-2">
              {type === "success" ? "Message Sent!" : "Oops!"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {customMessage || (type === "success" 
                ? "Thank you! Within 24 hours our team will contact you. Ready to fly!" 
                : "Something went wrong. Our servers are a bit shy right now. Please try again.")}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg ${
                type === "success" 
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_4px_20px_rgba(251,191,36,0.3)]" 
                : "bg-red-500 text-white shadow-[0_4px_20px_rgba(239,68,68,0.3)]"
              }`}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  // --- Modal States ---
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    // 1. Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setModalType("error");
      setModalOpen(true);
      return;
    }

    // 2. Phone Validation (Exact 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, ""); // Remove non-digits
    if (phoneDigits.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      setModalType("error");
      setModalOpen(true);
      return;
    }

    setLoading(true);

    try {
      // DUMMY BEHAVIOR: Simulate network request taking 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // DUMMY SUCCESS: Show success modal and reset form
      setModalType("success");
      setModalOpen(true);
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        message: "",
      });
      
    } catch (error) {
      // Fallback in case something unexpected happens
      setModalType("error");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      
      {/* Custom Popup */}
      <StatusModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType} 
        customMessage={errorMessage}
      />

      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-50/50 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/30 blur-[100px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 pt-4">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                Touch
              </span>
              .
            </h1>
            <p className="text-gray-500 text-base max-w-lg">
              Ready to scale? Fill out the form or reach out directly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "connect@bandwings.com" },
                  { icon: <Phone className="w-4 h-4" />, label: "Call", value: "+91 87924 96446 / +91 81477 82338" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Office", value: "86, 8th cross Road, above Amma's pastries, yallappa garden, Malleshwaram, Bengaluru, India" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-bold text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 lg:-mt-28 pt-2.5 relative z-10"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-xl grid gap-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="name@gmail.com"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                      City
                    </label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your City"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                      Contact Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      maxLength={10}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                      placeholder="9876543210"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Briefly describe your goals..."
                    className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none resize-none text-sm font-medium"
                  />
                </div>

                <div className="flex justify-center mt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(251,191,36,0.3)] transition-all"
                  >
                    <span className="text-xs uppercase tracking-widest">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}