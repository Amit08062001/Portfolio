import { FaArrowDown } from "react-icons/fa";

function ScrollDown() {
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <button
      onClick={scrollToAbout}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-[-7rem]
        w-14
        h-14
        rounded-full
        border
        border-slate-700
        bg-slate-900/70
        backdrop-blur-md
        flex
        items-center
        justify-center
        text-slate-300
        hover:text-white
        hover:border-blue-500
        hover:scale-110
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaArrowDown />
    </button>
  );
}

export default ScrollDown;