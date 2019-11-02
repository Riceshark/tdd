
const calc = (input) => {
  let numbers = input;
  let delimiter = new RegExp('[,\n]');
  if (numbers.slice(0, 2) === '//') {
    const customDelimiter = numbers.split('\n')[0].slice(2);
    delimiter = new RegExp(customDelimiter + '|' + '[\n]', 'g')
    numbers = input.split('\n', 2)[1];
  }
  const numbers_splited = numbers.split(delimiter);
  return numbers_splited.reduce((accum, cur) => accum + Number(cur), 0);
}

export default calc
