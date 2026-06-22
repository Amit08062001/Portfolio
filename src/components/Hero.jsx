import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";
import resume from "../assets/Amit-Kumar-Singh-Resume.pdf";
import ScrollDown from "./ScrollDown";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center pt-32 lg:pt-40 relative"
>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute right-[10%] top-[30%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
          {/* IMAGE FIRST ON MOBILE */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="glass rounded-3xl p-4">
              <img
                src={profileImg}
                alt="Profile"
                className="
                  w-[260px]
                  sm:w-[300px]
                  lg:w-[340px]
                  h-auto
                  object-cover
                  rounded-2xl
                "
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 text-lg md:text-xl font-semibold mb-4">
              Hello World! I'm
            </p>

            <h1
              className="
              text-4xl
              sm:text-2xl
              md:text-2xl
              lg:text-6xl
              font-bold
              mb-2
              "
              style={{
                fontFamily: "monospace",
              }}
            >
              Amit Kumar Singh
            </h1>

            <h2
              className="
  text-xl
  md:text-3xl
  lg:text-3xl
  font-bold
  
  bg-gradient-to-r
  from-blue-400
  to-cyan-400
  bg-clip-text
  text-transparent
  min-h-[48px]
  lg:min-h-[56px]
  "
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "UI Engineer",
                  2000,
                  "React Specialist",
                  2000,
                  "Web Performance Enthusiast",
                  2000,
                ]}
                repeat={Infinity}
              />
            </h2>

            <p className="text-slate-400 text-base md:text-lg sm:text-sm leading-8 max-w-xl">
              Frontend Developer with 2+ years of experience building scalable
              React.js applications, reusable component architectures, and
              high-performance user interfaces. Passionate about delivering
              fast, accessible, and responsive web experiences through modern
              frontend technologies.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">2+</h3>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                <p className="text-slate-400 text-sm">Projects Built</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">React</h3>
                <p className="text-slate-400 text-sm">Specialist</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
              >
                Get In Touch →
              </a>

              <a
                href={resume}
                download
                className="border border-blue-500 px-6 py-3 rounded-xl font-semibold"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-8 mt-10 text-2xl">
              <a
                href="https://github.com/Amit08062001"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/amit-kumar-singh-a82a18224"
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
        </div>
      </div>
      <ScrollDown />
    </section>
  );
}

export default Hero;
