import React from "react";
import { FiGithub, FiTwitter, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container-custom py-12 text-center">
        {/* Brand */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            FontPair
          </h3>
          <p className="text-gray-600 mb-4">
            Temukan kombinasi font Google Fonts yang sempurna untuk proyek
            desain Anda.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {" "}
          <p className="text-gray-500 text-sm">
            {" "}
            © 2026 FontPair. All rights reserved.{" "}
          </p>{" "}
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-4 md:mt-0">
            {" "}
            Made with <FiHeart className="text-red-500" /> for designers and
            developers{" "}
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;