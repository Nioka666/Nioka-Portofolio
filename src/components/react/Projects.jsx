import PartTitle from "./PartTitle";

function Projects() {
  function ProjectBox({ st_title, nd_title }) {
    return (<>
      <div className="card bg-base-100 max-sm:w-full sm:w-[410px] border">
        <div className="card-body text-left">
          <h1 className="text-6xl sm:text-7xl">{st_title} <br /> {nd_title}</h1>
          <div className="tag flex gap-2 mt-2">
            <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">Javascript</span>
            <span className="bg-gray-100 dark:bg-niodark2 px-3 py-1 text-xs rounded-md">ExpressJS</span>
          </div>
          <p className="mt-4 text-[13px] font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Esse labore dolorum qui eius officiis</p>
          {/* <div className="mt-8 flex justify-between w-full">
            <div className="cursor-pointer">
              <i className="bx bxl-github text-xl"></i>
            </div>
            <div className="cursor-pointer">
              <i className="bx bx-arrow-back rotate-180 text-xl"></i>
            </div>
          </div> */}
        </div>
      </div>
    </>)
  }

  return (
    <>
      <section id="projects" className="projects-component">
        <PartTitle title={"my_projects"} num={"003"}/>
        <section className="mt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-5 lg:gap-5 max-sm:px-5 lg:mt-16">
          <ProjectBox st_title={"Nio"} nd_title={"Nime"} />
          <ProjectBox st_title={"Nio"} nd_title={"Libs"} />
          <div class="card bg-nioprimary max-sm:w-full sm:w-[410px] text-center h-96">
            <div class="my-auto">
              <i class="bx bxs-ghost text-9xl text-gray-300"></i>
              <h1 class="text-2xl md:text-3xl mt-5 text-gray-300 font-bold">What's next?</h1>
              <p class="text-base text-gray-300">Let's collaborate w/ me</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
