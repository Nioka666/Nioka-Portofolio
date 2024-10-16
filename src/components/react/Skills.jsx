import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
// frontend icons
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import jsIcon from "../../assets/icons/js.png";
import tailwindIcon from "../../assets/icons/Tailw.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
import reactIcon from "../../assets/icons/reactjs.png";
import viteIcon from "../../assets/icons/vite.png";
import figmaIcon from "../../assets/icons/Figma.png";
// backend icons
import nodeJsIcon from "../../assets/icons/nodejs.png";
import expressIcon from "../../assets/icons/Express.png";
import phpIcon from "../../assets/icons/php.png";
import laravelIcon from "../../assets/icons/Laravel.png";
import mysqlIcon from "../../assets/icons/MySQL.png";
import mongodbIcon from "../../assets/icons/mongodb.png";
import postmanIcon from "../../assets/icons/Postman.png";
import nestIcon from "../../assets/icons/Nest.js.png";
import PartTitle from "./PartTitle";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {
    gsap.from(".skills-collapse", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-collapse",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  }, [])

  const frontEndData = [
    {
      id: "html_icon",
      src: htmlIcon.src,
    },
    {
      id: "css_icon",
      src: cssIcon.src,
    },
    {
      id: "js_icon",
      src: jsIcon.src,
    },
    {
      id: "tailwind_icon",
      src: tailwindIcon.src,
    },
    {
      id: "bootstrap_icon",
      src: bootstrapIcon.src,
    },
    {
      id: "react_icon",
      src: reactIcon.src,
    },
    {
      id: "vite_icon",
      src: viteIcon.src,
    },
    // {
    //   id: "figma_icon",
    //   src: figmaIcon.src,
    // },
  ];

  const backEndData = [
    {
      id: "nodejs_icon",
      src: nodeJsIcon.src,
    },
    {
      id: "express_icon",
      src: expressIcon.src,
      class: "dark:brightness-0 dark:invert",
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
      src: mongodbIcon.src,
    },
    {
      id: "mysql_icon",
      src: mysqlIcon.src,
    },
  ];

  const otherToolsData = [
    {
      id: "figma_icon",
      src: figmaIcon.src,
    },
    {
      id: "postman_icon",
      src: postmanIcon.src,
    },
  ];

  const SkillCollapse = ({ title, dataVariable }) => {
    return (
      <details className="skills-collapse collapse">
        <summary className="collapse-title">
          <div className="my-[8px] flex items-center gap-2 max-md:ms-[10px] max-sm:my-[5px] lg:ms-14">
            <i className="bx bx-code-curly text-[22px] md:text-2xl"></i>
            <span className="md:ms-2 max-sm:ms-1">{title}</span>
          </div>
        </summary>
        <div className="skills-content collapse-content">
          {dataVariable.map((iconData) => (
            <img
              key={iconData.id}
              src={iconData.src}
              alt={iconData.id}
              className={`skills-icon ${iconData.class}`}
            />
          ))}
        </div>
      </details>
    );
  };

  return (
    <>
      <section id="skills" className="skills-component">
        <PartTitle title={"Technical Skills"} desc={"Technology and Stack"} />
        {/* content */}
        <section className="skills-content-container">
          <SkillCollapse
            title={"Front-End Development"}
            dataVariable={frontEndData}
          />
          <SkillCollapse
            title={"Back-End Development"}
            dataVariable={backEndData}
          />
          <SkillCollapse
            title={"Other Tech & Tools"}
            dataVariable={otherToolsData}
          />
        </section>
      </section>
    </>
  );
}

export default Skills;
