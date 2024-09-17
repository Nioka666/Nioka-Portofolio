import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

function BottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shadowNav, setShadowNav] = useState(false);
  const [themeNow, setThemeNow] = useState("light");
  const bottomDrawerRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const dataMenu = [
    {
      name: "About",
      icon: "bx bx-user text-3xl",
      url: "#about",
    },
    {
      name: "Skills",
      icon: "bx bx-universal-access text-3xl",
      url: "#skills",
    },
    {
      name: "Qualifies",
      icon: "bx bx-file text-3xl",
      url: "#qualification",
    },
    {
      name: "portfolio",
      icon: "bx bx-image text-3xl",
      url: "#portfolio",
    },
    {
      name: "Contact",
      icon: "uil uil-user-square text-3xl",
      url: "#contact",
    },
    {
      blankElement: <></>,
    },
  ];

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setThemeNow("light");
    } else {
      setThemeNow("dark");
    }
  }, [themeNow]);

  useEffect(() => {
    const handleScroll = () => {
      setShadowNav(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (drawerOpen == true) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }

    function handleClickOutside(event) {
      if (
        bottomDrawerRef.current &&
        !bottomDrawerRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setDrawerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen]);

  const SwipeHandler = useSwipeable({
    onSwipedDown: () => setDrawerOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...SwipeHandler} className="bottom-nav">
      <section
        className={`${shadowNav == true ? "b-nav-shadow" : "shadow-none"} flex h-[60px] w-full items-center justify-between px-7`}
      >
        <a href="/">
          <h1 className="text-base font-medium max-sm:text-sm md:text-lg lg:text-lg">
            Adhim Niokagi
          </h1>
        </a>
        <div className="icon-group flex items-center gap-5 sm:gap-7">
          <label className="swap swap-rotate mt-[-0.5px]">
            <input type="checkbox" onChange={toggleTheme} />
            <svg
              className={`dark:fill-textdark ${themeNow === "light" ? "swap-on" : "swap-off"} h-[21.5px] w-[21.5px] fill-gray-600`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            <svg
              className={`dark:fill-textdark ${themeNow === "dark" ? "swap-on" : "swap-off"} h-[22px] w-[22px] fill-gray-600`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>
          <button
            ref={toggleButtonRef}
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="mt-1"
          >
            <i className="bx bx-category dark:text-textdark cursor-pointer text-[22px] font-medium text-gray-600 transition-all hover:text-gray-400"></i>
          </button>
        </div>
      </section>

      {/* Bottom drawer */}
      <div
        ref={bottomDrawerRef}
        className={`fixed inset-x-0 bottom-0 transform cursor-grab transition-transform duration-300 ${drawerOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Drawer content */}
        <div className="drawer-b-nav-shadow dark:bg-niodark3 rounded-t-3xl bg-white">
          <div className="swipper dark:bg-niodark2 relative top-[10px] mx-auto mt-10 h-[5.5px] w-[70px] rounded-full bg-gray-200"></div>
          <div className="h-[250px] rounded-t-3xl px-4 pt-8">
            <div className="grid grid-cols-3 justify-items-center">
              {dataMenu.map((data, index) => (
                <React.Fragment key={index}>
                  <a
                    href={data.url}
                    className="text-gray-600 hover:text-gray-400"
                    key={data.name}
                  >
                    <div className="box dark:text-textdark2 grid w-[100px] basis-1/3 cursor-pointer p-3 text-center text-gray-600">
                      <i className={data.icon}></i>
                      <span className="mt-[5px] text-sm">{data.name}</span>
                    </div>
                  </a>
                  {data.blankElement}
                </React.Fragment>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="fixed bottom-4 right-7"
          >
            <i className="bx bx-x text-[22px] font-medium"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
