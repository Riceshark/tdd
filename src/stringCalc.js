
const calc = (arg) => {
    let nums = arg.split(/,|\n/) ;
    let result = 0;

    nums.forEach(function(element) {
        let currentNum = parseInt(element.trim());

        if (!isNaN(currentNum)) {
            result += currentNum;
        }
    });

    return result;
}


export default calc
