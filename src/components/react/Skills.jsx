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

function Skills() {
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
    {
      id: "postman_icon",
      src: postmanIcon.src,
    },
  ];

  const SkillCollapse = ({ title, dataVariable }) => {
    return (
      <details className="collapse cursor-pointer border-b-2 bg-white transition-all ease-in-out">
        <summary className="collapse-title py-5 text-[21px] font-semibold text-gray-500 max-sm:text-[17px]">
          <div className="my-2 flex items-center gap-2 max-md:justify-center max-sm:my-0 max-sm:justify-center lg:ms-14">
            <i className="bx bx-code-curly text-2xl"></i>
            <span>{title}</span>
          </div>
        </summary>
        <div className="collapse-content mx-10 my-7 grid grid-cols-5 justify-items-center gap-10 max-sm:mx-0 max-sm:my-3 max-sm:grid-cols-4 max-sm:gap-4">
          {dataVariable.map((iconData) => (
            <img
              key={iconData.id}
              src={iconData.src}
              alt={iconData.id}
              className="z-50 w-[90px] cursor-pointer select-none rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
            />
          ))}
        </div>
      </details>
    );
  };

  return (
    <>
      <section id="skills" className="skills mt-20 py-10 max-sm:mt-10 lg:px-10">
        {/* head/title */}
        <PartTitle title={"Technical Skills"} desc={"My Technical Skills"} />
        {/* content */}
        <section className="mx-auto grid w-[90%] gap-6 py-12 max-md:w-[90%] lg:mt-5">
          <SkillCollapse
            title={"Front-End Development"}
            dataVariable={frontEndData}
          />
          <SkillCollapse
            title={"Back-End Development"}
            dataVariable={backEndData}
          />
        </section>
      </section>
    </>
  );
}

export default Skills;
