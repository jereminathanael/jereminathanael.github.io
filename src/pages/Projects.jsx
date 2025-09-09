import MyProject from "../components/MyProject";

const Projects = (props) => {
  return (
    <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">{props.language === "EN" ? "Featured Projects" : "Proyek Unggulan"}</h2>
        <div className="grid gap-3 md:gap-4 max-h-[400px] md:max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
          <MyProject
            img={"/assets/keeper-reactJs.png"}
            title={"Notes Keeper APP React"}
            linkProject={"https://jereminathanael.github.io/Keeper-ReactJS/"}
            description={`${
              props.language === "EN"
                ? "This project is a simple note-taking web application inspired by Google Keeper, built using React.js. The application allows users to add notes, delete notes and responsive UI."
                : "Proyek ini adalah aplikasi web pencatatan sederhana yang terinspirasi oleh Google Keeper, dibangun menggunakan React.js. Aplikasi ini memungkinkan pengguna untuk menambahkan catatan, menghapus catatan, dan menggunakan UI responsif."
            }`}
            techs={["React", "CSS", "Notes"]}
          />
          <MyProject
            img={"/assets/GBI-HC-Bootstrap.png"}
            title={"GBI Harvest City With Bootstrap"}
            linkProject={"https://jereminathanael.github.io/GBI-Harvest-City-2/index.html"}
            description={`${
              props.language === "EN"
                ? "This project is a modern and responsive website for Gereja Bethel Indonesia Harvest City. It consists of 12 pages built using HTML, CSS, Bootstrap, and SCSS to provide an engaging and user-friendly interface."
                : "Proyek ini adalah situs web modern dan responsif untuk Gereja Bethel Indonesia Harvest City. Situs ini terdiri dari 12 halaman yang dibangun menggunakan HTML, CSS, Bootstrap, dan SCSS untuk menyediakan antarmuka yang menarik dan ramah pengguna."
            }`}
            techs={["HTML", "Bootstrap", "Interactive"]}
          />
          <MyProject
            img={"/assets/GBI-HC-NativeCSS.png"}
            title={"GBI Harvest City"}
            linkProject={"https://jereminathanael.github.io/GBI-Harvest-City/"}
            description={`${
              props.language === "EN"
                ? "The GBI Harvest City website is a static website built using HTML, native CSS and JavaScript without framework to represent and promote Gereja Bethel Indonesia (GBI) Harvest City. The website serves as a digital platform for the church, showcasing important information."
                : "Situs web GBI Harvest City adalah situs web statis yang dibangun menggunakan HTML, CSS asli, dan JavaScript tanpa kerangka kerja untuk merepresentasikan dan mempromosikan Gereja Bethel Indonesia (GBI) Harvest City. Situs web ini berfungsi sebagai platform digital bagi gereja, menampilkan informasi penting."
            }`}
            techs={["HTML", "Native CSS", "JavaScript"]}
          />
          <MyProject
            img={"/assets/kopi-kenangan-kita.png"}
            title={"Website Kopi Kenangan Kita"}
            linkProject={"https://jereminathanael.github.io/website-kopi-kenangankita/"}
            description={`${
              props.language === "EN"
                ? "Kenangan Kita is a responsive coffee shop website built using native HTML and CSS, enhanced with CSS masking for stylish visual effects. The site delivers an engaging and modern user experience across all devices. It features a user-friendly shopping interface, allowing customers to explore the menu and products easily."
                : "Kenangan Kita adalah situs web kedai kopi responsif yang dibangun menggunakan HTML dan CSS asli, disempurnakan dengan masking CSS untuk efek visual yang stylish. Situs ini menghadirkan pengalaman pengguna yang menarik dan modern di semua perangkat. Antarmuka belanjanya pun ramah pengguna, sehingga pelanggan dapat menjelajahi menu dan produk dengan mudah."
            }`}
            techs={["HTML", "Midtrans", "Company Profile"]}
          />
          <MyProject
            img={"/assets/blog-web-app-j.png"}
            title={"Blog Web APP J"}
            linkProject={"https://github.com/jereminathanael/blog-web-app-j"}
            description={`${
              props.language === "EN"
                ? "The Blog Web App J is a dynamic blog application built using server-side technologies. It leverages Node.js and Express.js for the backend framework, allowing for efficient handling of HTTP requests and routing with middleware. The application uses EJS as the templating engine."
                : "Blog Web App J adalah aplikasi blog dinamis yang dibangun menggunakan teknologi sisi server. Aplikasi ini memanfaatkan Node.js dan Express.js sebagai kerangka kerja backend, memungkinkan penanganan permintaan HTTP dan perutean yang efisien dengan middleware."
            }`}
            techs={["Node JS", "Embedded JS", "Blog"]}
          />
          <MyProject
            img={"/assets/TodoList-project.png"}
            title={"To Do List with RDBMS"}
            linkProject={"https://github.com/jereminathanael/ToDo-List"}
            description={`${
              props.language === "EN"
                ? "The TODO List Application with RDBMS (Relational Database Management System) is a task management tool that allows users to create, read, update, and delete (CRUD) tasks efficiently, storing data in a relational database for persistent, reliable storage."
                : "Aplikasi Daftar TODO dengan RDBMS (Sistem Manajemen Basis Data Relasional) adalah alat manajemen tugas yang memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus (CRUD) tugas secara efisien, menyimpan data dalam basis data relasional untuk penyimpanan yang persisten dan andal."
            }`}
            techs={["Express JS", "Postgre SQL", "CRUD"]}
          />
          <MyProject
            img={"/assets/penilaian-kinerja-karyawan.png"}
            title={"Penilaian Kinerja Karyawan"}
            linkProject={"https://github.com/jereminathanael/penilaian-kinerja"}
            description={`${
              props.language === "EN"
                ? "A full-stack employee performance evaluation system built with HTML, CSS, Bootstrap, EJS, Express.js, Node.js, and PostgreSQL. Features include admin-only evaluations, five evaluation criteria, employee data input and deletion, score submission based on input data, evaluation removal, and automatic employee ranking based on results."
                : "Sistem evaluasi kinerja karyawan full-stack yang dibangun dengan HTML, CSS, Bootstrap, EJS, Express.js, Node.js, dan PostgreSQL. Fitur-fiturnya meliputi evaluasi khusus admin, lima kriteria evaluasi, input dan penghapusan data karyawan, pengiriman skor berdasarkan data input, penghapusan evaluasi, dan pemeringkatan karyawan otomatis berdasarkan hasil."
            }`}
            techs={["Express JS", "Postgre SQL", "Business"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
