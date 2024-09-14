import avatar from "../../assets/adhim_3hp.jpeg";

function AboutMe() {
  return (
    <>
      <div
        id="about"
        className="about-me mt-20 rounded-3xl py-14 max-md:mx-0 lg:px-10"
      >
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-2xl md:text-4xl">
            About Me
          </h1>
          <h3 className="mt-2 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
            Introduction
          </h3>
        </section>
        <section className="mt-16 justify-between gap-16 max-sm:mt-8 lg:flex">
          <div className="flex md:w-1/2 justify-center mx-auto">
            <picture className="">
              <img
                src={avatar.src}
                className="rounded-[30px] max-sm:w-[220px] sm:w-[250px] lg:w-[360px]"
                alt="adhim niokagi photo"
              />
            </picture>
          </div>
          {/*  */}
          <div className="flex-col max-sm:mt-7 max-sm:px-5 sm:px-10 md:px-0 lg:w-1/2">
            {/* boxes */}
            <div className="flex gap-4 max-lg:my-7 max-lg:justify-center max-sm:justify-center max-sm:gap-0">
              <div className="grid w-[150px] gap-1 rounded-[20px] bg-nioprimary px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:bg-gray-100 max-sm:px-[17px] max-sm:py-4 md:border-0">
                <i className="bx bx-time-five mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]"></i>
                <p className="mt-0 text-[14px] text-black max-sm:text-[11px]">
                  Experience
                </p>
                <p className="text-[8.9px] text-gray-500">1 + Year Working</p>
              </div>
              <div className="grid w-[150px] gap-1 rounded-[20px] bg-nioprimary px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:px-[17px] max-sm:py-4 md:border-0">
                <i className="bx bx-code-block mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]"></i>
                <p className="mt-0 text-[14px] text-black max-sm:text-[11px]">
                  Completed
                </p>
                <p className="text-[8.9px] text-gray-500">5 Projects</p>
              </div>
              <div className="grid w-[150px] gap-1 rounded-[20px] bg-nioprimary px-6 py-5 text-center text-black max-sm:w-[130px] max-sm:px-[17px] max-sm:py-4 md:border-0">
                <i className="bx bx-medal mb-2 text-[26px] max-sm:mb-1 max-sm:text-[20px]"></i>
                <p className="mt-0 text-[14px] text-black max-sm:text-[11px]">
                  Licenses
                </p>
                <p className="text-[8.9px] text-gray-500">15+ Certifications</p>
              </div>
            </div>
            <div className="mockup-window bg-gray-200 mt-5 border-b-2">
              <div className="bg-nioprimary px-6 max-sm:px-0 max-sm:py-7 py-7">
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
      </div>
    </>
  );
}

export default AboutMe;
