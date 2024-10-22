function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-sm font-normal text-textdark2 dark:text-textdark2 md:text-xl">
        #{desc}
      </h1>
      <h2 className="mt-[5px] text-3xl font-semibold text-niodark2 dark:text-textdark max-sm:mt-1 md:text-5xl">
        {title}
      </h2>
    </section>
  );
}

export default PartTitle;
