const sumAll = function(firstInt, secondInt) {
    let totalSum = 0;
    let firstNum = firstInt;
    let secondNum = secondInt;

    if(firstNum < 0 || secondNum < 0){
        return "ERROR";
    } else if(typeof firstNum === 'string' || typeof secondNum === 'string'){
        return "ERROR";
    } else if(Array.isArray(firstNum) || Array.isArray(secondNum)){
        return "ERROR";
    }

    if(firstNum > secondNum){
        for( let i = 0;i <= firstNum;i++){
            totalSum += i
        }
    } else {
        for( let i = 0;i <= secondNum;i++){
            totalSum += i
        }
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
