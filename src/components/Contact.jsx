import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import SectionTitle from "./SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_h75vgpr",
        "template_6vk8v2v",
        form.current,
        "j8zEUw66UWQ6AZNRX"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's discuss opportunities and exciting projects."
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-primary font-semibold">
                Email
              </h4>

              <p className="text-slate-400">
                amitsingh08062001@gmail.com
              </p>
            </div>

            <div>
              <h4 className="text-primary font-semibold">
                Location
              </h4>

              <p className="text-slate-400">
                Gurugram, Haryana, India
              </p>
            </div>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/Amit08062001"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/amitkumar"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:amitsingh08062001@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* FORM */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <button
              type="submit"
              className="
                w-full
                bg-primary
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;