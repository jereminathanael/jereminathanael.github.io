import React from "react";

const SkillToolBox = (props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
      <img src={props.img} alt={props.name} className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
      <span className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{props.name}</span>
    </div>
  );
};

export default SkillToolBox;
