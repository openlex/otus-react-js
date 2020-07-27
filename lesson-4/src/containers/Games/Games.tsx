import React from "react";
import { GamesList } from "@/components/GamesList/GamesList";
import { gamesMock as games } from "@mocks";
import { GameForm } from "@components";
import { IGame } from "@types";

interface IGamesState {
  games: IGame[];
}

export class Games extends React.Component<{}, IGamesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      games,
    };

    this.addGame = this.addGame.bind(this);
  }

  addGame(game: {
    title: string;
    genres?: string[];
    description?: string;
    rating?: number;
  }) {
    const games = [
      ...this.state.games,
      {
        id: this.state.games.length + "_game",
        ...game,
      },
    ];

    this.setState(
      {
        games,
      },
      () => {
        this.state.games;
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Список игр</h1>
        <GamesList games={this.state.games} />
        <GameForm onAddGame={this.addGame} />
      </div>
    );
  }
}
