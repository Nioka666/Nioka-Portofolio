import avatar from "../../assets/adhim_hp.webp";
import PartTitle from "./PartTitle";

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

  return (
    <>
      <section id="about" className="about-component">
        {/* head/title */}
        <PartTitle title={"About Me"} desc={"My Introduction"} />

        {/* content */}
        <section className="about-content">
          <div className="mx-auto flex justify-center md:w-1/2">
            <picture className="">
              <img
                src={avatar.src}
                className="rounded-[30px] max-sm:w-[220px] sm:w-[250px] lg:w-[360px]"
                alt="adhim niokagi photo"
              />
            </picture>
          </div>

          <div className="flex-col max-sm:mt-0 max-sm:px-5 sm:px-10 md:px-0 lg:w-1/2">
            <div className="flex gap-4 max-lg:my-7 max-lg:justify-center max-sm:my-6 max-sm:justify-center max-sm:gap-0">
              {/* box */}
              {boxData.map((box) => (
                <div
                  key={box.id}
                  className="dark:text-textdark grid w-[150px] cursor-pointer gap-1 rounded-[20px] px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:px-[10px] max-sm:py-4 md:border-0"
                >
                  <i
                    className={`${box.icon} mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]`}
                  ></i>
                  <p className="mt-0 text-[14px] max-sm:text-[11px]">
                    {box.title}
                  </p>
                  <p className="text-[8.9px] text-gray-500">{box.desc}</p>
                </div>
              ))}
            </div>
            {/* mockup */}
            <div className="mockup-window about-mockup-window">
              <div className="bg-white dark:bg-niodark3 px-6 py-7 max-sm:px-0 max-sm:py-7">
                <p className="about-mockup-paragraph">
                  As a Front-End Web Developer and UI/UX Enthusiast, I am highly
                  dedicated to learn more in this field. I have extensive
                  experience with several up-to-date technology frameworks such
                  as ReactJs, Express.js and more Javascript ecosystem for
                  recent.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end of content */}
      </section>
    </>
  );
}

export default AboutMe;
