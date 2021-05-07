import React from "react";
import Container from "../components/container/container";

function Contact() {
  return (
    <div>
      <Container>
        <h2>Contact Info</h2>
        <div className="links">
          <div className="iconDivs">
            <a href="mailto:emmalysyk@gmail.com">
              <img
                src={"./icons/iconfinder_Mail_2190981.png"}
                height="45px"
                alt="Email"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://www.linkedin.com/in/emily-lysyk-2896314/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_Circled_Linkedin_svg_5279114.png"}
                height="45px"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://emacartoon.myportfolio.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_Circled_Behance4_svg_5279109.png"}
                height="45px"
                alt="Adobe Portfolio Powered by Behance"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://github.com/emacartoon"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_github_rounded_394187.png"}
                height="50px"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="downloadRes">
            <a href="/resume/EmaCartoon_Resume.pdf" target="_blank" rel="noreferrer noopener" >Download Resume</a>
          </div>
        </div>

        <h2>Link Tree</h2>
        <div className="links">
          <div className="iconDivs">
            <a
              href="https://stackoverflow.com/users/6096866/emma-lysyk"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_stackoverflow_rounded_394191.png"}
                height="50px"
                alt="Stack Overflow"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://deviantart.com/emmalysyk"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_62-deviantart_104441.png"}
                height="50px"
                alt="deviantArt"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://www.facebook.com/EmaCartoon"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_Circled_Facebook_svg_5279111.png"}
                height="45px"
                alt="Facebook"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://www.instagram.com/EmaCartoon/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_Circled_Instagram_svg_5279112.png"}
                height="45px"
                alt="Instagram"
              />
            </a>
          </div>
          <div className="iconDivs">
            <a
              href="https://twitter.com/EmaCartoon"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"./icons/iconfinder_Circled_Twitter_svg_5279123.svg"}
                height="45px"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
