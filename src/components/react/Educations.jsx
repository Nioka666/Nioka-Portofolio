// Educations
function Educations() {
  return (
    <>
      <section className="max-md:mt-10 max-md:px-8 max-sm:mt-8 lg:mt-10">
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:timeline-start max-md:ms-3 md:mb-10 md:me-5 md:text-end">
              <time className="font-mono italic">2024 - Present</time>
              <div className="text-lg font-bold max-sm:text-base">
                Politeknik Elektronika Negeri Surabaya
              </div>
              Associate's degree <br />
              Informatics Engineering <br /> <br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end max-md:ms-3 md:ms-5 lg:mb-10">
              <time className="font-mono italic">2021 - 2024</time>
              <div className="text-lg font-bold max-sm:text-base">
                SMK Negeri 2 Mojokerto
              </div>
              Software Engineering <br />
              <br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:timeline-start max-md:ms-3 md:me-5 md:text-end">
              <time className="font-mono italic">2019 - 2021</time>
              <div className="text-lg font-bold max-sm:text-base">
                SMP Negeri 1 Jetis
              </div>
              General Student
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Educations;