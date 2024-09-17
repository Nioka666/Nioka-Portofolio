import { useState } from "react";
import Educations from "./Educations";
import Experiences from "./Experiences";
import PartTitle from "./PartTitle";

function Qualification() {
  const [activeMenu, setActiveMenu] = useState(1);
  const PartButton = ({ children, stateActiveMenu }) => {
    return (
      <button
        role="button"
        className={`flex items-center gap-2 rounded-xl border-b-2 bg-transparent bg-white px-[17px] py-[14px] text-xl max-sm:text-[13px] md:px-7 md:py-[18px] md:text-[17px] ${activeMenu === stateActiveMenu ? "text-black" : "text-gray-400"}`}
        onClick={() => setActiveMenu(stateActiveMenu)}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <section id="qualification" className="qualifications-component">
        <PartTitle title={"Qualifications"} desc={"My Journey's"} />
        <section className="qualifications-btn-group">
          <PartButton stateActiveMenu={1}>
            <i className="bx bxs-graduation text-[26px] max-sm:text-[24px]"></i>{" "}
            Educations
          </PartButton>
          <PartButton stateActiveMenu={2}>
            <i className="bx bxs-briefcase text-[21px] max-sm:text-[19px]"></i>
            Experiences
          </PartButton>
        </section>
        {/* content */}
        <section className="max-sm:mx-0 sm:mx-2">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </section>
    </>
  );
}

export default Qualification;
