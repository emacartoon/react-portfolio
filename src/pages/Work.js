import React, { Component } from "react";
import Container from "../components/container/container";
import ComProj from "../components/card/projects.js";
import CurrProj from "../components/card/working.js";

class Work extends Component {
  render() {
    return (
      <div>
        <div className="downloadRes">
          <a
            href="/resume/EmaCartoon_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Download Resume
          </a>
        </div>
        <Container>
          <h2>Completed Projects</h2>
          <div>
            <ComProj />
          </div>

          <h2>Projects I'm Currently Working On</h2>
          <div>
            <CurrProj />
          </div>
        </Container>
      </div>
    );
  }
}

export default Work;
