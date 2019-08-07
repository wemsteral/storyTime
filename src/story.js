import React, { Component } from "react";

class Story extends Component {
  constructor() {
    super();
    this.state = {
      storyLineOne: "Once upon a time..."
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.storyLineOne}</h2>
        <h2>{this.state.storyLineOne}</h2>
        <h2>{this.state.storyLineOne}</h2>
      </div>
    );
  }
}

export default Story;
