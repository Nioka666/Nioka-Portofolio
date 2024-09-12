// frontend icons
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import jsIcon from "../../assets/icons/js.png";
import reactIcon from "../../assets/icons/reactjs.png";
import tailwindIcon from "../../assets/icons/tails.svg";
import viteIcon from "../../assets/icons/vite.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
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
      src: {htmlIcon},
    },
  ];

  return (
    <>
      <div id="skills" className="skills mt-16 py-10 lg:px-10">
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-2xl md:text-4xl">
            Skills
          </h1>
          <h3 className="mt-2 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
            My Competence
          </h3>
        </section>
        <section className="grid gap-7 py-10">
          {/* Frontend Development */}
          <details className="collapse w-full bg-base-200 transition-all ease-in-out">
            <summary className="collapse-title py-5 text-[21px] font-semibold text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <i className="bx bx-code-curly text-2xl"></i>
                <span>Front-End Development</span>
              </div>
            </summary>
            <div className="collapse-content my-7 grid grid-cols-5 justify-items-center gap-5">
              <img
                src={htmlIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={cssIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={tailwindIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={bootstrapIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={jsIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={reactIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={viteIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={figmaIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
            </div>
          </details>

          {/* Backend Development */}
          <details className="collapse w-full bg-base-200 transition-all ease-in-out">
            <summary className="collapse-title py-5 text-[21px] font-semibold text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <i className="bx bx-code-curly text-2xl"></i>
                <span>Back-End Development</span>
              </div>
            </summary>
            <div className="collapse-content my-7 grid grid-cols-5 justify-items-center gap-5">
              <img
                src={nodeJsIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={expressIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={phpIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={laravelIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={mongodbIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={mysqlIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={postmanIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
            </div>
          </details>
        </section>
      </div>
    </>
  );
}

export default Skills;
