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

  const scrollDown = () => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  };

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
                className={`${data.icon} cursor-pointer text-[21px] text-black`}
                key={data.name}
              ></i>
            </a>
          ))}
        </section>
        <section className="headline">
          <h1 className="text-[56px] font-semibold leading-tight text-black">
            Adhim Niokagi
          </h1>
          <h6 className="mt-1 text-xl font-medium text-gray-600">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Web Developer</span>
          </h6>
          <p className="text-gray mt-5 w-[91%] text-[17px] font-normal">
            I'm a
            <span className="text-highlight ms-1">
              Front-End Web Developer,
            </span>{" "}
            work based in Mojokerto, East Java, passionate and dedicated to my
            work.
          </p>
          <div className="mt-10 flex gap-5">
            <button className="rounded-[18px] bg-black px-7 py-[16px] text-base font-medium text-white transition-all hover:bg-white hover:text-black hover:shadow-md">
              Say Hello <i className="uil uil-location-arrow ms-2"></i>
            </button>
            <a href={CV} target="_blank">
              <button className="flex items-center rounded-2xl bg-transparent px-7 py-[15px] text-base font-medium text-black max-sm:text-sm">
                View CV
                <i className="bx bx-file ms-3 text-2xl text-gray-600"></i>
              </button>
            </a>
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
        <div className="mt-12 flex items-center px-6 max-sm:gap-9 sm:gap-10">
          <section className="social-media">
            {mediaSocial.map((data) => (
              <a
                href={data.url}
                key={data.name}
                className="tooltip tooltip-right"
                data-tip={data.name}
              >
                <i
                  className={`${data.icon} cursor-pointer text-xl`}
                  key={data.name}
                ></i>
              </a>
            ))}
          </section>
          <picture
            className={`blob overflow-hidden ${
              loaded ? "animate-fade-in" : "opacity-0"
            } max-md:w-[290px] max-sm:h-full max-sm:w-[230px] sm:h-full sm:w-[270px] md:h-full md:w-[250px] lg:h-full`}
          >
            <img src={avatar.src} alt="Adhim Niokagi" />
          </picture>
        </div>
        {/* headline */}
        <section className="mx-6 mt-7 flex flex-col">
          <h1 className="font-semibold max-sm:text-[38px] sm:text-[38.5px]">
            Adhim Niokagi
          </h1>
          <h6 className="text-lg font-medium text-gray-700 max-sm:text-[17px] sm:text-xl">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Web Developer</span>
          </h6>
          <p className="text-gray mt-3 w-full font-normal max-sm:text-[15.5px] sm:text-[17px]">
            I'm a
            <span className="text-highlight mx-1">
              {" "}
              Front-End Web Developer,{" "}
            </span>
            work based in Mojokerto, East Java. <br /> . . .
          </p>
          <div className="mt-12 flex items-center gap-5">
            <button className="rounded-[17px] bg-black px-6 py-[18px] text-sm font-medium text-white transition-all hover:bg-white hover:text-black">
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
            </button>
            <a href={CV} target="_blank">
              <button className="flex items-center gap-2 rounded-2xl bg-transparent px-6 text-sm font-medium text-black">
                View CV
                <i className="bx bx-file text-2xl text-gray-600"></i>
              </button>
            </a>
          </div>
        </section>
      </section>
      {/* scroll button */}
      <section className="ms-[85px] mt-20 max-lg:hidden lg:ms-[130px]">
        <button
          className="flex items-center gap-1 rounded-2xl bg-transparent text-base font-normal text-black transition-all hover:translate-y-1"
          onClick={scrollDown}
        >
          <i className="bx bx-mouse text-3xl text-gray-600"></i>Scroll Down
          <i className="bx bx-down-arrow-alt ms-1 text-xl text-gray-600"></i>
        </button>
      </section>
    </>
  );
}

export default Hero;
