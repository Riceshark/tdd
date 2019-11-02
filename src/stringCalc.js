
const calc = (str) => {
    if (typeof str !== 'undefined') {
        let vars = str.split(new RegExp('[\\n,]'));
        let res = 0;
        vars.forEach((v) => {
            res += Number(v)
        });
        return res;
    } else {
        return 0;
    }
};

export default calc
