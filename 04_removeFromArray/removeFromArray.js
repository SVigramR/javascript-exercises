const removeFromArray = function(...theArgs) {
    const arr = theArgs[0];

    const newArr = [];

    arr.forEach((item) => {
        if(!theArgs.includes(item)){
            newArr.push(item);
        }
    });

    return newArr;
};

// let removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;