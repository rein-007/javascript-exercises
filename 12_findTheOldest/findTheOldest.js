const findTheOldest = function(arg) {
    let result = [];
    let oldest = 0;
    let totalAge = 0;

    for (let i=0; i<arg.length; i++) {
        if (!arg[i].yearOfDeath) {
            arg[i].yearOfDeath=2024;
        }
        totalAge = arg[i].yearOfDeath - arg[i].yearOfBirth;
        
        if (totalAge>oldest) {
            oldest = totalAge;
            result = arg[i];
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
