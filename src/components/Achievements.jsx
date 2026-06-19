import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionTitle
        title="Achievements"
        subtitle="Milestones, expertise, and professional highlights."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              glass
              rounded-3xl
              p-8
              border
              border-slate-800
              text-center
              transition-all
              duration-300
              hover:border-primary/40
              hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]
            "
          >
            {/* Icon Circle */}

            <div
              className="
                w-16
                h-16
                mx-auto
                mb-6
                rounded-full
                bg-primary/10
                border
                border-primary/20
                flex
                items-center
                justify-center
                text-3xl
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              🏆
            </div>

            {/* Number / Title */}

            <h3
              className="
                text-3xl
                font-bold
                text-primary
                mb-4
              "
            >
              {item.title}
            </h3>

            {/* Description */}

            <p
              className="
                text-slate-400
                leading-relaxed
              "
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;