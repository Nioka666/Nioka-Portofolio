function Contact() {
  return (
    <>
      <section className="contact"></section>
      {/* large button group */}
      <div className="mt-10 flex gap-7 font-medium">
        <button
          role="button"
          className="rounded-[17.5px] bg-niodark py-[17px] text-white hover:shadow-lg dark:bg-nioprimary dark:font-semibold dark:text-niodark md:px-[25px] md:text-sm lg:px-[34px] lg:text-[17px]"
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

      {/* small btn group */}
      <div className="mt-10 flex items-center gap-[40px] font-medium max-sm:mt-[27px] max-miniphone:gap-2 sm:mt-0 sm:gap-[40px]">
        <button
          role="button"
          className="rounded-[15.5px] bg-gray-800 px-[30px] py-[17.5px] text-[14.7px] text-nioprimary hover:shadow-md dark:bg-niosecondary dark:font-semibold dark:text-niodark dark:shadow-sm max-miniphone:px-6 max-miniphone:py-[15.7px] max-miniphone:text-[11px] sm:text-[15px]"
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
    </>
  );
}

export default Contact;
