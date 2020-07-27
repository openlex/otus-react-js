import React from "react";

interface IGenreListProps {
  genres: string[];
}

export const GenreList: React.FC<IGenreListProps> = (
  props: IGenreListProps
) => {
  const genres = props.genres;

  return (
    <>
      {genres.map((genre: string, index: number) =>
        index == genres.length - 1 ? genre : `${genre}, `
      )}
    </>
  );
};
