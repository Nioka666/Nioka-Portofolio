import PartTitle from "./PartTitle";

function Contacts() {
  const mediaSocial = [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/adhim-niokagi",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nioka.o",
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/6287755588990",
    },
  ];

  return (
    <>
      <section id="contacts" className="contacts-component">
        <PartTitle title={"contacts"} num={"005"}></PartTitle>

        <div className="wraps grid grid-cols-2 max-sm:grid-cols-1 max-sm:mx-6 gap-10">
          <section className="contacts-content grid gap-7 grid-cols-1 w-[110%] max-sm:w-full">
            <a href="https://linkedin.com/in/adhim-niokagi">
              <div className="contact-card group cursor-pointer px-3 flex justify-between">
                <span className="text-2xl max-sm:group-hover:text-niodark max-sm:text-xl max-sm:group-hover:text-2xl text-textdark5 hover:text-niodark group-hover:text-3xl transition-all duration-150 dark:text-textdark4">LinkedIn</span>
                <i className='bx bx-arrow-back max-sm:group-hover:text-niodark text-textdark5 hover:text-niodark rotate-[140deg] text-2xl dark:text-textdark4 dark:hover:text-textdark4 group-hover:text-3xl transition-all duration-150 group-hover:rotate-180'></i>
              </div>
            </a>
            <hr className="mt-[-10px] dark:border-borderbtm" />
            <a href="https://instagram.com/nioka.o">
              <div className="contact-card group cursor-pointer px-3 flex justify-between">
                <span className="text-2xl max-sm:group-hover:text-niodark max-sm:text-xl max-sm:group-hover:text-2xl text-textdark5 hover:text-niodark group-hover:text-3xl transition-all duration-150 dark:text-textdark4">Instagram</span>
                <i className='bx bx-arrow-back max-sm:group-hover:text-niodark text-textdark5 hover:text-niodark rotate-[140deg] text-2xl dark:text-textdark4 dark:hover:text-textdark4 group-hover:text-3xl transition-all duration-150 group-hover:rotate-180'></i>
              </div>
            </a>
            <hr className="mt-[-10px] dark:border-borderbtm" />
            <a href="https://wa.me/6287755588990">
              <div className="contact-card group cursor-pointer px-3 flex justify-between">
                <span className="text-2xl max-sm:group-hover:text-niodark max-sm:text-xl max-sm:group-hover:text-2xl text-textdark5 hover:text-niodark group-hover:text-3xl transition-all duration-150 dark:text-textdark4">WhatsApp</span>
                <i className='bx bx-arrow-back max-sm:group-hover:text-niodark text-textdark5 hover:text-niodark rotate-[140deg] text-2xl dark:text-textdark4 dark:hover:text-textdark4 group-hover:text-3xl transition-all duration-150 group-hover:rotate-180'></i>
              </div>
            </a>
          </section>
          <section className="mt-40 max-sm:mt-5 text-right w-[90%] max-sm:w-[90%] max-sm:ms-7">
            <h1 className="text-[27px] max-sm:text-[19px] leading-[40px] max-sm:leading-9 dark:text-textdark4 font-extralight">There are many ways to connect w/ me, and I look forward to our future
              <span className="text-3xl max-sm:text-[26px] font-medium">
                {" "} collaboration.
              </span>
            </h1>
          </section>
        </div>
      </section>
    </>
  );
}

export default Contacts;
