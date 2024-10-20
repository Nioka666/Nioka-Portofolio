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
        className={`flex items-center gap-2 rounded-xl border-b-2 dark:border-borderbtm bg-transparent bg-white dark:bg-niodark3 px-[20px] py-[12px] text-xl max-sm:text-[13px] md:px-9 md:py-[18px] md:text-[17px] ${activeMenu === stateActiveMenu ? "text-gray-400 dark:text-textdark2 border-none" : " text-black dark:text-textdark"}`}
        onClick={() => setActiveMenu(stateActiveMenu)}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <section id="qualification" className="qualifications-component">
        <PartTitle title={"education_and_experience"} desc={"My Edu and Experience Journey"} />
        <section className="qualifications-btn-group">
          <PartButton stateActiveMenu={1}>
            <i className="bx bxs-graduation text-[25px] max-sm:text-[20px]"></i>{" "}
            Educations
          </PartButton>
          <PartButton stateActiveMenu={2}>
            <i className="bx bxs-briefcase text-[21px] max-sm:text-[18px]"></i>
            Experiences
          </PartButton>
        </section>
        {/* content */}
        <section className="max-md:mt-10 max-md:px-8 max-sm:mt-10 lg:mt-16 max-sm:mx-0 sm:mx-2">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </section>
    </>
  );
}

export default Qualification;
