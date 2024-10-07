function SendMailAlert() {
  return (
    <div
      id="mail-alert"
      role="alert"
      className="alert hidden fixed left-[50%] top-10 z-[999] w-[82%] -translate-x-1/2 transform transition-all duration-150 ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-info"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>Your message has successfully been sent!</span>
    </div>
  );
}

export default SendMailAlert;
