const calc = (str) => {
    if (typeof str !== 'undefined') {
        let vars = str.split(new RegExp('[\\n,/;p]'));
        console.log(vars);
        let res = 0;
        vars.forEach((v) => {
            if (v !== '') {
                res += Number(v)
                if (v < 0) {
                    throw Error('negatives not allowed');
                }
            }
        });
        return res;
    } else {
        return 0;
    }
};

export default calc
