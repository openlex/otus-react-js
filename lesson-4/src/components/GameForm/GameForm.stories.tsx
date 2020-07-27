import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameForm } from "@components";

export default {
  title: "Форма добавления игры",
  component: GameForm,
  decorators: [withKnobs],
};

export const DefaultGame = () => <GameForm />;
