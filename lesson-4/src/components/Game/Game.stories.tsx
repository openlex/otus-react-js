import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameForm } from "@components";
import { action } from "@storybook/addon-actions";

export default {
  title: "Список игр",
  component: GameForm,
  decorators: [withKnobs],
};

export const DefaultGameForm = () => (
  <GameForm onAddGame={action("click add game")} />
);
