const stringCalc = (text) => {
    total = 0
    if (text === '') {
        return 0
    }
    if (text.split(',').length === 1 && text.indexOf('\n') !== -1 && text.indexOf('//') === -1) {
        return 1
    } else {

        if (text.indexOf('//') !== -1) {
            var del = text[2]
            text = text.replace('//'+ del, '')
            text = text.replace('\n', '')
            console.log(text)

        } else {
            var del = ','

            var total = 0;

            text = text.replace('\n', ',')
        }

        for (var item in text.split(del)) {
            console.log(text.split(del)[item])
            total = total + parseInt(text.split(del)[item])

        }


        return total
    }

}

export default stringCalc
