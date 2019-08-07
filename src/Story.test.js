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

it("renders shuffle buttons for each line", () => {
  const wrapper = shallow(<Story />);
  const label = "Shuffle!";
  const button1 = wrapper.find("Button").at(1);
  const button2 = wrapper.find("Button").at(2);
  const button3 = wrapper.find("Button").at(3);
  expect(button1.contains(label)).toEqual(true);
  expect(button2.contains(label)).toEqual(true);
  expect(button3.contains(label)).toEqual(true);
});
