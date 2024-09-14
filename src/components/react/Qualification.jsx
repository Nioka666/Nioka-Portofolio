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
        <PartTitle
          title={"Qualifications"}
          desc={"My Education & Experience Journey"}
        />
        {/* switch button */}
        <section className="mt-16 flex justify-center gap-10 font-medium max-sm:mt-14">
          <button
            role="button"
            title="button"
            className={`flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 1 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(1)}
          >
            <i className="bx bxs-graduation text-[27px]"></i> Educations
          </button>
          <button
            role="button"
            title="button"
            className={`flex items-center gap-2 bg-transparent text-xl max-sm:text-sm ${activeMenu === 2 ? "text-black" : "text-gray-400"}`}
            onClick={() => setActiveMenu(2)}
          >
            <i className="bx bxs-briefcase text-[23px]"></i>Experiences
          </button>
        </section>
        {/* end of header */}

        {/* content */}
        <section className="max-sm:mx-3 sm:mx-2">
          {activeMenu === 1 ? <Educations /> : <Experiences />}
        </section>
      </section>
    </>
  );
}

export default Qualification;
