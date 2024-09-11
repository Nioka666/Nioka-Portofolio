import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import jsIcon from "../../assets/icons/js.png";
import reactIcon from "../../assets/icons/react.png";
import tailwindIcon from "../../assets/icons/tails.svg";

function Skills() {
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
        <section className="grid justify-center gap-8 px-10 py-10">
          {/*  */}
          <div className="collapse w-full bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title px-10 text-[20px] font-medium max-md:pt-7 max-md:text-base max-sm:px-10 max-sm:text-base lg:pt-8 flex items-center gap-3">
              <i className="bx bx-code-curly text-2xl"></i>
              Front-End Development
            </div>
            <div className="collapse-content my-2 flex flex-wrap justify-evenly gap-5">
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
                src={jsIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={reactIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="collapse w-full bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title px-10 text-[20px] font-medium max-md:pt-7 max-md:text-base max-sm:px-10 max-sm:text-base lg:pt-8 flex items-center gap-3">
              <i className="bx bx-code-curly text-2xl"></i>
              Front-End Development
            </div>
            <div className="collapse-content my-2 flex flex-wrap justify-evenly gap-5">
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
                src={jsIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
              <img
                src={reactIcon.src}
                alt="Javascript icon"
                className="w-[110px] cursor-pointer rounded-lg grayscale transition-all ease-in-out hover:grayscale-0 max-md:w-[50px]"
              />
            </div>
          </div>
          {/*  */}
        </section>
      </div>
    </>
  );
}

export default Skills;
