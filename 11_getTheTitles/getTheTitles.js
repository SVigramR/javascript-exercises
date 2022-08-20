const getTheTitles = function(arr) {
    let array = [];
    let title;
    for (let index = 0; index < arr.length; index++) {
        title = arr[index].title;
        array.push(title)
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
