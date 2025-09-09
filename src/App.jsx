import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [pages, setPages] = useState("about");

  // ambil preferensi dari local storage pada saat pertama kali render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const savedPages = localStorage.getItem("pages");
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    if (savedPages) setPages(savedPages);
  }, []);

  // update dark mode setiap ada perubahan
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("pages", pages);
  }, [pages]);

  return (
    <div className={`flex justify-center items-center min-h-screen bg-slate-100 bg-gradient-to-br dark:from-gradient-from dark:via-teal-400 dark:to-gradient-to transition-colors duration-200 ease-in-out p-3 md:p-4`}>
      <div className="bg-white dark:bg-gray-900/80 shadow-xl rounded-3xl w-full max-w-6xl flex flex-col border border-gray-200/50 dark:border-gray-900/50 transition-colors duration-300 ease-in-out">
        {/* Header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />

        {/* Main */}
        <Router>
          <Routes>
            <Route path="/" element={<Home language={language} darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/skills" element={<Skills language={language} />} />
            <Route path="/experience" element={<Experience language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            {/* random path */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>

        {/* Footer */}
        <Footer language={language} pages={pages} setPages={setPages} />
      </div>
    </div>
  );
}

export default App;
