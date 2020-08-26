import * as React from "react";
import { IFieldInputData, GameFormView } from "@components";

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
    return (
      <GameFormView
        {...this.state}
        onChangeField={this.onChangeField}
        onAddGame={this.addGame}
        onResetForm={this.resetForm}
      />
    );
  }
}
