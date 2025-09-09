import { IoPersonOutline } from "react-icons/io5";
import { TbBracketsAngle } from "react-icons/tb";
import { FiAward } from "react-icons/fi";
import { MdOutlineWorkHistory, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <div className="border-t border-t-gray-200/50 dark:border-t-gray-900/50 p-3 md:p-4">
      <div className="flex justify-center">
        <div className="flex gap-1 md:gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-1 md:p-2 backdrop-blur-sm overflow-x-auto scrollbar-hide">
          <button
            onClick={() => {
              navigate("/");
              props.setPages("about");
            }}
            className={`${
              props.pages === "about" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            } flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px]`}
          >
            <IoPersonOutline />
            <span className="text-xs md:text-sm">{props.language === "EN" ? "About" : "Tentang"}</span>
          </button>
          <button
            onClick={() => {
              navigate("/projects");
              props.setPages("projects");
            }}
            className={`${
              props.pages === "projects" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            } flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px]`}
          >
            <TbBracketsAngle />
            <span className="text-xs md:text-sm">{props.language === "EN" ? "Projects" : "Proyek"}</span>
          </button>
          <button
            onClick={() => {
              navigate("/skills");
              props.setPages("skills");
            }}
            className={`${
              props.pages === "skills" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            } flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px]`}
          >
            <FiAward />
            <span className="text-xs md:text-sm">{props.language === "EN" ? "Skills" : "Keahlian"}</span>
          </button>
          <button
            onClick={() => {
              navigate("/experience");
              props.setPages("experience");
            }}
            className={`${
              props.pages === "experience" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            } flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px]`}
          >
            <MdOutlineWorkHistory />
            <span className="text-xs md:text-sm">{props.language === "EN" ? "Experience" : "Pengalaman"}</span>
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              props.setPages("contact");
            }}
            className={`${
              props.pages === "contact" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            } flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px]`}
          >
            <MdOutlineEmail />
            <span className="text-xs md:text-sm">{props.language === "EN" ? "Contact" : "Kontak"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
