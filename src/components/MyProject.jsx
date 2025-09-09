import React from "react";
import { RiShareBoxFill } from "react-icons/ri";

const MyProject = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={props.img} alt={props.title} className="w-full h-32 md:h-52 object-cover object-top rounded-l-xl" />
        </div>
        <div className="flex-1 p-4 md:p-6">
          <div className="flex justify-between items-start mb-2 md:mb-3">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-2">{props.title}</h3>
            <a href={props.linkProject} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors flex-shrink-0">
              <RiShareBoxFill className="lucide lucide-external-link w-3 h-3 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{props.description}</p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {props.techs.map((tech, index) => (
              <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
