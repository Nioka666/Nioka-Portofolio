import React, { useEffect, useRef } from "react";
import niokaPhoto from "../../assets/adhim_hp.webp";
import PartTitle from "./PartTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const aboutRef = useRef(null);  // Ref for the about section
  const imageRef = useRef(null);  // Ref for the image
  const boxesRef = useRef([]);  // Ref for the boxes
  const mockupRef = useRef(null);  // Ref for the mockup window

  useEffect(() => {
    // Sticky ScrollTrigger setup
    gsap.to(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top top",  // Start when the top of the about section hits the top of the viewport
        end: "+=800",  // Increase the distance to make the pin last longer
        pin: true,  // This will keep the about section 'pinned' (sticky)
        pinSpacing: true,  // Keep spacing to create room for scrolling
        scrub: true,  // Smooth scrubbing effect
        markers: false,  // Optional: Enable if you want to see markers for debugging
      },
    });

    // Image animation
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 100%",  // Start when image is 80% into the viewport
        end: "bottom top",  // End when bottom of about section reaches top of viewport
        scrub: true,
      },
      opacity: 0,  // Start with opacity 0
      scale: 0.8,  // Start slightly scaled down
      x: -70,
      duration: 0.8,  // Animation duration
    });

    // Boxes animation (fade-in one by one)
    boxesRef.current.forEach((box, index) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",  // Start when boxes are almost in viewport
          end: "bottom top",  // End as they leave the viewport
          scrub: true,
        },
        opacity: 0,  // Fade-in from opacity 0
        scale: 0.7,
        y: -50,  // Start from below
        duration: 0.4 + index * 0.2,  // Delay each box slightly
      });
    });

    // Mockup window animation
    gsap.from(mockupRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 100%",  // Start when mockup is 70% into the viewport
        end: "bottom top",
        scrub: true,
      },
      x: 100,  // Slide in from left
      opacity: 0,  // Fade-in
      duration: 0.8,
    });
  }, []);

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
    text: "I am a student of electronic engineering polytechnic institute of Surabaya majoring in informatics engineering, as well as a Front-End Web Developer and UI/UX Enthusiast, I am highly dedicated to learn more in this field. I have enough experience with some of the latest technology frameworks such as ReactJs, Express.js, and some of the latest Javascript ecosystems.",
  };

  return (
    <section id="about" className="about-component" ref={aboutRef}>
      {/* head/title */}
      <PartTitle title={"About Me"} desc={"My Introduction"} />

      {/* content */}
      <section className="about-content">
        <div
          className="mx-auto flex justify-center md:w-1/2 max-sm:hidden"
          ref={imageRef}
        >
          <img
            src={niokaPhoto.src}
            className="rounded-[30px] max-sm:w-[220px] sm:w-[250px] lg:w-[360px]"
            alt="Adhim Niokagi Photo"
          />
        </div>

        {/* content */}
        <div className="about-desc-wrapper">
          <div className="about-boxes">
            {boxData.map((box, index) => (
              <div
                key={box.id}
                className="boxx"
                ref={(el) => (boxesRef.current[index] = el)}  // Assign ref to each box
              >
                <i
                  className={`${box.icon} mb-2 text-[22px] max-sm:mb-1 max-sm:text-[20px] text-niodark2 dark:text-textdark2`}
                ></i>
                <p className="mt-0 text-[13px] max-sm:text-[11px] text-niodark2 dark:text-textdark2">
                  {box.title}
                </p>
                <p className="text-[8.9px] text-gray-500">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* mockup */}
          <div
            className="about-mockup-window mockup-window"
            ref={mockupRef}
          >
            <div className="bg-white px-6 py-7 dark:bg-niodark3 dark:shadow-md max-sm:px-0 max-sm:py-7">
              <p className="about-mockup-paragraph indent-7 text-justify">
                {paragraph.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMe;
