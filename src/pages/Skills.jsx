import React from "react";
import SkillTool from "../components/SkillTool";
import SoftSkill from "../components/SoftSkill";
import Tools from "../components/Tools";
import Certifications from "../components/Certifications";

const Skills = (props) => {
  return (
    <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">{props.language === "EN" ? "Skills & Expertise" : "Keterampilan & Keahlian"}</h2>
        <div className="space-y-4 md:space-y-6 max-h-[400px] md:max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
          <SkillTool titleSkillTool={`${props.language === "EN" ? "Technical Skills" : "Keterampilan Teknis"}`} />
          <SoftSkill language={props.language} />
          <Tools titleTool={`${props.language === "EN" ? "System & Tools" : "Sistem & Tools"}`} />
          <Certifications language={props.language} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
