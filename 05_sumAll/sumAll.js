const sumAll = function(firstNum, secondNum) {
    let result = 0;
    let i = 0;
    if (typeof(firstNum+secondNum) === 'number' && Number.isInteger(firstNum+secondNum) === true && firstNum>=0 && secondNum>=0) {
        if (firstNum>secondNum) {
            const num = firstNum;
            firstNum = secondNum;
            secondNum = num;
        }
        
        for (i = firstNum;i<=secondNum;i++) {
            result += i;
        }
    } else {
        result = 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
