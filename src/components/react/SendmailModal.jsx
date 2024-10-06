import { useRef } from "react";
import emailjs from "@emailjs/browser";

const SendmailModal = ({ id }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_clox1br", "template_tz2a35n", formRef.current, {
        publicKey: "SbnrtM9iW_7rQXlv6",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <dialog id={id} className="modal w-full">
        <div className="modal-box p-10 px-12 max-sm:w-[94%] max-sm:p-7">
          <div className="modal-head text-center">
            <h3 className="text-xl font-semibold max-sm:text-lg">
              Say Hello ?
            </h3>
            <p className="mb-4 mt-1 text-xs font-normal text-gray-400">
              give nioka some message.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="form-control grid w-full gap-3"
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
              Send
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default SendmailModal;
