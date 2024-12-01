import PartTitle from "./PartTitle";

function Journey() {
  return (
    <>
      <section id="journey" className="journey-component">
        <PartTitle title={"my_journey"} num={"002"} />

        <section className="max-lg:mt-10 max-md:px-6 max-sm:mt-10 lg:mt-16 max-sm:mx-0">
          <div role="tablist" className="tabs tabs-lifted tabs-lg">
            <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-base dark:[--tab-bg:#161617] dark:[--tab-border-color:#434346] dark:text-textdark2" aria-label="Educations"
              defaultChecked />
            <div role="tabpanel" className="tab-content bg-white border-base-300 rounded-box p-6 pt-8 dark:bg-niodark4 dark:border-borderbtm">
              <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical sm:px-3">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="h-5 w-5">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">2019 - 2021</time>
                    <div className="text-lg font-bold mt-1">SMP Negeri 1 Jetis </div>
                    <p className="mb-5 dark:text-textdark4">Regular Student</p>
                  </div>
                  <hr className="dark:bg-textdark2" />
                </li>
                <li>
                  <hr className="dark:bg-textdark2" />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="h-5 w-5">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">2021 - 2024</time>
                    <div className="text-lg font-bold mt-1">SMK Negeri 2 Mojokerto</div>
                    <p className="mb-5 dark:text-textdark4">Software Engineering</p>
                  </div>
                  <hr className="dark:bg-textdark2" />
                </li>
                <li>
                  <hr className="dark:bg-textdark2" />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="h-5 w-5">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">2024 - Present</time>
                    <div className="text-lg font-bold mt-1">Electronic Engineering Polytechnic Institute of
                      Surabaya</div>
                    <p className="mb-5 dark:text-textdark4">Associate's degree - Informatics Engineering</p>
                  </div>
                </li>
              </ul>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-base  dark:[--tab-bg:#161617] dark:[--tab-border-color:#434346] dark:text-textdark2" aria-label="journey" />
            <div role="tabpanel" className="tab-content bg-white border-base-300 dark:bg-niodark4 dark:border-borderbtm rounded-box p-6 pt-8">
              <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical sm:px-3">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="h-5 w-5">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">Nov 2023 - Present</time>
                    <div className="text-lg font-semibold mt-1">Remote Freelance (self employed)</div>
                    <p className="mb-5 dark:text-textdark4">Front-End Web Developer</p>
                  </div>
                  <hr className="dark:bg-textdark2" />
                </li>
                <li>
                  <hr className="dark:bg-textdark2" />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="h-5 w-5">
                      <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">Jul 2022 - Dec 2023</time>
                    <div className="text-lg font-semibold mt-1">ATR/BPN - Kantor Pertanahan Kota Mojokerto</div>
                    <p className="mb-5 dark:text-textdark4">Student Intern</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Journey;
