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
        <button className="button-go-top" onClick={scrollToTop}>
          <i className="bx bxs-chevron-up text-xl font-bold max-sm:text-sm"></i>
        </button>
      )}
    </>
  );
}

export default ButtonUp;
