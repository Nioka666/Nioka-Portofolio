import { useEffect, useLayoutEffect, useState } from "react";

function FloatingButton() {
  const [isBellow400, setIsBellow400] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    setIsBellow400(window.scrollY <= 400);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsBellow400(window.scrollY <= 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isBellow400 && (
        <div className="dropdown dropdown-end dropdown-top fixed bottom-12 right-10">
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
      )}
      {!isBellow400 && (
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
