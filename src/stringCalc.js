const calc = (input) => {
    input = input.toString();
    let regex = /[+-]?\d+(?:\.\d+)?/g;
    let result = 0;

    let match = regex.exec(input);
    while (match) {
        result += parseInt(match[0]);
        match = regex.exec(input)
    }
    if (input === '' || undefined) {
        result = 0;
    }
    return result
};

export default calc