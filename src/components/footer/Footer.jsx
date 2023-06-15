import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGit,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                   
                    <span className="icon">
                        <a href="http://instagram.com">
                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/home">
                        <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/ajinkya-hubale">
                        <FaLinkedin />
                        </a>
                    </span>
                   <span className="icon">
                    <a href="https://github.com/ajinkyahubale12">
                    <FaGit />
                    </a>                   
                   </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;