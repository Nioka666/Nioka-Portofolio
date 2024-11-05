import PartTitle from "./PartTitle";

function Projects() {
  function ProjectBox() {
    return (<>
      <div className="box-wrapper lg:h-[230px] h-[180px] w-[100%] rounded-2xl bg-white border-b-2 border-base-300 dark:border-textdark2 dark:bg-niodark2 p-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-textdark4">001</h1>
        </div>
        <div className="tags-section"></div>
      </div>
    </>)
  }

  return (
    <>
      <section id="projects" className="projects-component grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-sm:px-5 ">
        <section className={`px-0 my-auto mx-auto max-sm:ms-3`}>
          <h1 className="text-base font-normal text-textdark2 dark:text-textdark2 md:text-xl">
            003
          </h1>
          <h2 className={`mt-[5px] text-[28px] font-semibold text-niodark2 dark:text-textdark max-sm:mt-0 md:text-5xl`}>
            Latest_ Projects
          </h2>
        </section>
        <div className="sm:hidden"></div>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </section>
    </>
  );
}

export default Projects;
