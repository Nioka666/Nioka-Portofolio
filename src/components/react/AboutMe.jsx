import avatar from "../../assets/adhim_hp.jpeg";

function AboutMe() {
  return (
    <>
      <div className="about-me mt-32">
        <section className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            About me
          </h1>
          <h3 className="text-sm md:text-base text-gray-600">Introduction</h3>
        </section>
        <section className="flex justify-center my-11">
          <picture>
            <img
              src={avatar.src}
              width={220}
              className="rounded-3xl"
              alt="adhim niokagi photo"
            />
          </picture>
        </section>
        <section className="flex justify-center gap-10">
          <div className="rounded-2xl  text-center">
            <h1 className="text-xl font-semibold">1 +</h1>
            <p className="text-xs text-gray-500 mt-2">
              Year <br /> Experience
            </p>
          </div>
          <div className="rounded-2xl  text-center">
            <h1 className="text-xl font-semibold"> 2</h1>
            <p className="text-xs text-gray-500 mt-2">
              Completed <br /> Projects
            </p>
          </div>
          <div className="rounded-2xl  text-center">
            <h1 className="text-xl font-semibold">7</h1>
            <p className="text-xs text-gray-500 mt-2">
             Certifications <br /> courses
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
