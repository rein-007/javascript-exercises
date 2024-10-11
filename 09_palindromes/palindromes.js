const palindromes = function (str) {
    var string = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    return string === string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
