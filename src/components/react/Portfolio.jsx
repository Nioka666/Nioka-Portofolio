import PartTitle from "./PartTitle";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio-component border grid grid-cols-3 max-sm:grid-cols-2 gap-5 px-5">
        <PartTitle title={"Latest Project"} desc={"my_latest_projects"} />
          <div className="box-wrapper h-[250px] w-[100%] rounded-2xl border bg-white p-5">
            <div className="box-img mx-auto h-[50%] w-[100%] rounded-xl border bg-gray-200"></div>
            <div className="tags-section"></div>
          </div>
          <div className="box-wrapper h-[250px] w-[100%] rounded-2xl border bg-white p-5">
            <div className="box-img mx-auto h-[50%] w-[100%] rounded-xl border bg-gray-200"></div>
            <div className="tags-section"></div>
          </div>
          <div className="box-wrapper h-[250px] w-[100%] rounded-2xl border bg-white p-5">
            <div className="box-img mx-auto h-[50%] w-[100%] rounded-xl border bg-gray-200"></div>
            <div className="tags-section"></div>
          </div>
      </section>
    </>
  );
}

export default Portfolio;
