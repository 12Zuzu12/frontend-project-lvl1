export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export function getRndOperator() {
  let ops = ['+', '-', '*'];
  let opindex = Math.floor(Math.random() * 3);
  const operator1 = ops[opindex];
  return operator1;
};
