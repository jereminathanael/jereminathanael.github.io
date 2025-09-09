import React from "react";
import { TbBracketsAngle } from "react-icons/tb";
import SkillToolBox from "./SkillToolBox";

const SkillTool = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
        <TbBracketsAngle className="dark:text-blue-500" />
        {props.titleSkillTool}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        <SkillToolBox img={"/assets/html.png"} name={"HTML"} />
        <SkillToolBox img={"/assets/css-3.png"} name={"CSS"} />
        <SkillToolBox img={"/assets/js.png"} name={"JavaScript"} />
        <SkillToolBox img={"/assets/science.png"} name={"React JS"} />
        <SkillToolBox img={"/assets/node-js.png"} name={"Node JS"} />
        <SkillToolBox img={"/assets/sql.png"} name={"SQL"} />
        <SkillToolBox img={"/assets/laravel-3.svg"} name={"Laravel"} />
        <SkillToolBox img={"/assets/java.png"} name={"Java"} />
      </div>
    </div>
  );
};

export default SkillTool;
