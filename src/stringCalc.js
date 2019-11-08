
const calc = (arg) => {
  const numbers = arg.split(/[,\n]/);
  if (numbers.length === 1 && numbers[0] === '')
    return 0;
  let sum = 0;
  numbers.forEach(x => sum += Number(x));
  return sum;
}

export default calc
