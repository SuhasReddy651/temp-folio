import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Form URL
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeIbVYqKhoL6xtBF2yjE3yW80SvuWDBrQNJWgXbPqOWoeCnyA/formResponse";

    // Prepare form data for submission
    const formBody = new URLSearchParams();
    formBody.append("entry.2077839104", formData.firstName);
    formBody.append("entry.2008920250", formData.lastName);
    formBody.append("entry.2114486162", formData.email);
    formBody.append("entry.1006475672", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      setIsSent(true);

      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <section id="contact" className="pt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20 text-center text-4xl"
      >
        Contact Me
      </motion.h1>

      <div className="mx-auto max-w-7xl px-4 mb-60">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95842.7325775626!2d-122.84100384373853!3d45.5316567346851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e1!3m2!1sen!2sus!4v1736808693775!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-lg border border-neutral-800 p-8">
              {isSent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 text-center text-green-500"
                >
                  Message sent successfully!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-1/2 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 outline-none transition-colors focus:border-neutral-700"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-1/2 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 outline-none transition-colors focus:border-neutral-700"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 outline-none transition-colors focus:border-neutral-700"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 outline-none transition-colors focus:border-neutral-700"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-sky-900 px-8 py-4 text-neutral-100 transition-colors hover:bg-emerald-800"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-4"
          >
            <p>Feel free to reach out to me on my socials!</p>
          </motion.p>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://instagram.com/ss_suhas_reddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/suhasreddysathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SuhasReddy651"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
