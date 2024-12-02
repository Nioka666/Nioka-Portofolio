function ProjectDetails({ url, slug, title, banner_img, date, p1, p2, p3, github_url }) {
    return (
        <>
            <section className="navigation mt-[-20px] flex justify-between px-[22px] max-sm:mt-[-40px]">
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <a href="/#projects">Projects</a>
                        </li>
                        <li>
                            <a href={`/projects/${url}`}>{slug}</a>
                        </li>
                    </ul>
                </div>
                <div className="blank"></div>
            </section>
            <section className="project-details-component mt-6 px-5">
                <header className="grid gap-7">
                    <h1 className="text-5xl max-sm:text-[33px] max-sm:leading-[38px] font-semibold dark:text-textdark3">{title}</h1>
                    <span className="text-gray-500 max-sm:text-sm max-sm:mt-[-10px]">Last update {date}</span>
                    <div className="rectangle skeleton w-full h-[200px] max-sm:h-[180px] bg-gray-200 dark:bg-niodark3 rounded-xl"></div>
                    {/* <img src={banner_img.src} alt="" className="w-full h-[200px] rounded-xl" /> */}
                </header>
                <article className="mt-12 max-sm:mt-8 text-left text-[14.8px] sm:text-[17px] [word-spacing:5px] max-sm:[word-spacing:2.5px] leading-[26.5px] text-textdark5 dark:text-textdark4 max-sm:px-[1px]">
                    <p>
                        {p1}
                    </p>
                    <br />
                    <p>
                        {p2}
                    </p>
                    <br />
                    <p>
                        {p3}
                    </p>
                    <br /><br />
                    <p>Author : {" "}
                        <a href="/" className="underline">
                            Adhim Niokagi
                        </a>
                    </p>
                </article>
                <hr className="border mt-10 dark:border-borderbtm" />
                <div className="mt-10 h-40 w-full flex justify-between">
                    <a href="/">
                        <button className="bg-gray-100 dark:bg-niodark3 dark:text-textdark4 px-6 py-3 rounded-xl max-sm:rounded-lg flex items-center gap-2 max-sm:text-sm">
                            <i className="bx bx-arrow-back"></i>
                            Back Home
                        </button>
                    </a>
                    <a href={github_url}>
                        <button className="bg-gray-100 dark:bg-niodark3 dark:text-textdark4 px-6 py-3 rounded-xl max-sm:rounded-lg flex items-center gap-2 max-sm:text-sm">
                            <i className="bx bxl-github"></i>
                            Github
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default ProjectDetails;
