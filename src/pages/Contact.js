import React from "react";
import Container from "../components/container/container";

function Contact() {
  return (
    <div>
      <Container>
        <h2>Contact Info</h2>
        <div className="links">
          <a href="mailto:emmalysyk@gmail.com">
            <img
              src=(require{'./imgs/icons/iconfinder_Mail_2190981.png'})
              height="45px"
              alt="Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/emily-lysyk-2896314/">
            <img
              src=(require{'./imgs/icons/iconfinder_Circled_Linkedin_svg_5279114.png'})
              height="45px"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.behance.net/emmalysyk">
            <img
              src=(require{'./imgs/icons/iconfinder_Circled_Behance4_svg_5279109.png'})
              height="45px"
              alt="Behance"
            />
          </a>
          <a href="https://github.com/emacartoon">
            <img
              src=(require{'./imgs/icons/iconfinder_github_rounded_394187.png'})
              height="50px"
              alt="GitHub"
            />
          </a>
          <br />
          <a href="/resume/EmaCartoon_Resume.pdf">Download Resume</a>
        </div>

        <h2>Link Tree</h2>
        <div className="links">
          <a href="https://stackoverflow.com/users/6096866/emma-lysyk">
            <img
              src=(require{'./imgs/icons/iconfinder_stackoverflow_rounded_394191.png'})
              height="50px"
              alt="Stack Overflow"
            />
          </a>
          <a href="https://deviantart.com/emmalysyk">
            <img
              src=(require{'./imgs/icons/iconfinder_62-deviantart_104441.png'})
              height="50px"
              alt="deviantArt"
            />
          </a>
          <a href="https://www.facebook.com/EmaCartoon">
            <img
              src=(require{'./imgs/icons/iconfinder_Circled_Facebook_svg_5279111.png'})
              height="45px"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com/EmaCartoon/">
            <img
              src=(require{'./imgs/icons/iconfinder_Circled_Instagram_svg_5279112.png'})
              height="45px"
              alt="Instagram"
            />
          </a>
          <a href="https://twitter.com/EmaCartoon">
            <img
              src=(require{'./imgs/icons/iconfinder_Circled_Twitter_svg_5279123.svg'})
              height="45px"
              alt="Twitter"
            />
          </a>
          <br />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
