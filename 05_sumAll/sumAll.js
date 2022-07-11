const sumAll = function(firstInt, secondInt) {
    let totalSum = 0;

    if(firstInt < 0 || secondInt < 0) return "ERROR";
    if(typeof firstInt === 'string' || typeof secondInt === 'string') return "ERROR";
    if(Array.isArray(firstInt) || Array.isArray(secondInt)) return "ERROR";
    // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";  
    // above line is simple method in solving the string array error or to find the parameter is integer
    if (firstInt > secondInt) {
        const temp = firstInt;
        firstInt = secondInt;
        secondInt = temp;
    }

    for( let i = 0;i <= secondInt;i++){
        totalSum += i
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
