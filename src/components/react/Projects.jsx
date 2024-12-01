import PartTitle from "./PartTitle";

function Projects() {
  function ProjectBox({ st_title, nd_title }) {
    return (
      <>
        <div
          className="card bg-white dark:bg-gradient-to-b from-niodark3 to-niodark4 max-sm:w-full lg:w-[440px] max-lg:w-[340px] border dark:border-borderbtm">
          <div className="card-body text-left">
            <h1 className="text-6xl sm:text-7xl">Nio <br /> Nime</h1>
            <div className="tag flex gap-2 mt-2">
              <span className="bg-gray-100 dark:bg-borderbtm px-3 py-1 text-xs rounded-md">React.js</span>
              <span className="bg-gray-100 dark:bg-borderbtm px-3 py-1 text-xs rounded-md">ExpressJS</span>
            </div>
            <p className="mt-4 text-[13px] font-normal dark:text-textdark4">
              Anime streaming website without ads, with the support of an administration system and allows
              users subscribtion with several benefits </p>
            <div className="mt-5 flex justify-between w-full">
              <div className="cursor-pointer">
                <a href="https://github.com/Nioka666/NioNime">
                  <i className="bx bxl-github text-xl hover:text-textdark2 duration-200"></i>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="https://github.com/Nioka666/NioNime">
                  <i
                    className="bx bx-arrow-back rotate-180 text-xl hover:translate-x-1 transition-all duration-200"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <section id="projects" className="projects-component">
        <PartTitle title={"my_projects"} num={"004"} />
        <section className="projects-content">
          <ProjectBox st_title={"Nio"} nd_title={"Nime"} />
          <ProjectBox st_title={"Nio"} nd_title={"Libs"} />
          <ProjectBox st_title={"N"} nd_title={"Quiz"} />
          <div className="card bg-nioprimary dark:bg-niodark max-sm:w-full sm:w-[410px] text-center h-80">
            <div className="my-auto">
              <i className="bx bxs-ghost text-9xl max-sm:text-[110px] text-gray-300 dark:text-textdark5"></i>
              <h1 className="text-xl md:text-3xl mt-5 text-gray-300 dark:text-textdark5 font-bold">What's next?</h1>
              <p className="text-base max-sm:text-sm text-gray-300 dark:text-textdark5 underline">Let's collaborate w/ me</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
