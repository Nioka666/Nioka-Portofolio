import { useEffect, useState } from "react";

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 540);
    };

    window.addEventListener("scroll", handleScroll);
    // check when still mount
    handleScroll();

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-12 right-10 rounded-full border bg-gray-800 px-3 py-2 text-white transition-all hover:bg-gray-600 max-md:bottom-20 max-md:right-5"
          onClick={scrollToTop}
        >
          <i className="bx bxs-chevron-up text-xl font-bold max-sm:text-base"></i>
        </button>
      )}
    </>
  );
}

export default ButtonUp;
