import { useEffect } from "react";
import niokaPhoto from "../../assets/adhim_hp.webp";
import PartTitle from "./PartTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const boxData = [
    {
      id: "experience",
      icon: "bx bx-time-five",
      title: "Experience",
      desc: "1+ Year Working",
    },
    {
      id: "projects",
      icon: "bx bx-code-block",
      title: "Completed",
      desc: "5 Projects",
    },
    {
      id: "licenses",
      icon: "bx bx-medal",
      title: "Licenses",
      desc: "15+ Certificates",
    },
  ];

  const paragraph = {
    text: "I am a student of Electronic Engineering Polytechnic Institute of Surabaya majoring in informatics Engineering, as well as a Front-End Web Developer and UI/UX Enthusiast, I am highly dedicated to learn more in this field. I have enough experience with some of the latest technology frameworks such as ReactJs, Express.js, and some of the latest Javascript ecosystems.",
  };

  useEffect(() => {
    gsap.from(".about-content img", {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    });

    gsap.from(".boxx", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
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
      <PartTitle title={"About Me"} desc={"My Introduction"} />

      {/* content */}
      <section className="about-content">
        <div className="mx-auto flex justify-center md:w-1/2 max-sm:hidden">
          <img
            src={niokaPhoto.src}
            className="rounded-[30px] max-sm:w-[220px] sm:w-[250px] lg:w-[360px]"
            alt="Adhim Niokagi Photo"
          />
        </div>
        {/* content */}
        <div className="about-desc-wrapper">
          <div className="about-boxes">
            {/* box */}
            {boxData.map((box) => (
              <div key={box.id} className="boxx">
                <i
                  className={`${box.icon} mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px] text-niodark2 dark:text-textdark2`}
                ></i>
                <p className="mt-0 text-[14px] max-sm:text-[11px] text-niodark2 dark:text-textdark2">
                  {box.title}
                </p>
                <p className="text-[8.9px] text-gray-500">{box.desc}</p>
              </div>
            ))}
          </div>
          {/* mockup */}
          <div className="about-mockup-window mockup-window">
            <div className="bg-white px-6 py-7 dark:bg-niodark3 dark:shadow-md max-sm:px-0 max-sm:py-7">
              <p className="about-mockup-paragraph indent-7 text-justify">
                {paragraph.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end of content */}
    </section>
  );
}

export default AboutMe;
