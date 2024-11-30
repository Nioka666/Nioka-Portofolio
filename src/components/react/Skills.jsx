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
      extra: "dark:brightness-0 dark:invert",
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
      <div className="collapse collapse-arrow bg-white border-b-2 dark:border-borderbtm dark:border-none dark:bg-niodark3 max-sm:px-3 max-sm:py-2 py-3 px-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl max-sm:text-base font-medium">{title}</div>
        <div className="collapse-content grid grid-cols-7 max-sm:grid-cols-4">
          {dataVariable.map((iconData) => (
            <img
              key={iconData.id}
              src={iconData.src}
              alt={iconData.id}
              className={`skills-icon mt-3 ${iconData.extra}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="skills" className="skills-component">
        <PartTitle title={"technical_skills"} num={"002"} />
        {/* content */}
        <section className="skills-content-container">
          <SkillCollapse
            title={"Front-End Development"}
            dataVariable={frontEndData}
          />
          {/* <div className="collapse collapse-arrow bg-white border-b-2 dark:border-borderbtm dark:border-none dark:bg-niodark3 max-sm:px-3 max-sm:py-2 py-3 px-4">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl max-sm:text-base font-medium">Front-End Development</div>
            <div className="collapse-content grid grid-cols-7 max-sm:grid-cols-4">
              {frontEndData.map((iconData) => (
                <img
                  key={iconData.id}
                  src={iconData.src}
                  alt={iconData.id}
                  className={`skills-icon mt-3 ${iconData.extra}`}
                />
              ))}
            </div>
          </div> */}
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
