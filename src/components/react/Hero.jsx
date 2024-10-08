import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/adhim_niokagi.jpg";
import CV from "../../assets/Adhim_Niokagi_IT_CVS.pdf";
import SendmailModal from "./SendmailModal";

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
              aria-label="Links to connect my social media"
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
            A Front-End Web Developer & UI/UX Enthusiast, who dedicated to learn more & develops themself in this field.
          </p>
          <div className="mt-10 flex gap-7 font-medium">
            <button
              role="button"
              className="hero-hello-btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Say Hello
              <i className="uil uil-location-arrow md:ms-1 lg:ms-[9.2px]"></i>
            </button>
            <SendmailModal id={"my_modal_1"} />
            <a href={CV} target="_blank">
              <button role="button" className="hero-cv-btn">
                View CV
                <i className="bx bx-file"></i>
              </button>
            </a>
          </div>
        </section>
        <picture className={`hero-pp`}>
          <img src={avatar} alt="Adhim Niokagi Profile Picture" />
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
                aria-label="Links to connect my social media"
              >
                <i
                  className={`${data.icon} cursor-pointer text-xl max-miniphone:text-base`}
                  key={data.name}
                ></i>
              </a>
            ))}
          </section>
          <picture className={`sm-avatar`}>
            <img src={avatar} alt="Adhim Niokagi Profile Picture" />
          </picture>
        </section>
        {/* headline */}
        <section className="sm-headline">
          <h1>Adhim Niokagi</h1>
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
          <p className="text-niogray mt-[18.5px] h-full w-full text-[15px] leading-[25px] dark:text-textdark2 max-sm:text-[16px]">
            A Front-End Web Developer & UI/UX Enthusiast, who dedicated to learn & develops themself in this field.
          </p>
          <div className="sm-btn-group">
            <button
              role="button"
              className="hello-sm-btn mt-4"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Say Hello <i className="uil uil-location-arrow ms-1"></i>
            </button>
            <SendmailModal id={"my_modal_2"} />
            {/* <a href={CV} target="_blank">
              <button role="button" className="cv-sm-btn">
                View CV
                <i className="bx bx-file text-[21px] text-gray-600 dark:text-textdark3"></i>
              </button>
            </a> */}
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
