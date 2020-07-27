import React from "react";
import { Button } from "./Button";
import { shallow } from "enzyme";

describe("Test Button markup", () => {
  const title = "title";
  const button = shallow(<Button title={"title"} />);

  it("has the same title as in props", () => {
    expect(button.find("button").text()).toEqual(title);
  });

  it("is disabled if it sets in props", () => {
    const isDisabled = true;
    const button = shallow(<Button title={"title"} isDisabled={isDisabled} />);

    expect(button.find("button[disabled]").length).toBe(1);
  });
});

describe("Test Button behavior", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button title="OK" onClick={mockCallBack} />);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
