import React, { Component } from "react";
import lines from "./lines.json";
import { Button, ButtonGroup } from "react-bootstrap";

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

  shuffleLineOne = () => {
    this.setState({
      storyLineOne: this.randomNumber1()
    });
  };

  shuffleLineTwo = () => {
    this.setState({
      storyLineTwo: this.randomNumber2()
    });
  };

  shuffleLineThree = () => {
    this.setState({
      storyLineThree: this.randomNumber3()
    });
  };

  shuffleAll = () => {
    this.shuffleLineOne();
    this.shuffleLineTwo();
    this.shuffleLineThree();
  };

  render() {
    return (
      <div>
        <h1>
          <ButtonGroup>
            <Button onClick={this.shuffleAll}>Shuffle all!</Button>
          </ButtonGroup>
        </h1>
        <h2>{lines.line1[this.state.storyLineOne]}</h2>
        <ButtonGroup>
          <Button onClick={this.shuffleLineOne}>Shuffle!</Button>
        </ButtonGroup>
        <h2>{lines.line2[this.state.storyLineTwo]}</h2>
        <ButtonGroup>
          <Button onClick={this.shuffleLineTwo}>Shuffle!</Button>
        </ButtonGroup>
        <h2>{lines.line3[this.state.storyLineThree]}</h2>
        <ButtonGroup>
          <Button onClick={this.shuffleLineThree}>Shuffle!</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Story;
