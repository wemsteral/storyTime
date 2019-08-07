import React from "react";
import { shallow, render } from "enzyme";
import Story from "./Story";

it("renders without crashing", () => {
  shallow(<Story />);
});
