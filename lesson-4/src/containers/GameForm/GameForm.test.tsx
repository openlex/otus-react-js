import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { GameForm } from "@containers";

describe("Gameform actions", () => {
  let gameForm: ReactWrapper = {} as ReactWrapper;
  const onAddGameMock = jest.fn();
  let addButton: ReactWrapper = {} as ReactWrapper;
  let resetButton: ReactWrapper = {} as ReactWrapper;

  beforeEach(() => {
    gameForm = mount(<GameForm onAddGame={onAddGameMock} />);
    gameForm.setState({
      title: "Title",
      genres: "a,b, c",
      rating: "5",
      description: "Desc",
    });
    addButton = gameForm.find('[data-test-id="addButton"]');
    resetButton = gameForm.find('[data-test-id="resetButton"]');
  });

  it("fields are filled with states", () => {
    expect(gameForm.find('[data-test-id="input-title"]').props().value).toEqual(
      "Title"
    );
    expect(
      gameForm.find('[data-test-id="input-rating"]').props().value
    ).toEqual("5");
    expect(
      gameForm.find('[data-test-id="input-description"]').props().value
    ).toEqual("Desc");
    expect(
      gameForm.find('[data-test-id="input-genres"]').props().value
    ).toEqual("a,b, c");
  });

  const checkFormIsReset = function () {
    expect(gameForm.state()).toEqual({
      title: "",
      genres: "",
      rating: "",
      description: "",
    });
    expect(gameForm.find('[data-test-id="input-title"]').props().value).toEqual(
      ""
    );
    expect(
      gameForm.find('[data-test-id="input-rating"]').props().value
    ).toEqual("");
    expect(
      gameForm.find('[data-test-id="input-description"]').props().value
    ).toEqual("");
    expect(
      gameForm.find('[data-test-id="input-genres"]').props().value
    ).toEqual("");
  };

  it("click addButton calls reset of form", () => {
    addButton.simulate("click");
    gameForm.update();
    expect(onAddGameMock.mock.calls.length).toBe(1);
    checkFormIsReset();
  });

  it("click resetButton calls reset of form", () => {
    gameForm.setState({
      title: "Title",
      genres: "a,b, c",
      rating: "5",
      description: "Desc",
    });
    resetButton.simulate("click");
    gameForm.update();
    checkFormIsReset();
  });

  it("onChange FieldInput change the state", () => {
    Object.keys(gameForm.state()).forEach((fieldInput: string) => {
      const value = `new value ${fieldInput}`;
      const input = gameForm.find(`[data-test-id="input-${fieldInput}"]`);
      if (input.props().onChange) {
        /* eslint-disable @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        input.props().onChange({ value, name: fieldInput });
      }
      gameForm.update();
      expect(
        gameForm.find(`[data-test-id="input-${fieldInput}"]`).props().value
      ).toEqual(value);
      expect(gameForm.state(fieldInput)).toEqual(value);
    });
  });
});
