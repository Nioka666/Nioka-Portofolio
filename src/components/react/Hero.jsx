import { useEffect, useState } from "react";
import avatar from "../../assets/adhim-niokagi_2.jpg";

import CV from "../../assets/Adhim_Niokagi_Resume.pdf";

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
          <h1 className="text-[55px] font-semibold leading-tight">
            Adhim Niokagi
          </h1>
          <h6 className="text-xl text-gray-500 font-medium">
            # Front-End Developer
          </h6>
          <p className="text-gray-500 mt-5 w-[91%] text-base">
            I'm a
            <span className="text-highlight font-medium mx-1">
              Front-End Web Developer
            </span>
             based in Indonesian work, still learning hard and improving self.
          </p>
          <div className="mt-10">
            <button className="py-[14px] px-7 bg-black text-white rounded-2xl text-lg font-medium">
              Say Hello <i className="uil uil-location-arrow ms-2"></i>
            </button>
          </div>
        </section>
        <picture
          className={`blob overflow-hidden ${
            loaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <img src={avatar.src} alt="Adhim Niokagi" />
        </picture>
      </section>
      {/* Hero sm */}
      <section className="sm-hero">
        <div className="flex max-sm:gap-9 sm:gap-10 px-7 items-center mt-12">
          <section className="social-media">
            {mediaSocial.map((data) => (
              <a href={data.url} key={data.name}>
                <i
                  className={`${data.icon} text-xl cursor-pointer`}
                  key={data.name}
                ></i>
              </a>
            ))}
          </section>
          <picture
            className={`blob overflow-hidden ${
              loaded ? "animate-fade-in" : "opacity-0"
            } max-sm:w-[230px] max-sm:h-full sm:w-[270px] sm:h-full max-md:w-[290px] md:w-[250px] md:h-full`}
          >
            <img src={avatar.src} alt="Adhim Niokagi" />
          </picture>
        </div>
        {/* headline */}
        <section className="mt-7 flex flex-col mx-7">
          <h1 className="max-sm:text-[38px] sm:text-[38px] font-semibold">
            Adhim Niokagi
          </h1>
          <h6 className="text-lg text-gray-500 font-medium max-sm:text-[17px] sm:text-xl">
            # Front-End Developer
          </h6>
          <p className="max-sm:text-[17px] sm:text-[18px] text-gray-500 mt-3 w-[91%] leading-6">
            I'm a
            <span className="text-highlight font-medium mx-1">
              Front-End Web Developer
            </span>
            based in Indonesian work, still learning hard and improving self.
          </p>
          <div className="mt-10 flex gap-5 items-center">
            <button className="py-[18px] px-6 bg-black text-white rounded-2xl text-sm font-medium">
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
            </button>
            <a href={CV} target="_blank">
              <button className="px-6 flex items-center gap-2 bg-transparent text-black rounded-2xl text-sm font-medium">
                View CV
                <i className="bx bx-file text-2xl text-gray-600"></i>
              </button>
            </a>
          </div>
        </section>
      </section>
      {/* scroll button */}
      <section className="ms-[85px] lg:ms-[115px] mt-14 max-sm:hidden">
        <button className="flex items-center gap-1 bg-transparent text-black rounded-2xl text-base font-normal hover:translate-y-1 transition-all">
          <i className="bx bx-mouse text-3xl text-gray-600"></i>Scroll Down
          <i className="bx bx-down-arrow-alt text-xl ms-1 text-gray-600"></i>
        </button>
      </section>
    </>
  );
}

export default Hero;
