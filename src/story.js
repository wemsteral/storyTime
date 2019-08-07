import React, { Component } from "react";
import lines from "./lines.json";

class Story extends Component {
  constructor() {
    super();
    this.state = {
      storyLineOne: this.randomNumber1(),
      storyLineTwo: this.randomNumber2(),
      storyLineThree: this.randomNumber3()
    };
  }

  randomNumber1 = () => {
    return Math.floor(Math.random() * lines.line1.length);
  };

  randomNumber2 = () => {
    return Math.floor(Math.random() * lines.line2.length);
  };

  randomNumber3 = () => {
    return Math.floor(Math.random() * lines.line3.length);
  };

  render() {
    return (
      <div>
        <h2>{this.state.storyLineOne}</h2>
        <h2>{this.state.storyLineTwo}</h2>
        <h2>{this.state.storyLineThree}</h2>
      </div>
    );
  }
}

export default Story;
