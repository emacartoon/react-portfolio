import React, { Component } from "react";

import learning from "../components/learn/learn.json";
import knowledge from "../components/knowledge/knowledge.json";
import Know from "../components/knowledge/knowledge.js";
import Learn from "../components/learn/learn.js";
import Container from "../components/container/container.js";
import animation from "../imgs/Studios_Gif_Flat_web.gif";

class About extends Component {
  state = { learning, knowledge };

  constructList = (id) => {
    const learning = this.state.learning.filter((learn) => learn.id !== id);
    this.setState({ learning });

    const knowledge = this.state.knowledge.filter((know) => know.id !== id);
    this.setState({ knowledge });
  };

  render() {
    return (
      <div>
        <div className="animation">
          <img src={animation} alt="Animated me looking around" />
        </div>
        <Container>
          <div>
            <h1>Hello!</h1>
            <div className="intro">
              <p>
                I'm Emma Lysyk (pronounced "lih-sick"), known online as
                EmaCartoon. I am an illustrating, coding, graphic designing,
                laser engraving, prop & model making mad scientist who loves
                chai.
              </p>
              <p>
                I have 2 dogs, 6 cats, 8 chickens, a 20 gallon fishtank, and a
                lot of succulents.
              </p>
            </div>
          </div>

          <div>
            <h2>This is my Toolbox:</h2>
            <div>
              <div>
                <h3 className="bar">Stuff I Know...</h3>
                <div className="flex-row-justify">
                  {this.state.knowledge.map((know) => (
                    <Know
                      key={know.name}
                      abbrv={know.abbrv}
                      name={know.name}
                      icon={know.icon}
                      link={know.link}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="bar">Stuff I'm Actively Learning...</h3>
              <div className="flex-row-justify">
                {this.state.learning.map((learn) => (
                  <Learn
                    key={learn.name}
                    abbrv={learn.abbrv}
                    name={learn.name}
                    icon={learn.icon}
                    link={learn.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
