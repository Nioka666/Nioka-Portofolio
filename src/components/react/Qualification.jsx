import { useState } from "react";
import Educations from "./Educations";
import Experiences from "./Experiences";

function Qualification() {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <>
      <div id="qualification" className="mt-16 py-10 max-sm:mt-16 h-[700px]">
        <section className="text-center">
          <h1 className="text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
            Qualifications
          </h1>
          <h3 className="mt-2 text-sm text-gray-500 md:text-[17px]">
            My Journey
          </h3>
        </section>
        {/* switch button */}
        <section className="mt-16 flex justify-center gap-10 max-sm:mt-14">
          <button
            className={`flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 1 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(1)}
          >
            <i className="bx bxs-graduation text-[30px]"></i> Educations
          </button>
          <button
            className={`flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 2 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(2)}
          >
            <i className="bx bxs-briefcase text-[24px]"></i>Experiences
          </button>
        </section>
        {/* result */}
        <section className="max-sm:mx-4 sm:mx-2">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </div>
    </>
  );
}

export default Qualification;
