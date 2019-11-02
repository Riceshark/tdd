
const calc = (str) => {
    if (str === '') return 0;
    const splitted = str.replace('\n',',').split(',');
    return splitted.reduce((acc, val) => acc + parseInt(val), 0);
};

export default calc
