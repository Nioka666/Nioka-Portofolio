import emailjs from "@emailjs/browser";
import { useRef } from "react";
import SendMailAlert from "./SendmailAlert";

const SendmailModal = ({ id }) => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clox1br",
        "template_tz2a35n",
        formRef.current,
        "SbnrtM9iW_7rQXlv6",
      )
      .then(
        () => {
          const alertMsg = document.getElementById("mail-alert");
          const modal1 = document.getElementById("my_modal_1");
          const modal2 = document.getElementById("my_modal_2");

          if (modal1) {
            modal1.close();
          }
          if (modal2) {
            modal2.close();
          }

          if (alertMsg) {
            alertMsg.classList.remove("hidden");

            setTimeout(() => {
              alertMsg.classList.add("hidden");
            }, 2000);
          }
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
        },
      );
  };

  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box p-12 px-12 max-sm:w-[94%] max-sm:p-7">
          <div className="modal-head mb-7 text-center">
            <h3 className="text-2xl font-semibold max-sm:text-lg">
              Say Hello ?
            </h3>
            <p className="mt-1 text-xs font-normal text-gray-400">
              give nioka some message.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="form-control flex w-full justify-center gap-3"
          >
            <input
              type="text"
              name="user_name"
              className="input input-bordered grow max-sm:input-md"
              placeholder="type your name"
              required
            />
            <textarea
              name="message"
              className="textarea textarea-bordered h-[80px] max-sm:text-sm"
              placeholder="Type your message here"
              required
            ></textarea>
            <button type="submit" className="btn btn-neutral mt-3 rounded-xl">
              Send Message
              <i className="uil uil-location-arrow"></i>
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default SendmailModal;
