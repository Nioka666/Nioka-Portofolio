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
      name: "Linkedin",
      icon: "bx bxl-linkedin",
      url: "https://linkedin.com/in/adhim-niokagi",
    },
    {
      name: "Instagram",
      icon: "bx bxl-instagram",
      url: "https://instagram.com/nioka.o",
    },
    {
      name: "Github",
      icon: "bx bxl-github",
      url: "https://github.com/nioka666",
    },
    {
      name: "Whatsapp",
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
            <a
              href={data.url}
              key={data.name}
              className="tooltip tooltip-left"
              data-tip={data.name}
            >
              <i
                className={`${data.icon} text-2xl cursor-pointer text-black`}
                key={data.name}
              ></i>
            </a>
          ))}
        </section>
        <section className="headline">
          <h1 className="text-[56px] font-semibold leading-tight text-black">
            Adhim Niokagi
          </h1>
          <h6 className="text-xl text-gray-600 font-medium mt-1">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Web Developer</span>
          </h6>
          <p className="font-normal text-gray mt-5 w-[91%] text-[17px]">
            I'm a 
            <span className="text-highlight ms-1">
              Front-End Web Developer,
            </span>{" "}
            work based in Mojokerto, East Java,
            passionate and dedicated to my work.
          </p>
          <div className="mt-10">
            <button className="py-[15px] px-7 bg-black text-white rounded-2xl text-lg font-medium hover:bg-white hover:text-black transition-all hover:shadow-md">
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
        <div className="flex max-sm:gap-9 sm:gap-10 px-6 items-center mt-12">
          <section className="social-media">
            {mediaSocial.map((data) => (
              <a
                href={data.url}
                key={data.name}
                className="tooltip tooltip-right"
                data-tip={data.name}
              >
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
            } max-sm:w-[220px] max-sm:h-full sm:w-[270px] sm:h-full max-md:w-[290px] md:w-[250px] md:h-full`}
          >
            <img src={avatar.src} alt="Adhim Niokagi" />
          </picture>
        </div>
        {/* headline */}
        <section className="mt-7 flex flex-col mx-6">
          <h1 className="max-sm:text-[38.5px] sm:text-[38px] font-semibold">
            Adhim Niokagi
          </h1>
          <h6 className="text-lg text-gray-700 font-medium max-sm:text-[17px] sm:text-xl mt-1">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Web Developer</span>
          </h6>
          <p className="font-normal max-sm:text-[15px] sm:text-[17px] text-gray mt-3 w-full">
            I'm a 
            <span className="text-highlight mx-1">
              {" "}
              Front-End Web Developer,{" "}
            </span>
            work based in Mojokerto, East Java, passionate and dedicated to my work.
          </p>
          <div className="mt-10 flex gap-5 items-center">
            <button className="py-[18px] px-6 bg-black text-white rounded-2xl text-sm font-medium hover:text-black hover:bg-white transition-all">
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
      <section className="ms-[85px] lg:ms-[130px] mt-14 max-sm:hidden">
        <button className="flex items-center gap-1 bg-transparent text-black rounded-2xl text-base font-normal hover:translate-y-1 transition-all">
          <i className="bx bx-mouse text-3xl text-gray-600"></i>Scroll Down
          <i className="bx bx-down-arrow-alt text-xl ms-1 text-gray-600"></i>
        </button>
      </section>
    </>
  );
}

export default Hero;
