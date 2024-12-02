import PartTitle from "./PartTitle";

function Projects() {
  function ProjectBox({ st_title, nd_title, st_tech, nd_tech, desc, url, details_url }) {
    return (
      <>
        <div
          className="card bg-white dark:bg-gradient-to-b from-[#1b1b1d] to-niodark4 max-sm:w-full lg:w-[440px] max-lg:w-[340px] border dark:border-borderbtm">
          <div className="card-body text-left">
            <h1 className="text-6xl sm:text-7xl">{st_title} <br /> {nd_title}</h1>
            <div className="tag flex gap-2 mt-2">
              <span className="bg-gray-100 dark:bg-borderbtm px-3 py-1 text-xs rounded-md">{st_tech}</span>
              <span className="bg-gray-100 dark:bg-borderbtm px-3 py-1 text-xs rounded-md">{nd_tech}</span>
            </div>
            <p className="mt-4 text-[13px] font-normal dark:text-textdark4">
              {desc}
            </p>
            <div className="mt-5 flex justify-between w-full max-sm:mb-[-8px]">
              <div className="cursor-pointer">
                <a href={url}>
                  <i className="bx bxl-github text-xl hover:text-textdark2 duration-200"></i>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href={details_url}>
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
          <ProjectBox st_title={"Nio"} nd_title={"Nime"} desc={"Anime streaming web without ads, with administration system and allows user subscribtion with several benefits"} url={"https://github.com/Nioka666/NioNime"} st_tech={"React.js"} nd_tech={"ExpressJS"} details_url={"/projects/nio-nime"} />

          <ProjectBox st_title={"Nio"} nd_title={"Libs"} desc={"Dynamic library website with fresh look and administration support"} url={"https://github.com/Nioka666/NioLibs"} st_tech={"React.js"} nd_tech={"ExpressJS"} details_url={"/projects/nio-libs"} />

          <ProjectBox st_title={"N"} nd_title={"Quiz"} desc={"A Simple mobile/android-based quiz app, with a fresh look and fun quiz content"} url={"https://github.com/Nioka666/NQuiz"} st_tech={"Java"} nd_tech={"Kotlin"} details_url={"/projects/n-quiz"} />
          <div className="card bg-nioprimary dark:bg-niodark max-sm:w-full sm:w-[410px] text-center h-36 md:h-72 mb-14">
            <div className="my-auto md:mt-20">
              <i className="bx bxs-ghost text-9xl max-sm:text-[110px] text-gray-300 dark:text-textdark5 max-md:hidden"></i>
              <h1 className="text-xl md:text-3xl mt-5 text-gray-400 md:text-gray-300 dark:text-textdark5 font-semibold">What's next?</h1>
              <p className="text-base max-sm:text-sm text-gray-400 md:text-gray-300 dark:text-textdark5 ">perhaps the next idea is yours!</p>
            </div>
          </div>
          {/* <div className="card bg-nioprimary dark:bg-niodark max-sm:w-full sm:w-[410px] text-center h-80">
            <div className="my-auto">
              <i className="bx bxs-ghost text-9xl max-sm:text-[110px] text-gray-300 dark:text-textdark5"></i>
              <h1 className="text-xl md:text-3xl mt-5 text-gray-300 dark:text-textdark5 font-bold">What's next?</h1>
              <p className="text-base max-sm:text-sm text-gray-300 dark:text-textdark5 underline">Let's collaborate w/ me</p>
            </div>
          </div> */}
        </section>
      </section>
    </>
  );
}

export default Projects;
