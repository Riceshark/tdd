const parseNumber = (number) => {
  const num = Number(number);
  if (num < 0) {
    throw new Error('negatives not allowed')
  } else if (num > 1000) {
    return 0
  }
  return num;
}

const calc = (input) => {
  let numbers = input;
  let delimiter = new RegExp('[,\n]');
  if (numbers.slice(0, 2) === '//') {
    const customDelimiter = numbers.split('\n')[0].slice(2);
    delimiter = new RegExp(customDelimiter + '|' + '[\n]', 'g')
    numbers = input.split('\n', 2)[1];
  }
  const numbers_splited = numbers.split(delimiter);
  return numbers_splited.reduce((accum, cur) => accum + parseNumber(cur), 0);
}

export default calc
