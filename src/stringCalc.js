const stringCalc = (text) => {
    if (text === '') {
        return 0
    }
    if (text.split(',').length === 1 && text.indexOf('\n') !== -1) {
        return 1
    } else {
        var total = 0;
        text = text.replace('\n', ',')
        console.log(text)
        for (var item in text.split(',')) {
            total = total + parseInt(text.split(',')[item])

        }
        return total
    }

}

export default stringCalc
