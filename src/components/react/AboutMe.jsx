import { useEffect } from "react";
import niokaPhoto from "../../assets/nioka_2.webp";
import PartTitle from "./PartTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CV from "../../assets/Adhim_Niokagi_IT_CVS.pdf";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const paragraph = {
    text: "I am a student of Electronic Engineering Polytechnic Institute of Surabaya majoring in informatics Engineering, as well as a Front-End Web Developer and UI/UX Enthusiast, I am highly dedicated to learn more in this field. I have enough experience with some of the latest technology frameworks such as ReactJs, Express.js, and some of the latest Javascript ecosystems.",
  };

  function cvClick() {
    window.open(CV, "_blank");
  }

  useEffect(() => {
    // gsap.from(".about-content img", {
    //   opacity: 0,
    //   x: -30,
    //   duration: 1,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".about-content",
    //     start: "top 80%",
    //     toggleActions: "play none none none",
    //   },
    // });

    // gsap.from(".boxx", {
    //   opacity: 0,
    //   y: 20,
    //   duration: 0.5,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".about-boxes",
    //     start: "top 90%",
    //     toggleActions: "play none none none",
    //   },
    // });

    // gsap.from(".about-mockup-window", {
    //   opacity: 0,
    //   duration: 0.8,
    //   y: 20,
    //   scrollTrigger: {
    //     trigger: ".about-mockup-window",
    //     start: "top 80%",
    //     toggleActions: "play none none none",
    //   },
    // });
  }, []);

  return (
    <section id="about" className="about-component">
      {/* head/title */}
      <PartTitle title={"about_me"} num={"001"} extraStyle={"text-xl"} hColor={"text-textdark2"} />

      {/* content */}
      <section className="about-content">
        <div className="flex items-center gap-7">
          <img
            src={niokaPhoto.src}
            className="rounded-xl max-sm:w-[75px] sm:w-[100px]"
            alt="Adhim Niokagi Photo"
          />
          <div className="cname">
            <h1 className="text-2xl font-bold">nioka.o
            </h1>
            <div className="tag flex gap-2 mt-2">
              <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">Front-End</span>
              <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">UI/UX</span>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="about-desc-wrapper">
          <div className="about-mockup">
            <p className="text-left text-base max-sm:text-[13px] leading-7 max-md:leading-6 dark:text-textdark3">
              {paragraph.text}
            </p>
            <button onClick={cvClick} role="button" className="mt-6 px-6 py-3 max-sm:py-[10px] max-sm:px-[22px] text-sm max-sm:text-[14px] bg-gray-100 text-black dark:bg-niodark2 border-none max-sm:rounded-lg dark:text-textdark3 flex items-center gap-2 font-medium rounded-xl active:scale-95 transition-all duration-0">
              View CV
              <i className="bx bx-file text-lg max-sm:text-base text-black dark:text-textdark3"></i>
            </button>
          </div>
        </div>
      </section>
      {/* end of content */}
    </section>
  );
}

export default AboutMe;
