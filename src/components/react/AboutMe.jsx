import avatar from "../../assets/adhim_3.jpeg";

function AboutMe() {
  return (
    <>
      <div id="about"></div>
      <div className="about-me mt-36 lg:px-10">
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-2xl md:text-4xl">
            About Me
          </h1>
          <h3 className="mt-2 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
            Introduction
          </h3>
        </section>
        <section className="mt-16 justify-between gap-20 max-sm:mt-8 lg:flex">
          <div className="flex justify-center">
            <picture className="">
              <img
                src={avatar.src}
                className="rounded-[30px] max-sm:w-[210px] sm:w-[250px] lg:w-[1100px]"
                alt="adhim niokagi photo"
              />
            </picture>
          </div>
          {/*  */}
          <div className="flex-col max-sm:mt-7 max-sm:px-5 sm:px-10 md:px-0 lg:w-[1500px]">
            {/* boxes */}
            <div className="flex flex-wrap gap-4 max-lg:my-7 max-lg:justify-center max-sm:justify-center max-sm:gap-2">
              <div className="rounded-2xl border-1 px-6 py-5 text-center max-sm:px-3 max-sm:py-3">
                <h1 className="text-3xl font-bold max-sm:text-xl">1 +</h1>
                <p className="mt-2 text-sm text-gray-500 max-sm:text-xs">
                  Years <br /> Experience
                </p>
              </div>
              <div className="rounded-2xl border-1 px-6 py-5 text-center max-sm:px-3 max-sm:py-3">
                <h1 className="text-3xl font-bold max-sm:text-xl"> 4</h1>
                <p className="mt-2 text-sm text-gray-500 max-sm:text-xs">
                  Completed <br /> Projects
                </p>
              </div>
              <div className="rounded-2xl border-1 px-6 py-5 text-center max-sm:px-3 max-sm:py-3">
                <h1 className="text-3xl font-bold max-sm:text-xl">14</h1>
                <p className="mt-2 text-sm text-gray-500 max-sm:text-xs">
                  License <br /> Certifications
                </p>
              </div>
            </div>
            <p className="mt-7 text-pretty indent-[80px] text-gray-600 max-sm:px-0 max-sm:indent-14 max-sm:text-[13.5px] sm:text-center sm:text-base md:text-left md:text-lg">
              As a Front-End Web Developer, I am highly dedicated to supporting
              your company or project. I have extensive experience with several
              up-to-date technology frameworks such as ReactJs, Express.js, and
              Next.js.
            </p>
            <p className="mt-2 text-pretty indent-[80px] text-gray-600 max-sm:px-0 max-sm:indent-14 max-sm:text-[13.5px] sm:text-center sm:text-base md:text-left md:text-lg">
              I am proficient in managing databases and implementing complex
              business logicals.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
