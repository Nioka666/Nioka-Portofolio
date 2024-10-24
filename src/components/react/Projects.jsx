import PartTitle from "./PartTitle";

function Projects() {
  return (
    <>
      <section id="projects" className="projects-component grid grid-cols-3 max-sm:grid-cols-2 gap-5 max-sm:px-5">
        {/* <div className=""> */}
          <PartTitle title={"Latest Project"} desc={"my_latest_projects"} extraStyle={"max-sm:text-[45px] leading-[50px]"}/>
        {/* </div> */}
        <div className="box-wrapper h-[250px] w-[100%] rounded-2xl bg-white p-4">
          <div className="box-img mx-auto h-[60%] w-[100%] rounded-xl bg-gray-100"></div>
          <div className="tags-section"></div>
        </div>
        <div className="box-wrapper h-[250px] w-[100%] rounded-2xl bg-white p-4">
          <div className="box-img mx-auto h-[60%] w-[100%] rounded-xl bg-gray-100"></div>
          <div className="tags-section"></div>
        </div>
      </section>
    </>
  );
}

export default Projects;
