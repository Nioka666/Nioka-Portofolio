import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/adhim_niokagi_2.jpg";
import CV from "../../assets/Adhim_Niokagi_IT_CVS.pdf";

function Hero() {
  const [loaded, setLoaded] = useState(false);
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

  const XLine = ({ n }) => {
    const elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(<i key={i} className="uil uil-minus ms-[-15px]"></i>);
    }
    return (
      <>
        <div className="me-[14px] text-gray-500 dark:text-textdark2">
          <i className="uil uil-minus"></i>
          {elements}
        </div>
      </>
    );
  };

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
                className={`${data.icon} cursor-pointer md:text-[17px] lg:text-[19px] nionotebook:text-[21px]`}
                key={data.name}
              ></i>
            </a>
          ))}
        </section>
        <section className="headline">
          <h1 className="lg-header">Adhim Niokagi</h1>
          <div className="lg-role">
            <XLine n={10} />
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Front-End Developer").start();
              }}
              options={{
                autoStart: true,
              }}
            />
          </div>
          <p className="lg-paragraph">
            Im a Junior Front-End Developer, work based in Mojokerto, East Java.
            Passionate and dedicated to my work.
          </p>
          <div className="mt-10 flex gap-7 font-medium">
            <button
              role="button"
              className="rounded-[17.5px] bg-niodark py-[17px] text-white hover:bg-niodark2 hover:shadow-lg dark:bg-textdark2 dark:font-semibold dark:text-niodark dark:hover:text-niodark md:px-[25px] md:text-sm lg:px-[34px] lg:text-[17px]"
            >
              Say Hello
              <i className="uil uil-location-arrow md:ms-1 lg:ms-[9.2px]"></i>
            </button>
            <a href={CV} target="_blank">
              <button
                role="button"
                className="flex items-center py-[15px] md:px-4 md:text-sm lg:px-7 lg:text-[17px]"
              >
                View CV
                <i className="bx bx-file ms-3 text-2xl text-gray-600 dark:text-nioprimary"></i>
              </button>
            </a>
          </div>
        </section>
        <picture
          className={`blob me-[25px] overflow-hidden md:mt-[-30px] md:w-[260px] lg:mt-[-70px] lg:h-[250px] lg:w-[355px] nionotebook:mt-[-5px] nionotebook:h-[315px] nionotebook:w-[325px]`}
        >
          <img src={avatar.src} alt="Adhim Niokagi" />
        </picture>
      </section>

      {/* Hero sm */}
      <section className="sm-hero">
        {/* avatars */}
        <section className="avatar-wrap">
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
            className={`sm-avatar`}
          >
            <img src={avatar.src} alt="Adhim Niokagi" />
          </picture>
        </section>
        {/* headline */}
        <section className="mx-6 mt-7 flex flex-col">
          <h1 className="mb-[6px] font-semibold leading-[55px] max-sm:text-[41px] max-miniphone:text-[35px] sm:text-[47px]">
            Adhim Niokagi
          </h1>
          <div className="flex max-sm:text-[17.9px] max-miniphone:text-[14px] sm:text-xl">
            <XLine n={10} />
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Front-End Dev").start();
              }}
              options={{
                autoStart: true,
              }}
            />
          </div>
          <p className="text-niogray mt-[14.5px] h-[110px] w-full leading-[25px] dark:text-textdark2 max-sm:text-[16.7px]">
            I'm a Front-End Web Developer & UI/UX Enthusiast, based in
            Mojokerto, East Java.
          </p>
          <div className="mt-10 flex items-center gap-[40px] font-medium max-sm:mt-[27px] max-miniphone:gap-2 sm:mt-0 sm:gap-[40px]">
            <button
              role="button"
              className="rounded-[15.5px] bg-gray-800 px-[30px] py-[17.5px] text-[14.7px] text-nioprimary hover:shadow-md dark:bg-textdark2 dark:font-semibold dark:text-niodark dark:shadow-sm max-miniphone:px-6 max-miniphone:py-[15.7px] max-miniphone:text-[11px] sm:text-[15px]"
            >
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
            </button>
            <a href={CV} target="_blank">
              <button
                role="button"
                className="flex items-center gap-[11px] rounded-2xl bg-transparent px-0 text-[14px] max-miniphone:text-[10px] sm:text-[15px]"
              >
                View CV
                <i className="bx bx-file text-2xl text-gray-600 dark:text-textdark"></i>
              </button>
            </a>
          </div>
        </section>
      </section>

      {/* scroll button */}
      <section className="hero-scroll-btn-group">
        <button
          role="button"
          className="mouse-scroll-btn text-gray-600 dark:text-textdark2"
          onClick={scrollDown}
        >
          <i className="bx bx-mouse me-1 text-2xl"></i>Scroll Down
          <i className="bx bx-down-arrow-alt ms-1 text-xl"></i>
        </button>
      </section>
    </>
  );
}

export default Hero;
