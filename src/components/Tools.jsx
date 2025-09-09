import React from "react";
import { TbTool } from "react-icons/tb";
import SkillToolBox from "./SkillToolBox";

const Tools = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
        <TbTool className="dark:text-orange-600" />
        {props.titleTool}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        <SkillToolBox img={"/assets/social.png"} name={"Git & GItHub"} />
        <SkillToolBox img={"/assets/postman.png"} name={"Postman"} />
        <SkillToolBox img={"/assets/cloud-api.png"} name={"Rest API"} />
        <SkillToolBox img={"/assets/docker.png"} name={"Docker (Basic)"} />
        <SkillToolBox img={"/assets/aws.png"} name={"AWS (Basic)"} />
        <SkillToolBox img={"/assets/apple.png"} name={"Mac & Linux"} />
      </div>
    </div>
  );
};

export default Tools;
