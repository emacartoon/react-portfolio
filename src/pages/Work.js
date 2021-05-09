import React, { Component } from "react";
import Container from "../components/container/container";
import Card from "../components/card/card";
import projects from "../components/card/projects.json";
import working from "../components/card/working.json";

class Work extends Component {
  state = { projects };

  constructList = (id) => {
    const projects = this.state.projects.filter((project) => project.id !== id);
    this.setState({ projects });
  };

  render() {
    return (
      <div>
        <Container>
          <h2>Projects I've Completed</h2>
          <div>
            <div className="flex-row-evenly">
              {this.state.projects.map((project) => (
                <Card
                  key={project.name}
                  name={project.name}
                  img={project.img}
                  link={project.link}
                />
              ))}
            </div>
          </div>
          <h2>Projects I'm Currently Working On</h2>
          <div>
            <div className="flex-row-evenly">
              {this.state.working.map((work) => (
                <Card
                  key={work.name}
                  name={work.name}
                  img={work.img}
                  link={work.link}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Work;
