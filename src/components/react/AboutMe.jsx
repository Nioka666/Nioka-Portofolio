import avatar from "../../assets/adhim_3hp.jpeg";

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
      <section
        id="about"
        className="about-me mt-20 rounded-3xl py-10 max-md:mx-0 max-sm:mt-16 lg:px-10"
      >
        {/* head/title */}
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-2xl md:text-4xl">
            About Me
          </h1>
          <h3 className="mt-2 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
            Introduction
          </h3>
        </section>

        {/* content */}
        <section className="mt-16 justify-between gap-16 max-sm:mt-8 lg:flex lg:items-center">
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
                  className="grid w-[150px] cursor-pointer gap-1 rounded-[20px] bg-nioprimary px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:px-[10px] max-sm:py-4 md:border-0"
                >
                  <i
                    className={`${box.icon} mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]`}
                  ></i>
                  <p className="mt-0 text-[14px] text-black max-sm:text-[11px]">
                    {box.title}
                  </p>
                  <p className="text-[8.9px] text-gray-500">{box.desc}</p>
                </div>
              ))}
            </div>
            <div className="mockup-window mt-5 border-b-2 bg-gray-200 max-sm:mt-0">
              <div className="bg-nioprimary px-6 py-7 max-sm:px-0 max-sm:py-7">
                <p className="text-center text-gray-500 max-sm:mt-[-5px] max-sm:px-6 max-sm:text-[11.5px] sm:text-center sm:text-base md:text-left md:text-[16px]">
                  As a Front-End Web Developer, I am highly dedicated to
                  supporting your company or project. I have extensive
                  experience with several up-to-date technology frameworks such
                  as ReactJs, Express.js, and Next.js. I am proficient in
                  managing databases and implementing complex business logicals.
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
