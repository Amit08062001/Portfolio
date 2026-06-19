import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { skillsData } from "../data/skillsData";

function Skills() {
  const tabs = Object.keys(skillsData);

  const [activeTab, setActiveTab] =
    useState("Frontend");

  return (
    <section
      id="skills"
      className="section"
    >
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern web applications."
      />

      <div
        className="
        glass
        rounded-2xl
        p-2
        flex
        flex-wrap
        gap-2
        mb-10
      "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`
              flex-1
              min-w-[180px]
              py-3
              rounded-xl
              transition-all
              duration-300
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="glass rounded-3xl p-8">
        <h3 className="text-3xl font-bold text-blue-400 mb-8">
          {activeTab}
        </h3>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >
          {skillsData[activeTab].map(
            (skill) => (
              <div
                key={skill}
                className="
                glass
                rounded-2xl
                p-8
                flex
                items-center
                justify-center
                text-center
                hover:border-blue-500
                transition-all
                duration-300
                hover:-translate-y-1
              "
              >
                <span className="font-semibold text-lg">
                  {skill}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;