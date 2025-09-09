import React from "react";
import { TbCertificate } from "react-icons/tb";

const Certifications = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
        <TbCertificate className="text-purple-600" />
        {props.language === "EN" ? "Certifications" : "Sertifikasi"}
      </h3>
      <div className="space-y-2 md:space-y-3">
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">
            <img src="/assets/waskita.png" className="w-10 h-10 md:w-12 md:h-12" alt="waskita" />
          </span>
          <div className="flex-1">
            <div className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">Certificate of Competency Assesment Accounting</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">2023</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">
            <img src="/assets/dicoding.png" className="w-10 h-10 md:w-12 md:h-12" alt="dicoding" />
          </span>
          <div className="flex-1">
            <div className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">Front-End Web</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">2024</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">
            <img src="/assets/udemy.png" className="w-10 h-10 md:w-12 md:h-12" alt="udemy" />
          </span>
          <div className="flex-1">
            <div className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">Web Developer Bootcamp Udemy</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">2024</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">
            <img src="/assets/dicoding.png" className="w-10 h-10 md:w-12 md:h-12" alt="dicoding" />
          </span>
          <div className="flex-1">
            <div className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">Back-End dengan JavaScript</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">2025</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
          <span className="text-lg md:text-xl">
            <img src="/assets/dicoding.png" className="w-10 h-10 md:w-12 md:h-12" alt="dicoding" />
          </span>
          <div className="flex-1">
            <div className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">Cloud Basic & Gen AI di AWS</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
