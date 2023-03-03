export const addZero = (number: number): string =>
  number > 9 ? `${number}` : `0${number}`;
