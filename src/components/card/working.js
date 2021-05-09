import React, { Component } from "react";
import Card from "./card.js";
import working from "./working.json";

class CurrProj extends Component {
  state = { working };

  constructListToo = (id) => {
    const working = this.state.working.filter((work) => work.id !== id);
    this.setState({ working });
  };

  render() {
    return (
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
    );
  }
}

export default CurrProj;
