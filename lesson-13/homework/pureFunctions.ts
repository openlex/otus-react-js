// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.sort((a: Team, b: Team) => b.score - a.score)[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return `?${Object.keys(qsObj)
    .map((param) => `${param}=${qsObj[param]}`)
    .join("&")}`;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  // @ts-ignore
    return Object.fromEntries(
    qs
      .replace(/^\?/, "")
      .split("&")
      .map((el) => el.split("="))
  );
};
