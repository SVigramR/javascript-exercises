const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    
    let strRepeat = '';
    for(let i = 0;i < num;i++){
        strRepeat += string;
    }
    
    return strRepeat;
}

// Do not edit below this line
module.exports = repeatString;
