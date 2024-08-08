import { useEffect, useState } from "react";

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 540) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // check when still mount
    handleScroll();

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a href="#top">
          <button className="fixed bottom-12 right-10 rounded-2xl border bg-gray-300 px-3 py-2 text-gray-600 transition-all hover:bg-gray-400 max-sm:bottom-20 max-sm:right-5">
            <i className="bx bxs-chevron-up text-2xl font-bold max-sm:text-lg"></i>
          </button>
        </a>
      )}
    </>
  );
}

export default ButtonUp;
