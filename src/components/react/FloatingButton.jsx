import { useEffect, useState } from "react";

function FloatingButton() {
  const [isOver400, setIsOver400] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOver400(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
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
      <div className="dropdown dropdown-end dropdown-top fixed bottom-12 right-10 transition-none">
        <button className="button-info" aria-label="Info Button">
          <i className="bx bx-info-circle text-2xl max-sm:text-base"></i>
        </button>
        <div className="menu dropdown-content me-20 w-80 rounded-box bg-[#ffffffac] bg-base-100 p-5 px-7 shadow-sm backdrop-blur-md">
          <h1 className="text-lg font-semibold">About this page</h1>
          <p className="mt-2 text-textdark2">
            Lorem ipsum dolor sit amet consecteisicing elit. Explicabo placeat
            doloremque unde iure...
          </p>
        </div>
      </div>
      {isOver400 && (
        <button
          className="button-go-top"
          onClick={scrollToTop}
          aria-label="Button for going top of page"
        >
          <i className="bx bxs-chevron-up text-xl font-bold max-sm:text-sm"></i>
        </button>
      )}
    </>
  );
}

export default FloatingButton;
