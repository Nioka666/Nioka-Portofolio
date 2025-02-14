function SendMailAlert() {
  return (
    <div
      id="mail-alert"
      role="alert"
      className="alert fixed left-[50%] top-10 z-[999] hidden w-[70%] -translate-x-1/2 transform border-none transition-all duration-300 ease-linear dark:bg-niodark2 dark:text-nioprimary"
    >
      <div className="flex items-center gap-3 max-sm:gap-2">
        <i className="bx bxs-check-circle text-green-400"></i>
        <span className="gap-1 text-base max-sm:text-[15px]">
          Your message sended!
        </span>
      </div>
    </div>
  );
}

export default SendMailAlert;
