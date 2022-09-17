export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export function getRndOperator() {
  const ops = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const operator1 = ops[opindex];
  return operator1;
}
