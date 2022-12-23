import React from "react";
import { FooterLinks, FooterSocials } from "../../settings/footerconfig";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        {FooterSocials.map((item, index) => (
          <a href={item.link} key={index} target={"_blank"}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="middle">
        <h3>Coded By Kabir With 💖</h3>
      </div>
      <div className="right">
        {FooterLinks.map((item, index) => (
          <a href={item.url} key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
