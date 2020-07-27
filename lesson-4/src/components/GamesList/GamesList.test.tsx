import React from "react";
import { GamesList } from "./GamesList";
import { shallow } from "enzyme";
import { gamesMock as games } from "@mocks";

describe("GamesList", () => {
  const genreList = shallow(<GamesList games={games} />);

  it("Check contained games number", () => {
    expect(genreList.find("Game").length).toBe(2);
  });

  it("Snap shot", () => {
    expect(genreList).toMatchSnapshot();
  });
});
