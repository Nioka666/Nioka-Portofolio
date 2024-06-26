import { useEffect, useState } from "react";
import avatar from "../../../public/assets/adhim-niokagi.jpg";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

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
      url: "https://wa.me/6287755588990",
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
          <h6 className="text-xl text-gray-500 font-medium">
            # Front-End Developer
          </h6>
          <p className="text-gray-500 mt-5 w-[91%]">
            I'm a
            <span className="text-highlight font-medium mx-1">
              Front-End Web Developer
            </span>
            based in Indonesian work.
          </p>
          <div className="mt-10">
            <button className="py-[14px] px-7 bg-black text-white rounded-2xl text-lg font-medium">
              Say Hello <i className="uil uil-location-arrow ms-2"></i>
            </button>
          </div>
        </section>
        <picture>
          <img
            src={avatar.src}
            alt="Adhim Niokagi"
            className={`headline-img ${
              loaded ? "animate-fade-in" : "opacity-0"
            }`}
          />
        </picture>
      </section>
      {/* Hero sm */}
      <section className="sm-hero">
        <div className="flex gap-7 px-5 items-center mt-12">
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
              className={`max-sm:w-[225px] sm:w-[270px] max-md:w-[290px] md:w-[250px] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[80px] border-[12px] ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
            />
          </picture>
        </div>
        {/* headline */}
        <section className="mt-9 flex flex-col mx-5">
          <h1 className="text-[31px] sm:text-[40px] font-semibold">
            M. Adhim Niokagi
          </h1>
          <h6 className="text-base text-gray-500 font-medium sm:text-xl">
            # Front-End Developer
          </h6>
          <p className="text-sm sm:text-base text-gray-500 mt-5 w-[91%] leading-6">
            I'm a
            <span className="text-highlight font-medium mx-1">
              Front-End Web Developer
            </span>
            based in Indonesian work.
          </p>
          <div className="mt-10 flex justify-between">
            <button className="py-[18px] px-7 bg-black text-white rounded-2xl text-sm font-medium">
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
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
