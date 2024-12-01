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

  const scrollDown = () => {
    window.scrollBy({
      top: 570,
      left: 0,
      behavior: "smooth",
    });
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
    <>
      <section id="about" className="about-component rounded-3xl max-sm:rounded-none sm:border max-sm:border-t max-sm:border-b dark:border-borderbtm bg-white dark:bg-niodark4 md:mx-4">
        {/* head/title */}
        {/* <PartTitle title={"about_me"} num={"001"} extraStyle={"text-[26px]"} hColor={"text-textdark2"} /> */}
        <section className="flex justify-center mt-[-85px] max-sm:hidden">
          <button
            role="button"
            className="mouse-scroll-btn text-gray-600 dark:text-textdark2"
            onClick={scrollDown}
          >
            <i className="bx bx-mouse max-sm:text-xl md:text-3xl"></i>
            {/* <i class='bx bxs-message-alt-dots'></i> */}
            {/* <i className="bx bx-down-arrow-alt ms-1 text-xl"></i> */}
          </button>
        </section>
        {/* divide */}
        <section className="text-left mt-7 px-6 flex items-center justify-between max-sm:mt-[-65px]">
          <div className="part-number max-sm:border-[1.3px] mb-0 max-sm:bg-nioprimary">
            <h1 className="text-base font-normal text-niodark dark:text-textdark md:text-xl">
              001
            </h1>
          </div>
          <h2 className="mt-[5px] text-[23px] text-niodark2 max-sm:rounded-lg dark:text-textdark max-sm:mt-0 md:text-[42px] max-sm:border-[1.3px] max-sm:bg-nioprimary dark:bg-niodark dark:border-borderbtm max-sm:px-5 max-sm:py-1">
            {/* about_me */}
            About me
          </h2>
        </section>
        {/* content */}
        <section className="about-content">
          <div className="flex items-center gap-7">
            <img
              src={niokaPhoto.src}
              className="rounded-xl max-sm:w-[75px] sm:w-[100px]"
              alt="Adhim Niokagi Photo"
            />
            <div className="cname">
              <h1 className="text-[25px] font-bold">nioka.o
              </h1>
              <div className="tag flex gap-2 mt-2">
                <span className="bg-gray-200 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">Front-End</span>
                <span className="bg-gray-200 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">UI/UX</span>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="about-desc-wrapper">
            <div className="about-mockup">
              <p className="text-justify text-base max-sm:text-[14.9px] leading-7 max-md:leading-6 text-niodark2  dark:text-textdark2">
                {paragraph.text}
              </p>
              <br />
              <p
                className="text-base text-niodark2 max-sm:text-[14.9px] text-justify leading-7 max-md:leading-6 dark:text-textdark2">
                In addition to my skills, I've a strong learning passion and
                stay updated with industry trends.
              </p>
              <button onClick={cvClick} role="button" className="mt-8 px-6 py-3 max-sm:py-[11.5px] max-sm:px-[23px] text-sm max-sm:text-[14px] bg-niodark text-nioprimary dark:bg-niodark2 border-none max-sm:rounded-[10px] dark:text-textdark3 flex items-center gap-2 font-normal rounded-xl active:scale-95 transition-all duration-0">
                View CV
                <i className="bx bx-file text-lg max-sm:text-base font-normal text-niosecondary dark:text-textdark3"></i>
              </button>
            </div>
          </div>
        </section>
        {/* end of content */}
      </section>
      <section className="bottom-desc mt-3 text-end sm:hidden">
        <h5 className="text-xs me-4 text-textdark2">
          END OF ABOUT_ME
        </h5>
      </section>
    </>
  );
}

export default AboutMe;
