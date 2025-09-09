import React from "react";
import { MdOutlineMailOutline, MdOutlineAddLocationAlt } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import ContactBox from "../components/ContactBox";

const Contact = (props) => {
  return (
    <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">{props.language === "EN" ? "Get In Touch" : "Mari Terhubung"}</h2>
        <div className="space-y-3 md:space-y-4 max-h-[400px] md:max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
          <ContactBox
            fromColor={"from-red-500"}
            toColor={"to-pink-500"}
            logo={<MdOutlineMailOutline className="text-white text-2xl" />}
            title={"Email"}
            linkContact={"mailto:jereminathanael332@gmail.com"}
            description={"jereminathanael332@gmail.com"}
          />
          <ContactBox fromColor={"from-green-500"} toColor={"to-emerald-500"} logo={<FaWhatsapp className="text-white text-2xl" />} title={"WhatsApp"} linkContact={"http://wa.me/6289602668106"} description={"089602668106"} />
          <ContactBox
            fromColor={"from-blue-500"}
            toColor={"to-cyan-500"}
            logo={<MdOutlineAddLocationAlt className="text-white text-2xl" />}
            title={`${props.language === "EN" ? "Location" : "Lokasi"}`}
            linkContact={"https://maps.app.goo.gl/NVMVjkx4Z24wryfJA"}
            description={"Kabupaten Bogor Indonesia"}
          />
          <ContactBox
            fromColor={"from-blue-600"}
            toColor={"to-indigo-600"}
            logo={<LuLinkedin className="text-white text-2xl" />}
            title={"Linkedin"}
            linkContact={"https://www.linkedin.com/in/jeremia-nathanael-bagiono-06a336283/"}
            description={"Jeremia Nathanael Bagiono"}
          />
          <ContactBox
            fromColor={"from-pink-500"}
            toColor={"to-purple-500"}
            logo={<LuInstagram className="text-white text-2xl" />}
            title={"Instagram"}
            linkContact={"https://www.instagram.com/jereminathanael/"}
            description={"jereminathanael"}
          />
          <ContactBox fromColor={"from-gray-600"} toColor={"to-gray-800"} logo={<FiGithub className="text-white text-2xl" />} title={"GitHub"} linkContact={"https://github.com/jereminathanael/"} description={"jereminathanael"} />
          <a
            href="https://wa.me/6289602668106"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
          >
            <FaWhatsapp className="text-white text-2xl" />
            Send WhatsApp Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
