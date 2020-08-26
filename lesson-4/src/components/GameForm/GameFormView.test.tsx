import React from "react";
import { shallow } from "enzyme";
import { GameFormView } from "@components";

describe("Gameform markup", () => {
  it("match snapshoot", () => {
    const onGameMock = jest.fn();
    const props = {
      onChangeField: onGameMock,
      onResetForm: onGameMock,
      onAddGame: onGameMock,
    };
    const gameForm = shallow(<GameFormView {...props} />);

    expect(gameForm).toMatchSnapshot();
  });
});
