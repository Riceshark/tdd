const calc = (statement) => {
    var result = 0;
    var delimeter = ',';
    var match = statement.match(/\/\/(.+)\n(.*)/i);
    var numerical_statement = statement;
    if (match != null){
        delimeter = match[1];
        numerical_statement = match[2];
    }
    numerical_statement = numerical_statement.replace('\n', ',');
    numerical_statement = numerical_statement.replace(',', delimeter);
    // return delimeter;
    //numerical_statement += delimeter;
    var tokens = numerical_statement.split(delimeter);
    for (var token in tokens){
        var int = parseInt(tokens[token]);
        if (int < 0){
            throw new Error('negatives not allowed');
            return;
        }
        if (int < 1000) {
            result = result + int;
        }
    }
    return result;
};

export default calc