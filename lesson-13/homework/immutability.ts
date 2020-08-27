// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const {size, ...props} = originalTeam;

  return {
    ...props,
    name: "New York Badgers",
    roster: 25,
  }
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => {
  const [number1, number2, ...rest] = [1, 2, 3];

  return ["two", ...rest, 4, 5];
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
  const { captain, ...rest } = originalTeam;

  return {
    ...rest,
    captain: {
      ...captain,
      age: 28,
    },
  }
}
