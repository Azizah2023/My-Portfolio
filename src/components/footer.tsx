// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-2 gap-4  ">
        {/* Adjust space-x value here */}
        <a
          href="https://www.linkedin.com/in/azizah-al-shehre-083300202"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </a>
        {/* <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className="h-8 w-8 px-4" />
        </a> */}
        <a
          href="https://github.com/Azizah2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
