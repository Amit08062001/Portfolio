import { useEffect, useState } from "react";

function TopProgress() {
  const [progress, setProgress] = useState(0);
  const [sectionPath, setSectionPath] = useState("{intro_}");
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { name: "intro", key: "intro", id: "home" },
    { name: "about me", key: "about_me", id: "about" },
    { name: "skills", key: "skills", id: "skills" },
    { name: "projects", key: "projects", id: "projects" },
    { name: "experience", key: "experience", id: "experience" },
    { name: "contact", key: "contact", id: "contact" },
  ];

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progressValue = (scrollTop / docHeight) * 100;

      setProgress(progressValue);

      setVisible(scrollTop > 100);

      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const experience = document.getElementById("experience");
      const contact = document.getElementById("contact");

      let path = "{intro_}";

      if (about && scrollTop >= about.offsetTop - 300) {
        path = "{intro_}{about_me_}";
      }

      if (skills && scrollTop >= skills.offsetTop - 300) {
        path = "{intro_}{about_me_}{skills_}";
      }

      if (projects && scrollTop >= projects.offsetTop - 300) {
        path = "{intro_}{about_me_}{skills_}{projects_}";
      }

      if (experience && scrollTop >= experience.offsetTop - 300) {
        path = "{intro_}{about_me_}{skills_}{projects_}{experience_}";
      }

      if (contact && scrollTop >= contact.offsetTop - 300) {
        path = "{intro_}{about_me_}{skills_}{projects_}{experience_}{contact_}";
      }

      setSectionPath(path);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
      fixed
      top-0
      left-0
      right-0
      z-[999]
      bg-[#111827]
      border-b
      border-slate-800
    "
    >
      <div className="max-w-7xl mx-auto px-4 py-1.5 ">
        <div className="relative flex items-center gap-4">
          <span className="text-yellow-400 text-sm font-semibold whitespace-nowrap">
            <span className="text-green-400 mr-1 text-lg">→</span>{" "}
            {Math.round(progress)}%
          </span>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-gray-800">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />

              <div className="relative flex items-center justify-between px-4 py-1.5">
                <span className="font-mono text-black text-sm">
                  {sectionPath}
                </span>

                <span className="text-white text-sm font-mono">
                  {100 - Math.round(progress)}% remaining
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="
              w-8
              h-8
              rounded-lg
              bg-[#1F2937]
              flex
              
              justify-center
              text-white
              hover:bg-[#273449]
              transition-all
            "
          >
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {open && (
            <div
              className="
            absolute
            top-12
            right-0
            w-56
            bg-[#111827]/95
            backdrop-blur-xl
            rounded-2xl
            overflow-hidden
            border
            border-slate-700
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
          "
            >
              <div className="py-2">
                {menuItems.map((item, index) => {
                  const current = sectionPath.includes(item.key);

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="
          flex
          items-center
          justify-between
          px-5
          py-3
          font-mono
          text-[15px]
          transition-all
          duration-200
          hover:bg-blue-500/10
          hover:text-blue-400
          hover:translate-x-1
        "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-4 text-center ${
                            current ? "text-blue-400" : "text-slate-500"
                          }`}
                        >
                          {current
  ? "●"
  : index <
    menuItems.findIndex((m) =>
      sectionPath
        .toLowerCase()
        .includes(
          m.name.replace(" ", "_")
        )
    )
  ? "✓"
  : "○"}
                        </span>

                        <span
                          className={
                            current ? "text-blue-400" : "text-slate-200"
                          }
                        >
                          {current ? `> ${item.name}_` : item.name}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopProgress;
