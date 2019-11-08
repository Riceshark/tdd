const calc = (arg) => {
    const start = arg.slice(0, 2);
    let numbers = []
    if (start === "//") {
        const delimeter = arg[2];
        numbers = arg.slice(4, arg.length).split(delimeter);
    } else {
        numbers = arg.split(/[,\n]/);
    }
    if (numbers.length === 1 && numbers[0] === '')
        return 0;
    let sum = 0;
    numbers.forEach(x => {
        if (Number(x) < 0) {
            throw new Error('negatives not allowed');
        } else if (Number(x) <= 1000) {
            sum += Number(x)
        }
    });
    return sum;
};

export default calc
