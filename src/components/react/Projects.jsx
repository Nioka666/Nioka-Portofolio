import PartTitle from "./PartTitle";

function Projects() {
  return (
    <>
      <section id="projects" className="projects-component grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-sm:px-5 ">
        {/* <PartTitle title={"LATEST_ PROJECT"} desc={"my_latest_projects"} num={"003"} extraPadding={"px-1"} extraStyle={"max-sm:text-[30px] leading-[42px]"} /> */}
        <section className={`text-left px-0 my-auto`}>
          <h1 className="text-base font-normal text-textdark2 dark:text-textdark2 md:text-xl">
            $_003
          </h1>
          <h2 className={`mt-[5px] text-3xl font-semibold text-niodark2 dark:text-textdark max-sm:mt-0 md:text-5xl`}>
            LATEST_ PROJECT
          </h2>
        </section>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white dark:bg-niodark2 p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton dark:bg-niodark3 h-24"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white dark:bg-niodark2 p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton dark:bg-niodark3 h-24"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
        <div className="box-wrapper h-[200px] w-[100%] rounded-2xl bg-white dark:bg-niodark2 p-4">
          <div className="flex flex-col gap-4">
            <div className="skeleton dark:bg-niodark3 h-24"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
            <div className="skeleton dark:bg-niodark3 h-3"></div>
          </div>
          <div className="tags-section"></div>
        </div>
      </section>
    </>
  );
}

export default Projects;
