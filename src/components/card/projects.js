import React, { Component } from "react";
import Card from "./card.js";
import projects from "./projects.json";

class ComProj extends Component {
  state = { projects };

  constructList = (id) => {
    const projects = this.state.projects.filter((project) => project.id !== id);
    this.setState({ projects });
  };

  render() {
    return (
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
    );
  }
}

export default ComProj;
