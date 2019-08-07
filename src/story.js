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
        <p>{this.state.storyLineOne}</p>
      </div>
    );
  }
}

export default Story;
