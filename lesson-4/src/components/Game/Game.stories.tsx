import * as React from "react";
import { gamesMock as games } from "@mocks";
import { withKnobs, number, text, array } from "@storybook/addon-knobs";
import { Game } from "@components";

export default {
  title: "Список игр",
  component: Game,
  decorators: [withKnobs],
};

export const DefaultGame = () => {
  const { id, title, genres, description, rating } = games[0];

  return (
    <Game
      id={id}
      title={text("Заголовок", title)}
      genres={array("Список жанров (через запятую)", genres, ",")}
      description={text("Описание", description)}
      rating={number("Рэйтинг", rating, { min: 0, max: 5, step: 1 })}
    />
  );
};
