import React from "react";
import { shallow, render } from "enzyme";
import Story from "./Story";

it("renders without crashing", () => {
  shallow(<Story />);
});

it("has space for three lines of story", () => {
  const wrapper = shallow(<Story />);
  expect(wrapper.find("h2").length).toBe(3);
});
