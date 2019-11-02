
const calc = (arg) => {
    let nums = arg.split(',');
    let result = 0;

    console.log(result);

    nums.forEach(function(element) {
        let currentNum = parseInt(element);

        if (!isNaN(currentNum)) {
            result += currentNum;
        }
    });

    return result;
}


export default calc
