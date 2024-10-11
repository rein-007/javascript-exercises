const findTheOldest = function(arg) {
    
    let age = arg[0].yearOfDeath - arg[0].yearOfBirth;
    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
