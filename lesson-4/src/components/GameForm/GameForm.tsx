import * as React from "react";
import * as s from "./GameForm.scss";
import { Button, FieldInput, Panel, IFieldInputData } from "@components";

export interface IGameItem {
  title: string;
  genres?: string[];
  description?: string;
  rating?: number;
}

export interface IGameFormProps {
  onAddGame(game: IGameItem): void;
}

export interface IGameFormState {
  title?: string;
  genres?: string;
  rating?: string;
  description?: string;
}

const initialState = {
  title: "",
  genres: "",
  rating: "",
  description: "",
};

export class GameForm extends React.Component<IGameFormProps, IGameFormState> {
  constructor(props: IGameFormProps) {
    super(props);

    this.state = initialState;

    this.onChangeField = this.onChangeField.bind(this);
    this.addGame = this.addGame.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onChangeField(data: IFieldInputData) {
    this.setState({
      [data.name]: data.value,
    });
  }

  addGame() {
    const { title, genres, rating, description } = this.state;

    if (title?.length) {
      this.props.onAddGame({
        title,
        rating: Number(rating),
        description,
        genres: genres?.split(",").map((genre) => genre.trim()),
      });

      this.resetForm();
    }
  }

  resetForm() {
    this.setState({
      ...initialState,
    });
  }

  render() {
    const { title, genres, rating, description } = this.state;

    return (
      <Panel className={s.block}>
        <FieldInput
          data-test-id="input-title"
          value={title}
          name="title"
          className={s.label}
          onChange={this.onChangeField}
          label="Заголовок"
        />
        <FieldInput
          data-test-id="input-rating"
          value={rating}
          name="rating"
          className={s.label}
          onChange={this.onChangeField}
          label="Рейтинг"
          type="number"
        />
        <FieldInput
          data-test-id="input-description"
          value={description}
          name="description"
          className={s.label}
          onChange={this.onChangeField}
          label="Описание"
          isTextArea
        />
        <FieldInput
          data-test-id="input-genres"
          value={genres}
          name="genres"
          className={s.label}
          onChange={this.onChangeField}
          label="Жанры, через запятую"
        />
        <div className={s.buttons}>
          <Button
            data-test-id="addButton"
            onClick={this.addGame}
            title="Добавить игру"
          />
          <Button
            data-test-id="resetButton"
            onClick={this.resetForm}
            title="Очистить поля"
          />
        </div>
      </Panel>
    );
  }
}
