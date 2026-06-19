import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

function About() {
  const skills = [
    "React.js",
    "Redux Toolkit",
    "JavaScript ES6+",
    "Tailwind CSS",
    "REST APIs",
    "Performance Optimization",
    "Responsive Design",
    "Git & GitHub",
    "Vite",
    "Core Web Vitals",
  ];

  return (
    <section
      id="about"
      className="section pb-0"
    >
      <SectionTitle
        title="My Professional Side"
        subtitle="Frontend Developer focused on building scalable and high-performance web experiences."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-3xl p-8 border border-slate-800 h-full">
          <p className="text-white text-[1.1rem] leading-10">
  Frontend Developer with 2+ years of experience
  building scalable React.js applications,
  reusable component architectures, and responsive
  user interfaces. Experienced in API integration,
  performance optimization, Core Web Vitals
  improvements, and modern frontend development
  practices.
</p>

<div className="mt-12 space-y-8">

  <div className="flex gap-4">
    <FaEnvelope className="text-blue-400 text-2xl mt-1" />
    <div>
      <h4 className="font-semibold text-white text-2xl">
        Email
      </h4>
      <p className="text-slate-400">
        amitsingh08062001@gmail.com
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
    <div>
      <h4 className="font-semibold text-white text-2xl">
        Location
      </h4>
      <p className="text-slate-400">
        Haryana, India
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <FaGraduationCap className="text-blue-400 text-2xl mt-1" />
    <div>
      <h4 className="font-semibold text-white text-2xl">
        Education
      </h4>
      <p className="text-slate-400">
        B.Tech Computer Science & Engineering
      </p>
    </div>
  </div>
</div>

<h3 className="text-3xl font-bold mt-12 mb-6">
  Core Areas
</h3>

<div className="flex flex-wrap gap-3">
  {[
    "React.js",
    "Redux Toolkit",
    "JavaScript ES6+",
    "Tailwind CSS",
    "REST APIs",
    "Performance Optimization",
    "Reusable Components",
    "Git & GitHub",
    "Responsive Design",
    "Vite",
  ].map((skill) => (
    <span
      key={skill}
      className="
      px-4
      py-2
      rounded-full
      border
      border-blue-500/30
      text-blue-300
      text-sm
      bg-blue-500/5
      "
    >
      {skill}
    </span>
  ))}
</div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-8">
            Education
          </h3>

          <div className="space-y-6">
            {/* BTECH */}
            <div className="glass p-7 rounded-2xl">
              <h4 className="text-2xl font-bold">
                B.Tech Computer Science &
                Engineering
              </h4>

              <p className="text-blue-400 mt-2">
                Roorkee College of Engineering
              </p>

              <div className="flex justify-between mt-4 text-slate-400">
                <span>2019 - 2023</span>

                <span>69.17%</span>
              </div>
            </div>

            {/* 12TH */}
            <div className="glass p-7 rounded-2xl">
              <h4 className="text-2xl font-bold">
                Senior Secondary (12th)
              </h4>

              <p className="text-blue-400 mt-2">
                S.S. High School Basantpur,
                Siwan
              </p>

              <div className="flex justify-between mt-4 text-slate-400">
                <span>2017 - 2019</span>

                <span>71.8%</span>
              </div>
            </div>

            {/* 10TH */}
            <div className="glass p-7 rounded-2xl">
              <h4 className="text-2xl font-bold">
                Secondary (10th)
              </h4>

              <p className="text-blue-400 mt-2">
                High School Basantpur,
                Siwan
              </p>

              <div className="flex justify-between mt-4 text-slate-400">
                <span>2017</span>

                <span>76.6%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;