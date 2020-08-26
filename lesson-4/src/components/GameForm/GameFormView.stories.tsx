import * as React from "react";
import { array, number, text, withKnobs } from "@storybook/addon-knobs";
import { GameFormView } from "@components";
import { gamesMock as games } from "@mocks";
import { action } from "@storybook/addon-actions";

export default {
  title: "Форма добавления игры",
  component: GameFormView,
  decorators: [withKnobs],
};

export const DefaultGame = () => {
  const { title, genres, description, rating } = games[0];
  return (
    <GameFormView
      onChangeField={action("onChangeField")}
      onAddGame={action("onChangeField")}
      onResetForm={action("onResetForm")}
      title={text("Заголовок", title)}
      genres={text("Список жанров", "стратегия, рпг")}
      description={text("Описание", description)}
      rating={text("Рэйтинг", rating.toString())}
    />
  );
};
