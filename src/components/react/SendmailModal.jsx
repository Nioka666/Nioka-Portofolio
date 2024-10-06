import { useRef } from "react";
import emailjs from '@emailjs/browser';

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
      <dialog id={id} className="modal">
        <div className="modal-box grid gap-4 p-10 px-12">
          <h3 className="text-xl font-semibold">Say Hello to Nioka</h3>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="form-control grid w-full gap-3"
          >
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="user_name"
                className="grow"
                placeholder="Your name"
                required
              />
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Type your message here"
              required
            ></textarea>
            <button type="submit" className="btn btn-neutral mt-5">
              Send
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default SendmailModal;
