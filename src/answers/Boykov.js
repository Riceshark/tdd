const calc = (arg) => {
    const regex = /(\/\/)(.*)\n/gm;
    let m;
    let delimeters = [];

    while ((m = regex.exec(arg)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            if (groupIndex == 2) {
                delimeters.push(match);
            }
        });
    }

    if (delimeters.length == 1) { // Значит у нас регулярка
        arg.replace('//'+delimeters[0]+'\n', '');
    } else {
        delimeters.push(',');
    }
    delimeters.push('\n');

    let re = new RegExp(delimeters.join('|'));
    let nums = arg.split(re);
    let result = 0;

    nums.forEach(function (element) {
        let currentNum = parseInt(element.trim());

        if (currentNum < 0) {
            throw new Error('negatives not allowed');
        }

        if (!isNaN(currentNum) && currentNum <= 1000) {
            result += currentNum;
        }
    });

    return result;
}


export default calc
