import React from "react";
import { BsPersonVideo3 } from "react-icons/bs";

const SoftSkill = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
        <BsPersonVideo3 className="text-green-600" />
        {props.language === "EN" ? "Soft Skills" : "Keterampilan Non-Teknis"}
      </h3>
      <div className="space-y-2 md:space-y-3">
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">⏰</span>
          <span className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{props.language === "EN" ? "Time Management" : "Manajemen Waktu"}</span>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">🚀</span>
          <span className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{props.language === "EN" ? "Quick Adaptation" : "Adaptasi Cepat"}</span>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">🧠</span>
          <span className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{props.language === "EN" ? "Problem Solving" : "Pemecahan Masalah"}</span>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">🤝</span>
          <span className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{props.language === "EN" ? "Communication & Teamwork" : "Komunikasi & Kerjasama Tim"}</span>
        </div>
      </div>
    </div>
  );
};

export default SoftSkill;
