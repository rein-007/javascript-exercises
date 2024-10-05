const removeFromArray = function(theArray,...theArgs) {
    let result = [];

    for (let i = 0;i<theArray.length;i++) {
        // for (let x = 0; x<theArgs.length; x++) {
            if (!theArgs.includes(theArray[i])) {
            // if (theArray[i] != theArgs[x]) {
                result = result.concat(theArray[i]);
            }
        // }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
