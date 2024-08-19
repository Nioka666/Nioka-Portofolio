function ButtonChat() {
  const btnAction = () => {
    console.log("clicked!");
  };

  return (
    <>
      <button
        className="fixed bottom-12 right-10 h-[55px] w-[55px] rounded-full bg-gray-800 text-white transition-all hover:bg-gray-600 max-lg:hidden max-md:bottom-20 max-md:right-5"
        onClick={btnAction}
      >
        <i className="bx bxs-message-square-detail text-xl max-sm:text-base"></i>
      </button>
    </>
  );
}

export default ButtonChat;
