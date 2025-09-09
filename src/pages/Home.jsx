import jeremi from "../assets/jeremi.jpg";
import { ReactTyped } from "react-typed";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuInstagram } from "react-icons/lu";

const Home = (props) => {
  return (
    <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
      <div className="space-y-4 md:space-y-6">
        <div className="text-center space-y-3 md:space-y-4">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 ">
            <img src={jeremi} alt="Jeremia Nathanael Bagiono" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            <span className="inline-block">Jeremia</span> <span className="inline-block bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent ">Nathanael</span> <span className="inline-block">Bagiono</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium">{props.language === "EN" ? "Available for work" : "Tersedia untuk bekerja"}</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <ReactTyped strings={["Web Developer", "Back End Engineer", "Progammer", "Informatic Engineering Student"]} typeSpeed={50} backSpeed={30} backDelay={1500} loop />
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            {props.language === "EN"
              ? "Informatics Engineering student at Universitas Indraprasta PGRI with a strong interest in software development and backend engineering. Passionate about technology and problem solving, with experience in web development (personal projects and an internship at Soko Financial as a Fullstack Web Developer) and information systems."
              : "Mahasiswa Teknik Informatika Universitas Indraprasta PGRI dengan minat pada software development dan backend engineering. Passionate terhadap teknologi dan problem solving, serta memiliki pengalaman dalam pengembangan web (project mandiri dan internship di Soko Financial sebagai Fullstack Web Developer) dan sistem informasi."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            href="/CV_JeremiaNathanaelB.pdf"
            download={"Jeremia_Nathanae_Bagiono_CV.pdf"}
            className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-gradient-to-r from-gradient-from to-gradient-to hover:from-teal-600 hover:to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
          >
            <MdOutlineFileDownload fontSize={"1.5rem"} />
            {props.language === "EN" ? "Download CV" : "Unduh CV"}
          </a>
          <div className="flex gap-2 md:gap-3 justify-center items-center">
            <a href="https://github.com/jereminathanael" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300">
              <FiGithub fontSize={"1.1rem"} className="dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeremia-nathanael-bagiono-06a336283/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300"
            >
              <LuLinkedin fontSize={"1.1rem"} className="dark:text-white" />
            </a>
            <a href="https://www.instagram.com/jereminathanael/" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300">
              <LuInstagram fontSize={"1.1rem"} className="dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
