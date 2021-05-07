import React, { Component } from "react";
import Container from "../components/container/container";
import Card from "../components/card/card";
import projects from "../components/card/projects.json";

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
        </Container>
      </div>
    );
  }
}

export default Work;
