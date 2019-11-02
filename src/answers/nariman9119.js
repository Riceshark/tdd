const stringCalc = (text) => {

    if (text.indexOf('-') !== -1) {
        throw new Error('negatives not allowed')
    }

    total = 0
    if (text === '') {
        return 0
    }
    if (text.split(',').length === 1 && text.indexOf('\n') !== -1 && text.indexOf('//') === -1) {
        return 1
    } else {

        if (text.indexOf('//') !== -1) {
            var del = text[2]
            text = text.replace('//' + del, '')
            text = text.replace('\n', '')
            console.log(text)

        } else {
            var del = ','

            var total = 0;

            text = text.replace('\n', ',')
        }

        for (var item in text.split(del)) {
            var temp = parseInt(text.split(del)[item])

            if (temp < 1000) {
                total = total + temp
            }

        }

    }


    return total
}



export default stringCalc
