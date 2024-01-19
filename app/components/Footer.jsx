import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>MC</span>
        <p className="text-slate-600">
          <a
            className="impressum"
            href="/files/Impressum.pdf"
            download="Impressum.pdf"
          >
            Impressum
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
