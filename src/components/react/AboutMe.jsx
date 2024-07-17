import avatar from "../../assets/adhim_hp.jpeg";

function AboutMe() {
  return (
    <>
      <div id="about-me" className="about-me mt-36">
        <section className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
            About me
          </h1>
          <h3 className="text-sm md:text-[17px] text-gray-500 mt-2">
            Introduction
          </h3>
        </section>
        <section className="md:flex justify-between gap-5 mt-10">
          <div className="flex flex-col justify-center gap-8">
            <picture className="mx-auto">
              <img
                src={avatar.src}
                className="rounded-3xl max-sm:w-[225px] sm:w-[250px] md:w-[300px]"
                alt="adhim niokagi photo"
              />
            </picture>
            {/* boxes */}
            <div className="flex justify-center gap-4">
              <div className="rounded-2xl text-center border-1 max-sm:p-2 max-sm:px-4 sm:p-3 sm:px-4 md:p-4 md:px-6">
                <h1 className="max-sm:text-2xl text-3xl font-bold">1 +</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Years <br /> Experience
                </p>
              </div>
              <div className="rounded-2xl text-center border-1 max-sm:p-2 max-sm:px-4 sm:p-3 sm:px-4 md:p-4 md:px-6">
                <h1 className="max-sm:text-2xl text-3xl font-bold"> 2</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Completed <br /> Projects
                </p>
              </div>
              <div className="rounded-2xl text-center border-1 max-sm:p-2 max-sm:px-4 sm:p-3 sm:px-4 md:p-4 md:px-6">
                <h1 className="max-sm:text-2xl text-3xl font-bold">7</h1>
                <p className="max-sm:text-xs text-sm text-gray-500 mt-2">
                  Certifications <br /> courses
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="max-sm:px-20 sm:px-20 md:px-0 max-sm:mt-7">
            <p className="max-sm:text-base sm:text-base sm:text-center md:text-left md:text-lg text-gray-600 leading-7">
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
