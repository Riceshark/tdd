
const calc = (str) => {
    if (str === '') return 0;
    let delimiter = ',';
    const matches = str.match(/\/\/(.+)\n(.+)/i);
    if (matches) {
        delimiter = matches[1];
        str = matches[2];
    }
    const splitted = str.replace('\n',',').split(delimiter);
    return splitted.reduce((acc, val) => acc + parseInt(val), 0);
};

export default calc
