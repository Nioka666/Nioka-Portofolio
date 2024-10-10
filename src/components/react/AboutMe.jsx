import niokaPhoto from "../../assets/adhim_hp.webp";
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
  const paragraph = {
    text: "As a Front-End Web Developer and UI/UX Enthusiast, I am highly dedicated to learn more in this field. I have extensive experience with several up-to-date technology frameworks such as ReactJs, Express.js and more Javascript ecosystem for recent.",
  };

  return (
    <>
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
                <div
                  key={box.id}
                  className="boxx"
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
            <div className="about-mockup-window mockup-window">
              <div className="bg-white px-6 py-7 dark:bg-niodark3 dark:shadow-md max-sm:px-0 max-sm:py-7">
                <p className="about-mockup-paragraph">{paragraph.text}</p>
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
