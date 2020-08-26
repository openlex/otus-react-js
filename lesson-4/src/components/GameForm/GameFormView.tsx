import * as React from "react";
import * as s from "./GameFormView.scss";
import { Button, FieldInput, Panel, IFieldInputData } from "@components";

export interface IGameFormViewProps {
  title?: string;
  genres?: string;
  description?: string;
  rating?: string;
  onChangeField(data: IFieldInputData): void;
  onAddGame(): void;
  onResetForm(): void;
}

export const GameFormView: React.FC<IGameFormViewProps> = (
  props: IGameFormViewProps
) => {
  const {
    title,
    genres,
    rating,
    description,
    onChangeField,
    onAddGame,
    onResetForm,
  } = props;

  return (
    <Panel className={s.block}>
      <FieldInput
        data-test-id="input-title"
        value={title}
        name="title"
        className={s.label}
        onChange={onChangeField}
        label="Заголовок"
      />
      <FieldInput
        data-test-id="input-rating"
        value={rating}
        name="rating"
        className={s.label}
        onChange={onChangeField}
        label="Рейтинг"
        type="number"
      />
      <FieldInput
        data-test-id="input-description"
        value={description}
        name="description"
        className={s.label}
        onChange={onChangeField}
        label="Описание"
        isTextArea
      />
      <FieldInput
        data-test-id="input-genres"
        value={genres}
        name="genres"
        className={s.label}
        onChange={onChangeField}
        label="Жанры, через запятую"
      />
      <div className={s.buttons}>
        <Button
          data-test-id="addButton"
          onClick={onAddGame}
          title="Добавить игру"
        />
        <Button
          data-test-id="resetButton"
          onClick={onResetForm}
          title="Очистить поля"
        />
      </div>
    </Panel>
  );
};
