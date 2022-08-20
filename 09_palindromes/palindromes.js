const palindromes = function (str) {
    let string = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let revStr = string.split('').reverse().toString().replace(/,/g, '');;

    if (string === revStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
