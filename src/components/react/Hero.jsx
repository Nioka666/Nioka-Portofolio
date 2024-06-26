import avatar from "../../../public/assets/adhim-niokagi.jpg";

function Hero() {
  const mediaSocial = [
    {
      name: "linkedin",
      icon: "bx bxl-linkedin",
      url: "https://linkedin.com/in/adhim-niokagi",
    },
    {
      name: "instagram",
      icon: "bx bxl-instagram",
      url: "https://instagram.com/nioka.o",
    },
    {
      name: "github",
      icon: "bx bxl-github",
      url: "https://github.com/nioka666",
    },
    {
      name: "whatsapp",
      icon: "bx bxl-whatsapp",
      url: "https://whatsapp.me/6287755588990",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <section className="social-media">
          {mediaSocial.map((data) => (
            <a href={data.url} key={data.name}>
              <i
                className={`${data.icon} text-2xl cursor-pointer`}
                key={data.name}
              ></i>
            </a>
          ))}
        </section>
        <section className="headline">
          <h1 className="text-[50px] font-semibold">M. Adhim Niokagi</h1>
          <h6 className="text-xl"># Front-End Developer</h6>
          <p className="text-gray-500 mt-5 w-[91%]">
            I'm a Front-End Web Developer based in Indonesian, and I'm very
            passionate and dedicated to my work.
          </p>
          <div className="mt-10">
            <button className="py-[14px] px-7 bg-black text-white rounded-2xl text-lg font-medium">
              Say Hello <i className="uil uil-location-arrow ms-2"></i>
            </button>
          </div>
        </section>
        <picture>
          <img src={avatar.src} alt="Adhim Niokagi" className="headline-img" />
        </picture>
      </section>
      {/* Hero sm */}
      <section className="sm-hero">
        <div className="flex gap-10 px-10 items-center mt-12">
          <section className="social-media">
            {mediaSocial.map((data) => (
              <a href={data.url} key={data.name}>
                <i
                  className={`${data.icon} text-2xl cursor-pointer`}
                  key={data.name}
                ></i>
              </a>
            ))}
          </section>
          <picture>
            <img
              src={avatar.src}
              alt="Adhim Niokagi"
              className="max-sm:w-[225px] max-md:w-[250px] md:w-[250px] rounded-tr-[150px] rounded-tl-[150px] rounded-br-[100px] rounded-bl-[150px] border-[12px]"
            />
          </picture>
        </div>
        {/* headline */}
        <section className="mt-8 flex flex-col ms-7">
          <h1 className="text-[30px] sm:text-[40px] font-semibold ms-2">
            M. Adhim Niokagi
          </h1>
          <h6 className="text-base sm:text-xl ms-2"># Front-End Developer</h6>
          <p className="text-sm sm:text-base text-gray-500 mt-5 w-[91%] ms-2">
            I'm a Front-End Web Developer based in Indonesian, and I'm very
            passionate and dedicated to my work.
          </p>
          <div className="mt-10 flex justify-between">
            <button className="py-[18px] px-7 bg-black text-white rounded-2xl text-sm font-medium">
              Say Hello <i className="uil uil-location-arrow ms-0"></i>
            </button>
            <button className="px-7 flex items-center gap-1 bg-transparent text-black rounded-2xl text-sm font-normal hover:translate-y-1 transition-all">
              <i className="bx bx-mouse text-2xl text-gray-600"></i>Scroll Down
              <i className="bx bx-down-arrow-alt text-xl  text-gray-600"></i>
            </button>
          </div>
        </section>
      </section>
      {/* scroll button */}
      <section className="ms-[135px] mt-14 max-sm:hidden">
        <button className="flex items-center gap-1 bg-transparent text-black rounded-2xl text-base font-normal hover:translate-y-1 transition-all">
          <i className="bx bx-mouse text-3xl text-gray-600"></i>Scroll Down
          <i className="bx bx-down-arrow-alt text-xl ms-1 text-gray-600"></i>
        </button>
      </section>
    </>
  );
}

export default Hero;
