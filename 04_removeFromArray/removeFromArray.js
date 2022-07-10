const removeFromArray = function(arrList, ...arrRemove) {
    for(let arrRm of arrRemove){
        for( let i = 0; i < arrList.length; i++ ){
            if(arrList[i] === arrRm){
                arrList.splice(i,1);
                i--;
            }
        }
    }
    return arrList;
};

// Do not edit below this line
module.exports = removeFromArray;
