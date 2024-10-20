import { useEffect } from "react";
import niokaPhoto from "../../assets/nioka_2.webp";
import PartTitle from "./PartTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  // const boxData = [
  //   {
  //     id: "experience",
  //     icon: "bx bx-time-five",
  //     title: "Experience",
  //     desc: "1+ Year Working",
  //   },
  //   {
  //     id: "projects",
  //     icon: "bx bx-code-block",
  //     title: "Completed",
  //     desc: "5 Projects",
  //   },
  //   {
  //     id: "licenses",
  //     icon: "bx bx-medal",
  //     title: "Licenses",
  //     desc: "15+ Certificates",
  //   },
  // ];

  const paragraph = {
    text: "I am a student of Electronic Engineering Polytechnic Institute of Surabaya majoring in informatics Engineering, as well as a Front-End Web Developer and UI/UX Enthusiast, I am highly dedicated to learn more in this field. I have enough experience with some of the latest technology frameworks such as ReactJs, Express.js, and some of the latest Javascript ecosystems.",
  };

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

    gsap.from(".boxx", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-boxes",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".about-mockup-window", {
      opacity: 0,
      duration: 0.8,
      y: 20,
      scrollTrigger: {
        trigger: ".about-mockup-window",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="about" className="about-component">
      {/* head/title */}
      <PartTitle title={"about_me"} desc={"Short Introduction"} />

      {/* content */}
      <section className="about-content">
        <div className="flex items-center gap-7">
          <img
            src={niokaPhoto.src}
            className="rounded-[12px] max-sm:w-[90px] sm:w-[200px]"
            alt="Adhim Niokagi Photo"
          />
          <div className="cname">
            <h1 className="text-3xl font-bold">nioka.o</h1>
            <div className="tag flex gap-2 mt-2">
              <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">Front-End</span>
              <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">UI/UX</span>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="about-desc-wrapper">
          <div className="about-mockup-window">
            <p className="text-left text-sm leading-6 dark:text-textdark3">
              {paragraph.text}
            </p>
          </div>
        </div>
      </section>
      {/* end of content */}
    </section>
  );
}

export default AboutMe;
