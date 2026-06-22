import { useState } from "react";
import {
  FaCode,
  FaTools,
  FaBriefcase,
  FaLayerGroup,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { skillsData } from "../data/skillsData";

function Skills() {
  const tabs = Object.keys(skillsData);

  const [activeTab, setActiveTab] =
    useState("Frontend");

  const tabIcons = {
    Frontend: <FaCode />,
    Tools: <FaTools />,
    "Professional Work": <FaBriefcase />,
    Learning: <FaLayerGroup />,
  };

  return (
    <section
      id="skills"
      className="section !pt-28"
    >
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern web applications."
      />

      {/* Tabs */}
      <div className="glass rounded-2xl p-2 mb-10">
        {/* Mobile View */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`
                py-4
                rounded-xl
                flex
                justify-center
                items-center
                text-xl
                transition-all
                duration-300
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              {tabIcons[tab]}
            </button>
          ))}
        </div>

        {/* Desktop View */}
        <div
          className="
            hidden
            md:flex
            flex-wrap
            gap-2
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
      </div>

      {/* Skills Content */}
      <div className="glass rounded-3xl p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 md:mb-8">
          {activeTab}
        </h3>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            md:gap-6
          "
        >
          {skillsData[activeTab].map(
            (skill) => (
              <div
                key={skill}
                className="
                  glass
                  rounded-2xl
                  p-4
                  md:p-8
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
                <span className="font-semibold text-sm md:text-lg">
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