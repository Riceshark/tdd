const calc = (input) => {
    input = input.toString();
    let regex = /[+-]?\d+(?:\.\d+)?/g;
    let result = 0;

    let match = regex.exec(input);
    while (match) {
        let number = parseInt(match[0]);
        if (number < 0){
            throw new Error("negatives not allowed");
        }
        result += number;
        match = regex.exec(input)
    }
    if (input === '' || undefined) {
        result = 0;
    }
    return result
};

export default calc