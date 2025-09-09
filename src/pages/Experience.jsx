import React from "react";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import { MdOutlineWorkHistory } from "react-icons/md";

const Experience = (props) => {
  return (
    <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">{props.language === "EN" ? "Experience & Education" : "Pengalaman & Pendidikan"}</h2>
        <div className="space-y-3 md:space-y-4 max-h-[400px] md:max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
          <Education language={props.language} />
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
              <MdOutlineWorkHistory className="w-5 h-5 text-blue-500" />
              {props.language === "EN" ? "Work Experience" : "Pengalaman Kerja"}
            </h3>
            <div className="space-y-4 md:space-y-6">
              <WorkExperience
                language={props.language}
                title={`${props.language === "EN" ? "Full-Stack Web Developer (Internship)" : "Pengembang Full-Stack Situs Web (Magang)"}`}
                company={"Soko Financial"}
                startAt={`${props.language === "EN" ? "January 2025" : "Januari 2025"}`}
                endAt={"April 2025"}
                location={"Remote"}
                text1={`${props.language === "EN" ? "Fix bugs from previous batch." : "Memperbaiki bug dari batch sebelumnya."}`}
                text2={`${props.language === "EN" ? "Create a seminar talkshow registration feature and integrate it into the admin dashboard." : "Membuat fitur pendaftaran seminar talkshow beserta integrasinya ke dashboard admin."}`}
                text3={`${props.language === "EN" ? "Add a new table in the database." : "Menambahkan tabel baru di basis data."}`}
                text4={`${props.language === "EN" ? "Connecting data with the front-end." : "Menghubungkan data dengan front-end."}`}
                text5={`${props.language === "EN" ? "Assisting the front-end team to implement new designs to the Website." : "Membantu tim front-end untuk mengimplementasikan design baru ke Website."}`}
              />
              <WorkExperience
                language={props.language}
                title={`${props.language === "EN" ? "Finance Staff (Internship)" : "Staff Keuangan (Magang)"}`}
                company={"PT Bukaka Teknik Utama, tbk"}
                startAt={`${props.language === "EN" ? "January 2022" : "Januari 2022"}`}
                endAt={`${props.language === "EN" ? "March 2022" : "Maret 2022"}`}
                location={`${props.language === "EN" ? "Bogor Regency" : "Kabupaten Bogor"}`}
                text1={`${props.language === "EN" ? "Assisted in recording daily financial transactions into the company’s accounting system." : "Membantu pencatatan transaksi harian ke dalam sistem keuangan perusahaan."}`}
                text2={`${props.language === "EN" ? "Performed petty cash and bank reconciliation regularly." : "Melakukan rekonsiliasi kas kecil dan laporan bank secara berkala."}`}
                text3={`${props.language === "EN" ? "Supported the preparation of monthly financial reports." : "Mendukung proses pembuatan laporan keuangan bulanan."}`}
                text4={`${props.language === "EN" ? "Assisted in verifying expense and revenue documents." : "Membantu dalam verifikasi dokumen pengeluaran dan pemasukan."}`}
                text5={`${props.language === "EN" ? "Organized financial documents and maintained proper filing." : "Menyusun arsip dokumen keuangan secara rapi dan terstruktur."}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
