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

it("renders the first line by default", () => {
  const wrapper = shallow(<Story />);
  expect(wrapper.find("h2").at(0).length).not.toBe(0);
});

it("renders the second line by default", () => {
  const wrapper = shallow(<Story />);
  expect(wrapper.find("h2").at(1).length).not.toBe(0);
});

it("renders the third line by default", () => {
  const wrapper = shallow(<Story />);
  expect(wrapper.find("h2").at(2).length).not.toBe(0);
});
