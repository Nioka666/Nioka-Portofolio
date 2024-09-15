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
          className="fixed bottom-12 right-10 h-[55px] w-[55px] rounded-full bg-gray-200 text-black transition-all hover:bg-gray-300 max-md:bottom-20 max-md:right-5 max-sm:h-[38px] max-sm:w-[38px]"
          onClick={scrollToTop}
        >
          <i className="bx bxs-chevron-up text-xl font-bold max-sm:text-sm"></i>
        </button>
      )}
    </>
  );
}

export default ButtonUp;
