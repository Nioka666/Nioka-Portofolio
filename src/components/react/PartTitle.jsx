function PartTitle({ title, num, extraStyle, extraPadding }) {
  return (
    <section className={`${extraPadding} text-left px-6`}>
      <div className="part-number">
        <h1 className="text-base font-normal text-textdark2 dark:text-textdark2 md:text-xl">
          {num}
        </h1>
      </div>
      <h2 className={`${extraStyle} mt-[5px] max-sm:mb-2 text-3xl font-normal text-niodark2 dark:text-textdark max-sm:mt-0 md:text-5xl`}>
        {title}
      </h2>
    </section>
  );
}

export default PartTitle;
