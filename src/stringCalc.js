const calc = (input) => {
    input = input.toString();
    input = input.replace('\n', ',');
    const values = input.split(',');
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