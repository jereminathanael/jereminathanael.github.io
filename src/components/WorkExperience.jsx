import React from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";

const WorkExperience = (props) => {
  return (
    <div className="border-l-2 border-blue-500/30 pl-4 md:pl-6 pb-4 md:pb-6">
      <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{props.title}</h4>
      <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base font-medium">
        {props.company}
        <span></span>
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 mb-3">
        <div className="flex items-center gap-2">
          <CiCalendarDate className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
          <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
            {props.startAt} - {props.endAt}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
          <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{props.location}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="leading-relaxed">{props.text1}</span>
        </div>
        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="leading-relaxed">{props.text2}</span>
        </div>
        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="leading-relaxed">{props.text3}</span>
        </div>
        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="leading-relaxed">{props.text4}</span>
        </div>
        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="leading-relaxed">{props.text5}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
