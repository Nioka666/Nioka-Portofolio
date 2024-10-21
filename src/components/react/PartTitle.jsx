function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-xl font-normal text-niodark2 dark:text-textdark2 sm:text-2xl md:text-4xl">
        ##
      </h1>
      <h2 className="mt-[10px] text-xl text-niodark2 dark:text-textdark2 max-sm:mt-0 md:text-[20px]">
        {title}
      </h2>
    </section>
  );
}

export default PartTitle;
