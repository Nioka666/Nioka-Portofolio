/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, f as renderComponent, g as renderSlot, b as createAstro } from '../chunks/astro/server_BroNZFhW.mjs';
import 'kleur/colors';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'clsx';
import Typewriter from 'typewriter-effect';
export { renderers } from '../renderers.mjs';

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: `nav ${scrollDirection === "down" ? "hide" : "show"}`, children: /* @__PURE__ */ jsxs("section", { className: "", children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-medium text-black md:text-base lg:text-base", children: "Adhim Niokagi" }) }),
    /* @__PURE__ */ jsxs("div", { className: "icon-group flex gap-4 sm:gap-7", children: [
      /* @__PURE__ */ jsx("div", { className: "tooltip tooltip-bottom", "data-tip": "Dark Mode", children: /* @__PURE__ */ jsxs("label", { className: "swap swap-rotate", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox" }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "swap-on h-[26px] w-[26px] fill-gray-600",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" })
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "swap-off h-[26px] w-[26px] fill-gray-600",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "dropdown dropdown-end tooltip tooltip-bottom",
          "data-tip": "Menu",
          children: [
            /* @__PURE__ */ jsx("button", { role: "button", type: "button", className: "", children: /* @__PURE__ */ jsx("i", { className: "bx bx-menu-alt-right cursor-pointer text-[26px] font-medium text-gray-600 transition-all hover:text-gray-400" }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "card dropdown-content card-compact z-[1] mt-10 w-[380px] bg-white p-2 text-black shadow-sm",
                tabIndex: "0",
                children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 p-4", children: [
                  /* @__PURE__ */ jsx("a", { href: "#about", children: /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "bx bx-user text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "About" })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { href: "#skills", children: /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "bx bx-universal-access text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Skills" })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { href: "#qualification", children: /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "bx bx-file text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Qualification" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "bx bx-image text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Portfolio" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "bx bxs-contact text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Contact" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] cursor-pointer p-3 text-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "text-2xl" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] })
  ] }) }) });
}

function BottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shadowNav, setShadowNav] = useState(false);
  const bottomDrawerRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const dataMenu = [
    {
      name: "About",
      icon: "bx bx-user text-3xl",
      url: "#about"
    },
    {
      name: "Skills",
      icon: "bx bx-universal-access text-3xl",
      url: "#skills"
    },
    {
      name: "Qualifies",
      icon: "bx bx-file text-3xl",
      url: "#qualification"
    },
    {
      name: "portfolio",
      icon: "bx bx-image text-3xl",
      url: "#portfolio"
    },
    {
      name: "Contact",
      icon: "uil uil-user-square text-3xl",
      url: "#contact"
    },
    {
      blankElement: /* @__PURE__ */ jsx(Fragment, {})
    }
  ];
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
      if (bottomDrawerRef.current && !bottomDrawerRef.current.contains(event.target) && !toggleButtonRef.current.contains(event.target)) {
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
    trackMouse: true
  });
  return /* @__PURE__ */ jsxs("div", { ...SwipeHandler, className: "bottom-nav", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: `${shadowNav == true ? "b-nav-shadow" : "shadow-none"} flex h-[60px] w-full items-center justify-between bg-nioprimary px-7`,
        children: [
          /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-medium text-black max-sm:text-sm md:text-lg lg:text-lg", children: "Adhim Niokagi" }) }),
          /* @__PURE__ */ jsxs("div", { className: "icon-group flex items-center gap-5 sm:gap-7", children: [
            /* @__PURE__ */ jsxs("label", { className: "swap swap-rotate", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "swap-on h-[22px] w-[22px] fill-gray-600",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" })
                }
              ),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "swap-off h-[22px] w-[22px] fill-gray-600",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                ref: toggleButtonRef,
                onClick: () => setDrawerOpen((prev) => !prev),
                className: "mt-1",
                children: /* @__PURE__ */ jsx("i", { className: "bx bx-category cursor-pointer text-[22px] font-medium text-gray-600 transition-all hover:text-gray-400" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: bottomDrawerRef,
        className: `fixed inset-x-0 bottom-0 transform cursor-grab transition-transform duration-300 ${drawerOpen ? "translate-y-0" : "translate-y-full"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "drawer-b-nav rounded-t-3xl bg-white", children: [
          /* @__PURE__ */ jsx("div", { className: "swipper relative top-2 mx-auto mt-10 h-[5.5px] w-[100px] rounded-full bg-gray-200" }),
          /* @__PURE__ */ jsx("div", { className: "h-[250px] justify-center gap-x-5 rounded-t-3xl p-4 pt-7", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: dataMenu.map((data, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: data.url,
                className: "text-gray-600 hover:text-gray-400",
                children: /* @__PURE__ */ jsxs("div", { className: "box grid w-[100px] basis-1/3 cursor-pointer p-3 text-center", children: [
                  /* @__PURE__ */ jsx("i", { className: data.icon }),
                  /* @__PURE__ */ jsx("span", { className: "mt-1 text-sm", children: data.name })
                ] })
              },
              data.name
            ),
            data.blankElement
          ] }, index)) }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setDrawerOpen(false),
              className: "fixed bottom-4 right-7",
              children: /* @__PURE__ */ jsx("i", { className: "bx bx-x text-xl" })
            }
          )
        ] })
      }
    )
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="max-sm:py-10 h-52 max-sm:px-10 lg:py-20 lg:px-20 rounded-2xl mt-36 bg-nioprimary"> <section class="text-center"> <h1 class="text-base sm:text-sm md:text-xl font-medium"> ${"<"}Adhim Niokagi ${"/> "} </h1> <h2 class="text-gray-400 text-[12px] sm:text-sm">portfolio website</h2> </section> </div> </footer>`;
}, "D:/Projects/Astro Project/Nioka-Portofolio/src/components/astro/Footer.astro", void 0);

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    "button",
    {
      className: "fixed bottom-12 right-10 h-[55px] w-[55px] rounded-full bg-gray-700 text-white transition-all hover:bg-gray-600 max-md:bottom-20 max-md:right-5 max-sm:h-[35px] max-sm:w-[35px]",
      onClick: scrollToTop,
      children: /* @__PURE__ */ jsx("i", { className: "bx bxs-chevron-up text-xl font-bold max-sm:text-base" })
    }
  ) });
}

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="light" class="bg-nioprimary"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Adhim Niokagi personal Web portfolio"><meta name="keywords" content="Adhim Niokagi, Niokagi, Nioka666, Adhim Niokagi portfolio, Niokagi portfolio, Nioka666 portfolio, Front-End Developer"><!-- <meta name="generator" content={Astro.generator} /> --><!-- <link rel="icon" type="image/svg+xml" href="./favicon.svg" /> --><!-- Icons --><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", Navbar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Navbar", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ButtonUp", ButtonUp, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/ButtonUp", "client:component-export": "default" })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "BottomNav", BottomNav, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/BottomNav", "client:component-export": "default" })} </body></html>`;
}, "D:/Projects/Astro Project/Nioka-Portofolio/src/layouts/MainLayout.astro", void 0);

const avatar$1 = new Proxy({"src":"/_astro/adhim_niokagi.itm8V4Bw.jpg","width":2270,"height":2270,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/adhim_niokagi.jpg";
							}
							
							return target[name];
						}
					});

const CV = "/_astro/Adhim_Niokagi_IT_CVS.ChhDTG-7.pdf";

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);
  const scrollDown = () => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: "smooth"
    });
  };
  const mediaSocial = [
    {
      name: "Linkedin",
      icon: "bx bxl-linkedin",
      url: "https://linkedin.com/in/adhim-niokagi"
    },
    {
      name: "Instagram",
      icon: "bx bxl-instagram",
      url: "https://instagram.com/nioka.o"
    },
    {
      name: "Github",
      icon: "bx bxl-github",
      url: "https://github.com/nioka666"
    },
    {
      name: "Whatsapp",
      icon: "bx bxl-whatsapp",
      url: "https://wa.me/6287755588990"
    }
  ];
  const XLine = ({ n }) => {
    const elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(/* @__PURE__ */ jsx("i", { className: "uil uil-minus ms-[-15px]" }, i));
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "me-4 text-gray-500", children: [
      /* @__PURE__ */ jsx("i", { className: "uil uil-minus" }),
      elements
    ] }) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "hero", children: [
      /* @__PURE__ */ jsx("section", { className: "social-media", children: mediaSocial.map((data) => /* @__PURE__ */ jsx(
        "a",
        {
          href: data.url,
          className: "tooltip tooltip-left",
          "data-tip": data.name,
          children: /* @__PURE__ */ jsx(
            "i",
            {
              className: `${data.icon} cursor-pointer text-[21px] text-black`
            },
            data.name
          )
        },
        data.name
      )) }),
      /* @__PURE__ */ jsxs("section", { className: "headline", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold leading-tight md:text-[45px] lg:text-[56px] lg:text-black", children: "Adhim Niokagi" }),
        /* @__PURE__ */ jsxs("div", { className: "flex text-black md:mt-3 md:text-base lg:mt-2 lg:text-xl", children: [
          /* @__PURE__ */ jsx(XLine, { n: 10 }),
          /* @__PURE__ */ jsx(
            Typewriter,
            {
              onInit: (typewriter) => {
                typewriter.typeString("Front-End Developer").start();
              },
              options: {
                autoStart: true
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray mt-5 h-[80px] w-[85%] font-normal md:text-[14px] lg:text-[16.5px]", children: "Im a Junior Front-End Developer, work based in Mojokerto, East Java. Passionate and dedicated to my work." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex gap-5", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              role: "button",
              className: "rounded-[18px] bg-gray-800 py-[17px] font-medium text-white transition-all hover:shadow-md md:px-[25px] md:text-sm lg:px-9 lg:text-base",
              children: [
                "Say Hello",
                " ",
                /* @__PURE__ */ jsx("i", { className: "uil uil-location-arrow md:ms-1 lg:ms-2" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("a", { href: CV, target: "_blank", children: /* @__PURE__ */ jsxs(
            "button",
            {
              role: "button",
              className: "flex items-center rounded-2xl bg-transparent py-[15px] font-medium text-black max-sm:text-sm md:px-4 md:text-sm lg:px-7 lg:text-base",
              children: [
                "View CV",
                /* @__PURE__ */ jsx("i", { className: "bx bx-file ms-3 text-2xl text-gray-600" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "picture",
        {
          className: `blob me-[10px] overflow-hidden ${loaded ? "animate-fade-in" : "opacity-0"} md:mt-[-30px] md:w-[260px] lg:mt-[-70px] lg:h-[250px] lg:w-[355px] nionotebook:mt-[-5px] nionotebook:h-[315px] nionotebook:w-[325px]`,
          children: /* @__PURE__ */ jsx("img", { src: avatar$1.src, alt: "Adhim Niokagi" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "sm-hero", children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-16 flex items-center px-6 max-sm:gap-9 max-miniphone:gap-5 sm:gap-10", children: [
        /* @__PURE__ */ jsx("section", { className: "social-media", children: mediaSocial.map((data) => /* @__PURE__ */ jsx(
          "a",
          {
            href: data.url,
            className: "tooltip tooltip-right",
            "data-tip": data.name,
            children: /* @__PURE__ */ jsx(
              "i",
              {
                className: `${data.icon} cursor-pointer text-xl max-miniphone:text-base`
              },
              data.name
            )
          },
          data.name
        )) }),
        /* @__PURE__ */ jsx(
          "picture",
          {
            className: `blob overflow-hidden max-md:ms-[2px] max-miniphone:ms-[-3px] ${loaded ? "animate-fade-in" : "opacity-0"} max-sm:h-full max-sm:w-[227px] max-miniphone:w-[223px] sm:h-full sm:w-[280px] md:h-full md:w-[10px]`,
            children: /* @__PURE__ */ jsx("img", { src: avatar$1.src, alt: "Adhim Niokagi" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mx-6 mt-7 flex flex-col", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-1 font-semibold leading-[53px] max-sm:text-[40px] max-miniphone:text-[28px] sm:text-[47px]", children: "Adhim Niokagi" }),
        /* @__PURE__ */ jsxs("div", { className: "flex max-sm:text-[17px] max-miniphone:text-[14px] sm:text-xl", children: [
          /* @__PURE__ */ jsx(XLine, { n: 20 }),
          /* @__PURE__ */ jsx(
            Typewriter,
            {
              onInit: (typewriter) => {
                typewriter.typeString("Front-End Developer").start();
              },
              options: {
                autoStart: true
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-niogray mt-[13.5px] h-[110px] w-full leading-7 max-sm:text-[16.5px] max-miniphone:h-[70px] max-miniphone:text-[13px] max-miniphone:leading-5 sm:text-[18px]", children: "Hello.. Im a Junior Front-End Web Developer. Work based in Mojokerto, East Java" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-[33px] max-sm:mt-8 max-miniphone:gap-2 sm:mt-0 sm:gap-[40px]", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              role: "button",
              className: "rounded-[18px] bg-gray-800 px-8 py-[18px] text-[14px] font-medium text-white transition-all hover:bg-gray-700 max-miniphone:px-6 max-miniphone:py-[15.7px] max-miniphone:text-[11px] sm:text-[15px]",
              children: [
                "Say Hello ",
                /* @__PURE__ */ jsx("i", { className: "uil uil-location-arrow ms-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("a", { href: CV, target: "_blank", children: /* @__PURE__ */ jsxs(
            "button",
            {
              role: "button",
              className: "flex items-center gap-[11px] rounded-2xl bg-transparent px-0 text-[14px] font-medium text-black max-miniphone:text-[10px] sm:text-[15px]",
              children: [
                "View CV",
                /* @__PURE__ */ jsx("i", { className: "bx bx-file text-2xl text-gray-600" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "ms-[85px] mt-20 max-lg:hidden lg:ms-[130px]", children: /* @__PURE__ */ jsxs(
      "button",
      {
        role: "button",
        className: "flex items-center gap-1 rounded-2xl bg-transparent text-base font-normal text-black transition-all hover:translate-y-1",
        onClick: scrollDown,
        children: [
          /* @__PURE__ */ jsx("i", { className: "bx bx-mouse text-3xl text-gray-600" }),
          "Scroll Down",
          /* @__PURE__ */ jsx("i", { className: "bx bx-down-arrow-alt ms-1 text-xl text-gray-600" })
        ]
      }
    ) })
  ] });
}

const avatar = new Proxy({"src":"/_astro/adhim_3hp.DNVQ0fyl.jpeg","width":2822,"height":2822,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/adhim_3hp.jpeg";
							}
							
							return target[name];
						}
					});

function PartTitle({ title, desc }) {
  return /* @__PURE__ */ jsxs("section", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-black sm:text-2xl md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("h3", { className: "mt-[13.4px] text-sm text-gray-400 max-sm:mt-0 md:text-[17px]", children: desc })
  ] });
}

function AboutMe() {
  const boxData = [
    {
      id: "experience",
      icon: "bx bx-time-five",
      title: "Experience",
      desc: "1+ Year Working"
    },
    {
      id: "projects",
      icon: "bx bx-code-block",
      title: "Completed",
      desc: "5 Projects"
    },
    {
      id: "licenses",
      icon: "bx bx-medal",
      title: "Licenses",
      desc: "15+ Certificates"
    }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "about-me mt-20 rounded-3xl py-10 max-md:mx-0 max-sm:mt-16 lg:px-10",
      children: [
        /* @__PURE__ */ jsx(PartTitle, { title: "About Me", desc: "My Introduction" }),
        /* @__PURE__ */ jsxs("section", { className: "mt-16 justify-between gap-16 max-sm:mt-8 lg:flex lg:items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto flex justify-center md:w-1/2", children: /* @__PURE__ */ jsx("picture", { className: "", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: avatar.src,
              className: "rounded-[30px] max-sm:w-[220px] sm:w-[250px] lg:w-[360px]",
              alt: "adhim niokagi photo"
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-col max-sm:mt-0 max-sm:px-5 sm:px-10 md:px-0 lg:w-1/2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-4 max-lg:my-7 max-lg:justify-center max-sm:my-6 max-sm:justify-center max-sm:gap-0", children: boxData.map((box) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "grid w-[150px] cursor-pointer gap-1 rounded-[20px] bg-nioprimary px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:px-[10px] max-sm:py-4 md:border-0",
                children: [
                  /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: `${box.icon} mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]`
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "mt-0 text-[14px] text-black max-sm:text-[11px]", children: box.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-[8.9px] text-gray-500", children: box.desc })
                ]
              },
              box.id
            )) }),
            /* @__PURE__ */ jsx("div", { className: "mockup-window mt-5 border-b-2 bg-gray-200 max-sm:mt-0", children: /* @__PURE__ */ jsx("div", { className: "bg-nioprimary px-6 py-7 max-sm:px-0 max-sm:py-7", children: /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 max-sm:mt-[-5px] max-sm:px-6 max-sm:text-[11.5px] sm:text-center sm:text-base md:text-left md:text-[16px]", children: "As a Front-End Web Developer, I am highly dedicated to supporting your company or project. I have extensive experience with several up-to-date technology frameworks such as ReactJs, Express.js, and Next.js. I am proficient in managing databases and implementing complex business logicals." }) }) })
          ] })
        ] })
      ]
    }
  ) });
}

const htmlIcon = new Proxy({"src":"/_astro/html.CKyDEyeN.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/html.png";
							}
							
							return target[name];
						}
					});

const cssIcon = new Proxy({"src":"/_astro/css.DfFIrX7C.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/css.png";
							}
							
							return target[name];
						}
					});

const jsIcon = new Proxy({"src":"/_astro/js.B8qeKn1m.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/js.png";
							}
							
							return target[name];
						}
					});

const tailwindIcon = new Proxy({"src":"/_astro/Tailw.Cc0deQtW.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Tailw.png";
							}
							
							return target[name];
						}
					});

const bootstrapIcon = new Proxy({"src":"/_astro/bootstrap.CReEuvD6.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/bootstrap.png";
							}
							
							return target[name];
						}
					});

const reactIcon = new Proxy({"src":"/_astro/reactjs.rD3V6UCs.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/reactjs.png";
							}
							
							return target[name];
						}
					});

const viteIcon = new Proxy({"src":"/_astro/vite.Di796QcD.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/vite.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/Figma.wI4upNcG.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Figma.png";
							}
							
							return target[name];
						}
					});

const nodeJsIcon = new Proxy({"src":"/_astro/nodejs.CqOBj1-i.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/nodejs.png";
							}
							
							return target[name];
						}
					});

const expressIcon = new Proxy({"src":"/_astro/Express.CeSowpY4.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Express.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/php.DfLeXNm7.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/php.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/Laravel.ClnSHGaH.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Laravel.png";
							}
							
							return target[name];
						}
					});

const mysqlIcon = new Proxy({"src":"/_astro/MySQL.CKGYqRW9.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/MySQL.png";
							}
							
							return target[name];
						}
					});

const mongodbIcon = new Proxy({"src":"/_astro/mongodb.CN3iCCaF.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/mongodb.png";
							}
							
							return target[name];
						}
					});

const postmanIcon = new Proxy({"src":"/_astro/Postman.u-bg5XJ9.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Postman.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/Nest.js.ClGh1ENG.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Astro Project/Nioka-Portofolio/src/assets/icons/Nest.js.png";
							}
							
							return target[name];
						}
					});

function Skills() {
  const frontEndData = [
    {
      id: "html_icon",
      src: htmlIcon.src
    },
    {
      id: "css_icon",
      src: cssIcon.src
    },
    {
      id: "js_icon",
      src: jsIcon.src
    },
    {
      id: "tailwind_icon",
      src: tailwindIcon.src
    },
    {
      id: "bootstrap_icon",
      src: bootstrapIcon.src
    },
    {
      id: "react_icon",
      src: reactIcon.src
    },
    {
      id: "vite_icon",
      src: viteIcon.src
    }
    // {
    //   id: "figma_icon",
    //   src: figmaIcon.src,
    // },
  ];
  const backEndData = [
    {
      id: "nodejs_icon",
      src: nodeJsIcon.src
    },
    {
      id: "express_icon",
      src: expressIcon.src
    },
    // {
    //   id: "php_icon",
    //   src: phpIcon.src,
    // },
    // {
    //   id: "laravel_icon",
    //   src: laravelIcon.src,
    // },
    {
      id: "mongo_icon",
      src: mongodbIcon.src
    },
    {
      id: "mysql_icon",
      src: mysqlIcon.src
    },
    {
      id: "postman_icon",
      src: postmanIcon.src
    }
  ];
  const SkillCollapse = ({ title, dataVariable }) => {
    return /* @__PURE__ */ jsxs("details", { className: "collapse cursor-pointer border-b-2 bg-white transition-all ease-in-out", children: [
      /* @__PURE__ */ jsx("summary", { className: "collapse-title py-5 text-[21px] font-semibold text-gray-500 max-sm:text-[17px]", children: /* @__PURE__ */ jsxs("div", { className: "my-2 flex items-center gap-2 max-md:justify-center max-sm:my-0 max-sm:justify-center lg:ms-14", children: [
        /* @__PURE__ */ jsx("i", { className: "bx bx-code-curly text-2xl" }),
        /* @__PURE__ */ jsx("span", { children: title })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "collapse-content mx-10 my-7 grid grid-cols-5 justify-items-center gap-10 max-sm:mx-0 max-sm:my-3 max-sm:grid-cols-4 max-sm:gap-4", children: dataVariable.map((iconData) => /* @__PURE__ */ jsx(
        "img",
        {
          src: iconData.src,
          alt: iconData.id,
          className: "w-[90px] cursor-pointer select-none rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
        },
        iconData.id
      )) })
    ] });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { id: "skills", className: "skills mt-20 py-10 max-sm:mt-10 lg:px-10", children: [
    /* @__PURE__ */ jsx(PartTitle, { title: "Technical Skills", desc: "My Technical Skills" }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto grid w-[90%] gap-6 py-12 max-md:w-[90%] lg:mt-5", children: [
      /* @__PURE__ */ jsx(
        SkillCollapse,
        {
          title: "Front-End Development",
          dataVariable: frontEndData
        }
      ),
      /* @__PURE__ */ jsx(
        SkillCollapse,
        {
          title: "Back-End Development",
          dataVariable: backEndData
        }
      )
    ] })
  ] }) });
}

function Educations() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "max-md:mt-10 max-md:px-8 max-sm:mt-8 lg:mt-10", children: /* @__PURE__ */ jsxs("ul", { className: "timeline timeline-vertical timeline-snap-icon max-md:timeline-compact", children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className: "h-5 w-5",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-end md:timeline-start max-md:ms-3 md:mb-10 md:me-5 md:text-end", children: [
        /* @__PURE__ */ jsx("time", { className: "font-mono italic", children: "2024 - Present" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold max-sm:text-base", children: "Politeknik Elektronika Negeri Surabaya" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm", children: [
          "Associate's degree, Distance education ",
          /* @__PURE__ */ jsx("br", {}),
          "Informatics Engineering ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("br", {})
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {})
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className: "h-5 w-5",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-end max-md:ms-3 md:ms-5 lg:mb-10", children: [
        /* @__PURE__ */ jsx("time", { className: "font-mono italic", children: "2021 - 2024" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold max-sm:text-base", children: "SMK Negeri 2 Mojokerto" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm", children: [
          "Software Engineering ",
          /* @__PURE__ */ jsx("br", {})
        ] }),
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsx("hr", {})
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className: "h-5 w-5",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-end mb-10 md:timeline-start max-md:ms-3 md:me-5 md:text-end", children: [
        /* @__PURE__ */ jsx("time", { className: "font-mono italic", children: "2019 - 2021" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold max-sm:text-base", children: "SMP Negeri 1 Jetis" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm", children: "General Student" })
      ] })
    ] })
  ] }) }) });
}

function Experiences() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "max-md:mt-10 max-md:px-8 max-sm:mt-8 lg:mt-10", children: /* @__PURE__ */ jsxs("ul", { className: "timeline timeline-vertical timeline-snap-icon max-md:timeline-compact", children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className: "h-5 w-5",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-end md:timeline-start max-md:ms-3 md:mb-10 md:me-5 md:text-end", children: [
        /* @__PURE__ */ jsx("time", { className: "font-mono italic", children: "2023 - Present" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold max-sm:text-base", children: "Independent Freelancer" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm", children: [
          "Front-End Web Developer ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("br", {})
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {})
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className: "h-5 w-5",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "timeline-end max-md:ms-3 md:ms-5 lg:mb-10", children: [
        /* @__PURE__ */ jsx("time", { className: "font-mono italic", children: "2022 - 2023" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-lg font-bold max-sm:text-base", children: "ATR/BPN - Kantor Pertanahan Kota Mojokerto" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm", children: [
          "Student Internship ",
          /* @__PURE__ */ jsx("br", {})
        ] }),
        /* @__PURE__ */ jsx("br", {})
      ] })
    ] })
  ] }) }) });
}

function Qualification() {
  const [activeMenu, setActiveMenu] = useState(1);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { id: "qualification", className: "mt-10 h-[700px] py-10 max-sm:mt-1", children: [
    /* @__PURE__ */ jsx(
      PartTitle,
      {
        title: "Qualifications",
        desc: "My Education & Experience Journey"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "mt-16 flex justify-center gap-10 font-medium max-sm:mt-14", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          role: "button",
          title: "button",
          className: `flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 1 ? "text-black" : "text-gray-400"}`,
          onClick: () => setActiveMenu(1),
          children: [
            /* @__PURE__ */ jsx("i", { className: "bx bxs-graduation text-[27px]" }),
            " Educations"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          role: "button",
          title: "button",
          className: `flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 2 ? "text-black" : "text-gray-400"}`,
          onClick: () => setActiveMenu(2),
          children: [
            /* @__PURE__ */ jsx("i", { className: "bx bxs-briefcase text-[23px]" }),
            "Experiences"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-sm:mx-3 sm:mx-2", children: activeMenu === 1 ? /* @__PURE__ */ jsx(Educations, {}) : /* @__PURE__ */ jsx(Experiences, {}) })
  ] }) });
}

function ButtonChat() {
  const btnAction = () => {
    console.log("clicked!");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "button",
    {
      className: "fixed bottom-12 right-10 h-[55px] w-[55px] rounded-full bg-gray-700 text-white transition-all hover:bg-gray-600 max-lg:hidden max-md:bottom-20 max-md:right-5",
      onClick: btnAction,
      children: /* @__PURE__ */ jsx("i", { className: "bx bxs-message-square-detail text-xl max-sm:text-base" })
    }
  ) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Adhim Niokagi Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "AboutMe", AboutMe, {})} ${renderComponent($$result2, "Skills", Skills, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Skills", "client:component-export": "default" })} ${renderComponent($$result2, "Qualification", Qualification, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Qualification", "client:component-export": "default" })} ${renderComponent($$result2, "ButtonChat", ButtonChat, {})} ${renderComponent($$result2, "ButtonUp", ButtonUp, {})} </main> ` })}`;
}, "D:/Projects/Astro Project/Nioka-Portofolio/src/pages/index.astro", void 0);

const $$file = "D:/Projects/Astro Project/Nioka-Portofolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
