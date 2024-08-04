import avatar from "../../assets/adhim-niokagi.jpg";

function AboutMe() {
  return (
    <>
      <div id="about-me" className="about-me mt-36 lg:px-10">
        <section className="text-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-black">
            About me
          </h1>
          <h3 className="text-sm md:text-[17px] text-gray-400 mt-2 max-sm:mt-0">
            Introduction
          </h3>
        </section>
        <section className="lg:flex justify-between gap-24 mt-16 max-sm:mt-8">
          <div className="flex justify-center">
            <picture className="mx-auto">
              <img
                src={avatar.src}
                className="rounded-[50px] max-sm:w-[225px] sm:w-[250px] lg:w-[900px]"
                alt="adhim niokagi photo"
              />
            </picture>
          </div>
          {/*  */}
          <div className="flex-col max-sm:px-5 sm:px-10 md:px-0 max-sm:mt-7 lg:w-[1500px]">
            {/* boxes */}
            <div className="flex max-sm:gap-2 gap-4 max-sm:justify-center max-lg:justify-center max-lg:my-10">
              <div className="rounded-2xl text-center border-1 max-sm:px-3 max-sm:py-3 px-6 py-5">
                <h1 className="max-sm:text-xl text-3xl font-bold">1 +</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Years <br /> Experience
                </p>
              </div>
              <div className="rounded-2xl text-center border-1 max-sm:px-3 max-sm:py-3 px-6 py-5">
                <h1 className="max-sm:text-xl text-3xl font-bold"> 2</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Completed <br /> Projects
                </p>
              </div>
              <div className="rounded-2xl text-center border-1 max-sm:px-3 max-sm:py-3 px-6 py-5">
                <h1 className="max-sm:text-xl text-3xl font-bold">7</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Certifications <br /> courses
                </p>
              </div>
            </div>
            <p className="mt-10 text-center sm:text-base sm:text-center md:text-left max-sm:text-sm md:text-base text-gray-600 leading-7">
              As a full stack web developer, I am highly dedicated to supporting
              your company or project. I have extensive experience with several
              up-to-date technology frameworks such as ReactJs, Express.js, and
              Next.js. I am proficient in managing databases and implementing
              complex business logic.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
