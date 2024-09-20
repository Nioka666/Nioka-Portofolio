function ButtonChat() {
  const btnAction = () => {
    console.log("clicked!");
  };

  return (
    <>
      <button
        className="button-send-chat"
        onClick={btnAction}
      >
        <i className="bx bxs-message-square-detail text-xl max-sm:text-base"></i>
      </button>
    </>
  );
}

export default ButtonChat;
