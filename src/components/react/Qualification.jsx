import { useState } from "react";
import Educations from "./Educations";
import Experiences from "./Experiences";
import PartTitle from "./PartTitle";

function Qualification() {
  const [activeMenu, setActiveMenu] = useState(1);
  const switchButton = () => {
    return <></>;
  };

  return (
    <>
      <section id="qualification" className="mt-10 h-[700px] py-10 max-sm:mt-1">
        {/* header/title */}
        <PartTitle title={"Qualifications"} desc={"My Journey's"} />
        {/* switch button */}
        <section className="mt-16 flex justify-center gap-3 font-medium max-sm:mt-12 md:gap-8">
          <button
            role="button"
            className={`flex items-center gap-2 rounded-xl border-b-2 bg-transparent bg-white px-4 py-[15px] text-xl max-sm:text-[13px] md:px-7 md:py-5 md:text-[17px] ${activeMenu === 1 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(1)}
          >
            <i className="bx bxs-graduation text-[26px] max-sm:text-[24px]"></i>{" "}
            Educations
          </button>
          <button
            role="button"
            className={`flex items-center gap-2 rounded-xl border-b-2 bg-transparent bg-white px-4 py-[15px] text-xl max-sm:text-[13px] md:px-7 md:py-5 md:text-[17px] ${activeMenu === 2 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(2)}
          >
            <i className="bx bxs-briefcase text-[21px] max-sm:text-[19px]"></i>
            Experiences
          </button>
        </section>
        {/* end of header */}

        {/* content */}
        <section className="max-sm:mx-0 sm:mx-2">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </section>
    </>
  );
}

export default Qualification;
