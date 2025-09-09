import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const Education = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
        <IoSchoolOutline className="text-indigo-500" />
        {props.language === "EN" ? "Education" : "Pendidikan"}
      </h3>
      <div className="space-y-3 md:space-y-4">
        <div>
          <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{props.language === "EN" ? "Bachelor of Informatic Engineering" : "S1 Teknik Informatika"}</h4>
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base">Universitas Indraprasta PGRI</p>
          <div className="flex items-center gap-2 mt-2">
            <CiCalendarDate className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">September 2023 - {props.language === "EN" ? "Present" : "Sekarang"}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>
              {props.language === "EN"
                ? "Developed an information system project by creating a company website as part of the Information Systems course."
                : "Mengerjakan project mata kuliah Sistem Informasi dengan membuat website yang bermanfaat bagi suatu perusahaan."}
            </span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{props.language === "EN" ? "Participated in GEMASTIK competition, Programming Division." : "Mengikuti lomba GEMASTIK divisi Pemrograman."}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{props.language === "EN" ? "Joining the BELAJAR BARENG community created by students" : "Bergabung dengan komunitas BELAJAR BARENG yang dibuat oleh beberapa mahasiswa"}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{props.language === "EN" ? "Organized a seminar at a school about the impact of social media usage." : "Mengadakan seminar di sekolah mengenai dampak penggunaan media sosial."}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{props.language === "EN" ? "Completing project-based curriculum assignments" : "Mengerjakan Tugas Mata Kuliah Wajib Kurikulum Berbasis Proyek"}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{props.language === "EN" ? "Achieved GPA of 3.64/4.00." : "Mendapatkan IPK 3.64/4.00."}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
