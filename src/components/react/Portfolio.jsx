import PartTitle from "./PartTitle";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio-component">
        <PartTitle title={"Portfolio"} desc={"My Portfolio"} />
        <section className="grid grid-cols-3 place-items-center py-20">
          <div className="box-wrapper h-[250px] w-[270px] rounded-2xl border bg-white p-5">
            <div className="box-img mx-auto h-[50%] w-[100%] rounded-xl border bg-gray-800"></div>
            <div className="tags-section"></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Portfolio;
