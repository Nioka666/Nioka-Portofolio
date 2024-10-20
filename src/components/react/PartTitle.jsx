function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-2xl font-bold text-textdark2 dark:text-textdark sm:text-2xl md:text-4xl">
        ./{title}
      </h1>
      <h2 className="mt-[13.4px] text-sm text-textdark2 max-sm:mt-2 md:text-[17px]">
        {desc}
      </h2>
    </section>
  );
}

export default PartTitle;
