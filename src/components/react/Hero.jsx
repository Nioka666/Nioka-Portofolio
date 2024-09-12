import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/adhim-niokagi_2.jpg";
import CV from "../../assets/Muhammad_Adhim_Niokagi_CV.pdf";

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
          <h1 className="font-semibold leading-tight md:text-[45px] lg:text-[56px] lg:text-black">
            Adhim Niokagi
          </h1>
          <h6 className="text-black md:mt-3 md:text-base lg:mt-1 lg:text-xl">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Developer</span>
          </h6>
          <div className="text-gray mt-5 h-[80px] w-[85%] font-normal md:text-[14px] lg:text-[16.5px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a")
                  .pauseFor(500)
                  .typeString(" Front-End Developer,")
                  .pauseFor(1000)
                  .typeString(" work based in Mojokerto, East Java,")
                  .pauseFor(1000)
                  .typeString(" passionate and dedicated to my work.")
                  .start();
              }}
              options={{
                autoStart: true,
              }}
            />
          </div>
          <div className="mt-10 flex gap-5">
            <button className="rounded-[18px] bg-gray-900 py-[16px] font-medium text-white transition-all hover:bg-white hover:text-black hover:shadow-md md:px-[25px] md:text-sm lg:px-9 lg:text-base">
              Say Hello{" "}
              <i className="uil uil-location-arrow md:ms-1 lg:ms-2"></i>
            </button>
            <a href={CV} target="_blank">
              <button className="flex items-center rounded-2xl bg-transparent py-[15px] font-medium text-black max-sm:text-sm md:px-4 md:text-sm lg:px-7 lg:text-base">
                View CV
                <i className="bx bx-file ms-3 text-2xl text-gray-600"></i>
              </button>
            </a>
          </div>
        </section>
        <picture
          className={`blob overflow-hidden ${
            loaded ? "animate-fade-in" : "opacity-0"
          } md:mt-[-30px] md:w-[260px] lg:h-[320px] lg:w-[330px]`}
        >
          <img src={avatar.src} alt="Adhim Niokagi" />
        </picture>
      </section>

      {/* Hero sm */}
      <section className="sm-hero">
        <div className="mt-16 flex items-center px-6 max-sm:gap-9 max-miniphone:gap-5 sm:gap-10">
          <section className="social-media">
            {mediaSocial.map((data) => (
              <a
                href={data.url}
                key={data.name}
                className="tooltip tooltip-right"
                data-tip={data.name}
              >
                <i
                  className={`${data.icon} cursor-pointer text-xl max-miniphone:text-base`}
                  key={data.name}
                ></i>
              </a>
            ))}
          </section>
          <picture
            className={`blob overflow-hidden max-md:ms-[2px] max-miniphone:ms-[-3px] ${
              loaded ? "animate-fade-in" : "opacity-0"
            } max-md:w-[290px] max-sm:h-full max-sm:w-[227px] max-miniphone:w-[223px] sm:h-full sm:w-[270px] md:h-full md:w-[250px] lg:h-full`}
          >
            <img src={avatar.src} alt="Adhim Niokagi" />
          </picture>
        </div>
        {/* headline */}
        <section className="mx-6 mt-7 flex flex-col">
          <h1 className="font-semibold max-sm:text-[40px] max-miniphone:text-[28px] sm:text-[38.5px]">
            Adhim Niokagi
          </h1>
          <h6 className="text-lg text-black max-sm:text-[19px] max-miniphone:text-[14px] sm:text-xl">
            <i className="uil uil-minus"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <i className="uil uil-minus ms-[-15px]"></i>{" "}
            <span className="ms-2">Front-End Developer</span>
          </h6>
          <div className="text-niogray mt-[13.5px] h-[95px] max-miniphone:h-[70px] w-full leading-7 max-miniphone:leading-5 max-sm:text-[16.7epx] max-miniphone:text-[13px] sm:text-[17px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a")
                  .pauseFor(500)
                  .typeString(" Front-End Developer,")
                  .pauseFor(1000)
                  .typeString(" work based in Mojokerto, East Java,")
                  .pauseFor(1000)
                  .typeString(" and dedicated to my work.")
                  .start();
              }}
              options={{
                autoStart: true,
              }}
            />
          </div>
          <div className="mt-10 flex items-center gap-5 max-sm:mt-8 max-miniphone:gap-2">
            <button className="rounded-[17px] bg-gray-900 px-8 py-[18px] max-miniphone:py-[15.7px] text-sm font-medium text-white transition-all hover:bg-nioprimary hover:text-black max-miniphone:px-6 max-miniphone:text-[11px]">
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
            </button>
            <a href={CV} target="_blank">
              <button className="flex items-center max-miniphone:hidden gap-2 rounded-2xl bg-transparent px-6 text-sm max-miniphone:text-[10px] font-medium text-black">
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
