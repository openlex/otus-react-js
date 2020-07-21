import React from "react";
import * as s from "./GamesList.scss";
import { Game } from "@components";
import { IGame } from "@types";

interface IGamesListProps {
  games: IGame[];
}

export class GamesList extends React.Component<IGamesListProps> {
  render() {
    const { games } = this.props;

    return (
      <div className={s.block}>
        {games.map((game: IGame) => (
          <Game
            className={s.game}
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            genres={game.genres}
            rating={game.rating}
          />
        ))}
      </div>
    );
  }
}
