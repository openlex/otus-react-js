import * as React from "react";
import { gamesMock as games } from "@mocks";
import { GamesList } from "@components";

export default {
  title: "Список игр",
  component: GamesList,
};

export const List = () => <GamesList games={games} />;
