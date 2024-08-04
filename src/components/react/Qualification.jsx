import { useState } from "react";
import Educations from "./Educations";
import Experiences from "./Experiences";

function Qualification() {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <>
      <div className="mt-36">
        <section className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
            Qualifications
          </h1>
          <h3 className="text-sm md:text-[17px] text-gray-500 mt-2">
            My Journey
          </h3>
        </section>
        {/* switch button */}
        <section className="flex justify-center gap-10 mt-20">
          <button
            className={`bg-transparent max-sm:text-base text-xl flex gap-2 items-center ${activeMenu === 1 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(1)}
          >
            <i class="bx bxs-graduation text-[30px]"></i> Educations
          </button>
          <button
            className={`bg-transparent max-sm:text-base text-xl flex gap-2 items-center ${activeMenu === 2 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(2)}
          >
            <i class="bx bxs-briefcase text-[24px]"></i>Experiences
          </button>
        </section>
        {/* result */}
        <section className="mt-10">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </div>
    </>
  );
}

export default Qualification;
