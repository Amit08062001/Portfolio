import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section !pt-28">
      <SectionTitle
        title="Projects"
        subtitle="Professional work, product experiences, and frontend applications I've built."
      />

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="
              group
              grid
              lg:grid-cols-2
              gap-10
              items-center
              glass
              rounded-3xl
              p-8
              border
              border-slate-700
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-white
              hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
            "
          >
            {/* IMAGE */}

            <div
              className={
                index % 2 === 1
                  ? "lg:order-2"
                  : ""
              }
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-700
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:brightness-75
                  "
                />
              </div>
            </div>

            {/* CONTENT */}

            <div
              className={
                index % 2 === 1
                  ? "lg:order-1"
                  : ""
              }
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              >
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {project.description}
              </p>

              <div className="space-y-3 mb-6">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <span className="text-blue-400">
                      ✦
                    </span>

                    <span className="text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-blue-500/40
                      text-blue-400
                      text-sm
                      transition-all
                      duration-300
                      group-hover:border-blue-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="
                    bg-blue-600
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="
                    border
                    border-blue-500
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-blue-400
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Projects;