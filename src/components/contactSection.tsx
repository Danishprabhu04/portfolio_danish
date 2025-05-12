import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x06rr88", // Replace with your service ID
        "template_rafnwhm", // Replace with your template ID
        form.current!,
        "x8QCNyFXnlDheoeZ6" // Replace with your user ID
      )
      .then(
        () => {
          setStatus("success");
          setMessage("✅ Message sent successfully!");
          if (form.current) {
            form.current.reset();
          }
        },
        // Remove the error parameter if it's not being used
        () => {
          setStatus("error");
          setMessage("❌ Failed to send message. Please try again.");
        }
      );
  

    // Hide message after 5 seconds
    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <section id="Contact" className="min-h-screen bg-transparent py-20 px-6 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#56FBDA] mb-8">Get in Touch</h2>
        <p className="mb-10 text-[#56FBDA]">Feel free to reach out for collaborations or just a friendly hello 👋</p>

        <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail} className="bg-gradient-to-r from-[#56FBDA] to-[#3A3A3A] p-10 rounded-xl shadow-xl space-y-6 max-w-4xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-black/40 border border-[#56FBDA] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#56FBDA] transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-black/40 border border-[#56FBDA] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#56FBDA] transition duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 bg-black/40 border border-[#56FBDA] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#56FBDA] transition duration-300"
          />
          <button
            type="submit"
            className="bg-[#56FBDA] text-black font-bold px-6 py-3 rounded-md hover:bg-[#3A3A3A] transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div
            className={`mt-6 px-4 py-3 rounded-md text-sm font-medium w-full max-w-md mx-auto ${
              status === "success"
                ? "bg-green-600 text-white border border-green-400"
                : "bg-red-600 text-white border border-red-400"
            }`}
          >
            {message}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
