import { useEffect, useState } from "react";

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
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
          className="fixed bottom-12 right-10 h-[55px] w-[55px] rounded-full bg-gray-800 text-white transition-all hover:bg-gray-600 max-md:bottom-20 max-md:right-5 max-sm:h-[40px] max-sm:w-[40px]"
          onClick={scrollToTop}
        >
          <i className="bx bxs-chevron-up text-xl font-bold max-sm:text-base"></i>
        </button>
      )}
    </>
  );
}

export default ButtonUp;