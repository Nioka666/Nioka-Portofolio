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
          <button className="fixed bottom-12 right-10 rounded-2xl border bg-gray-800 px-3 py-2 text-white transition-all hover:bg-gray-600 max-md:bottom-20 max-md:right-5">
            <i className="bx bxs-chevron-up text-2xl font-bold max-sm:text-lg"></i>
          </button>
        </a>
      )}
    </>
  );
}

export default ButtonUp;
