
const calc = (numbers) => {
  const numbers_splited = numbers.split(/[,\n]/)
  return numbers_splited.reduce((accum, cur) => accum + Number(cur), 0)
}


export default calc
