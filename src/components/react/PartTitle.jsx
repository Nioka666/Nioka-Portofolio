function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-2xl text-textdark2 dark:text-textdark2 sm:text-2xl md:text-4xl">
        01
      </h1>
      <h2 className="mt-[13.4px] text-base text-textdark2 dark:text-textdark2 max-sm:mt-0 md:text-[17px]">
        {title} - {desc}
      </h2>
    </section>
  );
}

export default PartTitle;
