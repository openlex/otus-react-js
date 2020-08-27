import R from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = R.compose(
  R.prop("name"),
  R.last,
  R.sortWith([R.ascend(R.prop("score"))]),
  (teams: Team[]) => teams
);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

// export const createQs = R.compose(
//   (qsObj: QsObj) => Object.keys(qsObj),
// );

// // Задание 3
// const parseQs = R.compose();
