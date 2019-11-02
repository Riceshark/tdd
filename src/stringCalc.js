
const stringCalc = (text) =>{
    if (text===''){
        return 0
    }
    if (text.split(',').length===1){
        return 1
    }

    if (text.split(',').length>1){
        var total = 0;
        for (var item in text.split(',')){
            total = total + parseInt(text.split(',')[item])

        }
        return total
    }

}

export default stringCalc
