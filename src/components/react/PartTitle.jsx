function PartTitle({ title, desc }) {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-semibold text-black dark:text-textdark sm:text-2xl md:text-4xl">
        {title}
      </h1>
      <h3 className="mt-[13.4px] text-sm text-gray-400 max-sm:mt-0 md:text-[17px]">
        {desc}
      </h3>
    </section>
  );
}

export default PartTitle;
