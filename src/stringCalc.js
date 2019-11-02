
const calc = (str) => {
    if (str === '') return 0;
    const splitted = str.split(',');
    if (splitted.length === 1) {
        return parseInt(splitted[0]);
    }
    return parseInt(splitted[0]) + parseInt(splitted[1]);
};

export default calc
