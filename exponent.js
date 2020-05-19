const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (total, current) => total * current;
  return items.reduce(reducer);
}

console.log(toThePowerOf(5, 20));

console.log(Array(5).fill(9))