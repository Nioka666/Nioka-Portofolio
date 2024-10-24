import PartTitle from "./PartTitle";

function Projects() {
  return (
    <>
      <section id="projects" className="projects-component grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-sm:px-5 ">
        <div className="">
          <PartTitle title={"LATEST_ PROJECT"} desc={"my_latest_projects"} num={"003"} extraPadding={"px-0"} extraStyle={"max-sm:text-[25px] leading-[42px]"} />
        </div>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton h-24"></div>
            <div className="skeleton h-3"></div>
            <div className="skeleton h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton h-24"></div>
            <div className="skeleton h-3"></div>
            <div className="skeleton h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton h-24"></div>
            <div className="skeleton h-3"></div>
            <div className="skeleton h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
      </section>
    </>
  );
}

export default Projects;
