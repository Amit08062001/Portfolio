import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experienceData } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and work experience."
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Center Timeline */}

        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/40 -translate-x-1/2" />

        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="
              relative
              mb-16
              flex
              items-center
              justify-between
            "
          >
            {/* LEFT CARD */}

            <div
              className={`
                w-full md:w-[46%]
                ${index % 2 === 0 ? "" : "md:invisible"}
              `}
            >
              {index % 2 === 0 && (
                <div
                  className="
                    glass
                    rounded-3xl
                    p-6
                    border
                    border-slate-800
                    transition-all
                    duration-300
                    hover:border-primary/40
                    hover:-translate-y-1
                  "
                >
                  <span
                    className="
                      inline-block
                      px-4
                      py-2
                      rounded-full
                      bg-primary/10
                      text-primary
                      text-sm
                      font-semibold
                      mb-4
                    "
                  >
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold mb-2">
                    {item.role}
                  </h3>

                  <h4 className="text-slate-400 mb-4">
                    {item.company}
                  </h4>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>

            {/* TIMELINE DOT */}

            <div
              className="
                hidden md:flex
                absolute
                left-1/2
                top-10
                -translate-x-1/2
                w-5
                h-5
                rounded-full
                bg-primary
                shadow-[0_0_20px_rgba(59,130,246,0.7)]
                z-10
              "
            />

            {/* RIGHT CARD */}

            <div
              className={`
                w-full md:w-[46%]
                ${index % 2 === 0 ? "md:invisible" : ""}
              `}
            >
              {index % 2 !== 0 && (
                <div
                  className="
                    glass
                    rounded-3xl
                    p-6
                    border
                    border-slate-800
                    transition-all
                    duration-300
                    hover:border-primary/40
                    hover:-translate-y-1
                  "
                >
                  <span
                    className="
                      inline-block
                      px-4
                      py-2
                      rounded-full
                      bg-primary/10
                      text-primary
                      text-sm
                      font-semibold
                      mb-4
                    "
                  >
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold mb-2">
                    {item.role}
                  </h3>

                  <h4 className="text-slate-400 mb-4">
                    {item.company}
                  </h4>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;