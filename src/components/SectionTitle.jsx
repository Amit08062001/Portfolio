import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-1 sm:mb-12 md:mb-16 lg:mb-16 text-center"
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold gradient-text">
        {title}
      </h2>

      <p className="text-slate-400 mt-4 max-w-xl mx-auto mb-4">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;
