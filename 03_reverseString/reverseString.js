const reverseString = function(word) {
    let num = word.length;
    let string = '';
    for (let i=num-1;i>=0;i--) {
        string+=word[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
