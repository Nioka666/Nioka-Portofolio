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
    {
      id: "figma_icon",
      src: figmaIcon.src,
    },
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
    {
      id: "php_icon",
      src: phpIcon.src,
    },
    {
      id: "laravel_icon",
      src: laravelIcon.src,
    },
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
      <details className="collapse bg-gray-200 transition-all ease-in-out">
        <summary className="collapse-title py-5 text-[21px] font-semibold text-gray-500 max-sm:text-[17px]">
          <div className="my-2 max-sm:my-0 flex items-center gap-2 max-sm:justify-center max-md:justify-center lg:ms-14">
            <i className="bx bx-code-curly text-2xl"></i>
            <span>{title}</span>
          </div>
        </summary>
        <div className="collapse-content mx-10 my-7 grid grid-cols-5 max-sm:grid-cols-4 justify-items-center gap-10 max-sm:mx-0 max-sm:my-3 max-sm:gap-4">
          {dataVariable.map((iconData) => (
            <img
              key={iconData.id}
              src={iconData.src}
              alt={iconData.id}
              className="w-[100px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
            />
          ))}
        </div>
      </details>
    );
  };

  return (
    <>
      <div id="skills" className="skills mt-14 py-10 lg:px-10">
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-2xl md:text-4xl">
            Technical Skills
          </h1>
          <h3 className="mt-2 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
            My Competence
          </h3>
        </section>
        <section className="mx-auto grid w-[90%] gap-7 py-10 max-md:w-[90%]">
          <SkillCollapse title={"Front-End Development"} dataVariable={frontEndData} />
          <SkillCollapse title={"Back-End Development"} dataVariable={backEndData} />
        </section>
      </div>
    </>
  );
}

export default Skills;
