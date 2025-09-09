import React from "react";

const ContactBox = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 md:gap-4">
        <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${props.fromColor} ${props.toColor} shadow-lg`}>{props.logo}</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base"> {props.title} </h4>
          <a
            href={props.linkContact}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium text-xs md:text-sm break-all"
          >
            {props.description}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
