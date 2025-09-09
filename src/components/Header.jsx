import { LuMoon, LuSun } from "react-icons/lu";

const Header = ({ darkMode, setDarkMode, language, setLanguage }) => {
  return (
    <div className="flex justify-between items-center p-4 md:p-6 border-b border-b-gray-200/50 dark:border-gray-900/50 transition-colors duration-500 ease-in-out">
      <div className="flex items-center gap-3 text-sm md:text-base font-bold">
        <div className="p-2 bg-gradient-to-br from-gradient-from to-gradient-to text-white rounded-xl">JN</div>
        <p className="dark:text-white">Portfolio</p>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <button onClick={() => setLanguage("EN")} className={`${language === "EN" ? "bg-white dark:bg-gray-600 dark:text-white" : "dark:text-gray-400"} px-3 py-[2px] rounded-md`}>
            EN
          </button>
          <button onClick={() => setLanguage("ID")} className={`${language === "ID" ? "bg-white dark:bg-gray-600 dark:text-white" : "dark:text-gray-400"} px-3 py-[2px] rounded-md`}>
            ID
          </button>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700 rounded-lg transition-colors">
          {darkMode ? <LuSun color="white" /> : <LuMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
