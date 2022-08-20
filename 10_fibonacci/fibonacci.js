const fibonacci = function(num) {
    let number = parseInt(num),
        firstNum = 0,
        secNum = 1,
        sum = 1;

    for (let index = 1; index < number; index++) {
        sum = firstNum + secNum;
        firstNum = secNum;
        secNum = sum;
    }

    if (number < 0) {
        return "OOPS";
    }
    
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
