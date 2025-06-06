import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) return;

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'service_x06rr88',     // Replace with your service ID
        'template_rafnwhm',    // Replace with your template ID
        form.current,
        'x8QCNyFXnlDheoeZ6'      // Replace with your public key
      );


       if (result.status === 200) {
        setStatus("success");
        setMessage("✨ Message sent successfully!");
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus("error");
      setMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <section id="Contact" className="min-h-screen bg-transparent py-16 px-4 text-white relative overflow-hidden">
    <br></br>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-[#56FBDA]/10 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Main Container - Side by Side Layout */}
        <div className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl border border-[#56FBDA]/30 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            
            {/* Left Side - Contact Form */}
            <motion.div 
              className="p-8 border-r border-[#56FBDA]/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  className="inline-block mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-[#56FBDA] to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-[#56FBDA]/25">
                    <FaPaperPlane className="text-lg text-black" />
                  </div>
                </motion.div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#56FBDA] to-cyan-300 bg-clip-text text-transparent mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-gray-300">
                  Let's create something amazing together! ✨
                </p>
              </div>

              {/* Contact Form */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className={`text-sm transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-[#56FBDA]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-3 py-3 bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-[#56FBDA] focus:bg-black/60 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className={`text-sm transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#56FBDA]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Email"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-3 py-3 bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-[#56FBDA] focus:bg-black/60 transition-all duration-300"
                    />
                  </motion.div>
                </div>
                
                {/* Phone Field */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className={`text-sm transition-colors duration-300 ${
                      focusedField === 'phone' ? 'text-[#56FBDA]' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-3 py-3 bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-[#56FBDA] focus:bg-black/60 transition-all duration-300"
                  />
                </motion.div>
                
                {/* Message Field */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <FaComment className={`text-sm transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-[#56FBDA]' : 'text-gray-400'
                    }`} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-3 py-3 bg-black/40 border border-gray-600/50 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-[#56FBDA] focus:bg-black/60 transition-all duration-300 resize-none"
                  />
                </motion.div>
                
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-[#56FBDA] to-cyan-400 text-black font-semibold rounded-lg shadow-lg shadow-[#56FBDA]/25 hover:shadow-[#56FBDA]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>

              {/* Status Message */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 px-4 py-2 rounded-lg text-center text-sm font-medium ${
                    status === "success"
                      ? "bg-green-500/20 text-green-300 border border-green-400/30"
                      : "bg-red-500/20 text-red-300 border border-red-400/30"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </motion.div>

            {/* Right Side - Footer Content */}
            <motion.div 
              className="p-8 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Section */}
              <motion.div className="mb-8">
                <div className="relative">
                  <motion.p 
                    className="text-xl italic text-transparent bg-gradient-to-r from-[#56FBDA] via-cyan-300 to-[#56FBDA] bg-clip-text leading-relaxed font-light max-w-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    "The future belongs to those who believe in the beauty of their dreams."
                  </motion.p>
                  <div className="absolute -top-2 -left-2 text-[#56FBDA]/30 text-2xl font-serif">"</div>
                  <div className="absolute -bottom-2 -right-2 text-[#56FBDA]/30 text-2xl font-serif">"</div>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div className="flex gap-6 mb-8">
                {[
                  { icon: FaGithub, href: "https://github.com/Danishprabhu04", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/danish-prabhu-0a1691293/", label: "LinkedIn" },
                  { icon: FaTwitter, href: "https://x.com/danishprabhu27", label: "Twitter" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#56FBDA]/20 to-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center border border-[#56FBDA]/20 group-hover:border-[#56FBDA]/60 transition-all duration-300">
                      <social.icon className="text-lg text-gray-300 group-hover:text-[#56FBDA] transition-colors duration-300" />
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Creator Info */}
              <motion.div className="text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm">Crafted with</span>
                  <motion.span
                    className="text-red-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ❤️
                  </motion.span>
                  <span className="text-sm">by</span>
                </div>
                <motion.div 
                  className="text-transparent bg-gradient-to-r from-[#56FBDA] to-cyan-400 bg-clip-text font-semibold mt-1"
                  whileHover={{ scale: 1.05 }}
                >
                  Danish Prabhu K V
                </motion.div>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                className="mt-6 p-4 bg-black/20 rounded-lg border border-[#56FBDA]/10"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs text-gray-400 mb-2">Let's connect and collaborate!</p>
                <div className="flex justify-center gap-4 text-xs text-[#56FBDA]/80">
                  <span>💼 Available for projects</span>
                  <span>🚀 Open to opportunities</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;