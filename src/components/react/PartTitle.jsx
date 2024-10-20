function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-3xl font-semibold text-black dark:text-textdark sm:text-2xl md:text-4xl">
        ./{title}
      </h1>
      <h2 className="mt-[13.4px] ms-7 text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
        {desc}
      </h2>
    </section>
  );
}

export default PartTitle;
