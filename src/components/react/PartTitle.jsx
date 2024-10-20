function PartTitle({ title, desc }) {
  return (
    <section className="text-left px-6">
      <h1 className="text-2xl font-medium text-niodark2 dark:text-textdark2 sm:text-2xl md:text-4xl">
        #
      </h1>
      <h2 className="mt-[13.4px] text-lg text-niodark2 dark:text-textdark2 max-sm:mt-0 md:text-[17px]">
        {title}
      </h2>
      {/* <hr className="mt-3 w-[40%] dark:border-textdark2"/> */}
    </section>
  );
}

export default PartTitle;
