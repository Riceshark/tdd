const calc = (input) => {
    const values = input.split(',');
    console.log(values)
    let result = 0
    values.forEach((item) =>{
        result += Number(item);

    })
    return result
}

export default calc