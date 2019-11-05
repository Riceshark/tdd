const calc = (input) => {
    const values = input.split(',');
    console.log(values);
    let result = 0;

    values.forEach((item) =>{
        result += parseInt(item);

    });
    if (input === '' || undefined){
        result = 0;
    }
    return result
};

export default calc