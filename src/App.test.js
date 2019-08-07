import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders a header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">StoryTime!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
